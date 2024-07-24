import React from 'react';
import FilterIcon from '@/components/FilterIcon'; // Adjust the import path as necessary
import DropdownIcon from '@/components/DropdownIcon'; // Adjust the import path as necessary

const Filter = ({ filterOptions, selectedOption, onFilterChange }) => {
  return (
    <div className="relative flex items-center  space-x-4 bg-[#0F0F0F] p-2 rounded-2xl ">
      <div className="relative flex items-center ">
        <FilterIcon className="absolute left-2 w-4 h-4 text-white" />
        <select
          value={selectedOption}
          onChange={onFilterChange}
          className="border bg-[#0F0F0F] text-white border-gray-300 rounded-lg px-4 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          style={{ width: '120px', paddingLeft: '2.5rem' }} // Adjusted width
        >
          <option value="" disabled>
            Filter
          </option>
          {filterOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <DropdownIcon className="absolute right-2 w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default Filter;
