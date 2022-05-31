import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import axios from 'axios';
import Loader from './Loader';
import { ToastContainer } from 'react-toastify';
import Modal from './Modal';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    imagesInfo: [],
    loading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      this.Fetch();
    }
    this.handleScroll();
  }

  formSubmitHandler = querry => {
    this.setState({ searchQuery: querry, page: 1, imagesInfo: [] });
  };

  increasePage = () => {
    // console.log('PAGGE +1');
    this.setState({ page: this.state.page + 1 });
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  async Fetch() {
    const { searchQuery, page } = this.state;
    const BASE_URL =
      'https://pixabay.com/api/?key=26582400-238f4fc38707f184745ce0218&q';
    const url = `${BASE_URL}=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

    this.toggleLoading();
    return axios
      .get(url)
      .then(res => {
        if (!(res.status >= 200 && res.status < 300)) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then(res => {
        this.setState(({ imagesInfo }) => {
          return { imagesInfo: [...imagesInfo, ...res.data.hits] };
        });
      })
      .catch(error => this.setState({ error }))
      .finally(this.toggleLoading);
  }

  // modalContentSet = itemId => {
  //   console.log(itemId);
  //   const { visibleImages } = this.state;
  //   const element = visibleImages.find(({ id }) => id === itemId);
  //   this.setState({ modalContent: element.largeImageURL });
  // };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { imagesInfo, loading, error, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {error && 'Ошибка запроса'}
        {imagesInfo && (
          <ImageGallery
            images={imagesInfo}
            // onItemClick={this.modalContentSet}
          />
        )}
        {loading && <Loader />}
        {imagesInfo.length > 0 && <Button loadMoreBTN={this.increasePage} />}
        <ToastContainer />
        {showModal && (
          <Modal>
            <img
              src="https://pixabay.com/get/gc1cca42218f9ac3d933a8fce53476691c5bf60988835f58b8755ee87b8cfdd2d7ece5e0688b0539e21e18f5e47ef1e24_640.jpg"
              alt="something"
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
