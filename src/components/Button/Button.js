import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ loadMoreBTN }) => {
  return (
    <div className={s.centered}>
      <button type="button" className={s.Button} onClick={loadMoreBTN}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = { loadMoreBTN: PropTypes.func.isRequired };

export default Button;
