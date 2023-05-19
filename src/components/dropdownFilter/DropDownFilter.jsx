import { useState } from 'react';
import { StyledFilterBox, StyledSelect } from './userFilter.styled';

const DropdownFilter = ({ setFilter }) => {
  const options = ['All', 'follow', 'following'];

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = option => {
    setSelectedOption(option);
    setFilter(option);
  };

  return (
    <StyledFilterBox>
      <h3>Filter The Users List</h3>
      <StyledSelect
        value={selectedOption}
        onChange={e => handleOptionChange(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </StyledFilterBox>
  );
};

export default DropdownFilter;
