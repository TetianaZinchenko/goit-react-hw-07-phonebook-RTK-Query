import PropTypes from 'prop-types';

import { ImCross } from 'react-icons/im';

import IconButton from '../IconButton';

import { FilterWrapper, Input } from './Filter.styled';

const Filter = ({ value, onChange, onClick }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name:</label>
      <FilterWrapper>
        <Input type="text" name="filter" value={value} onChange={onChange} />
        {value && (
          <IconButton
            color="#400080"
            type="button"
            aria-label="Clear filter"
            onClick={onClick}
          >
            <ImCross />
          </IconButton>
        )}
      </FilterWrapper>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
