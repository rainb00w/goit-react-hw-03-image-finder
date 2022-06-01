import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchText = event.target.elements.searchQuery.value;
    if (searchText.trim() === '') {
      return toast.warn('Please, enter something', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
    // this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_buttonLabel}>Search</span>
          </button>
          <input
            className={s.SearchForm_input}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={searchQuery}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchBar;
