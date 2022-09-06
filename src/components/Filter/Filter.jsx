import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({filter, onChange }) => {

    return (<label>
                <input
                type="text"
                value={filter}
                onChange={onChange}
                className={css.contact__input}
                placeholder="Find contacts by name"
                />
            </label>);
};

export default Filter

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };