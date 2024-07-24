import React from 'react';
import FilterIcon from '@/components/FilterIcon'; // Adjust the import path as necessary
import DropdownIcon from '@/components/DropdownIcon'; // Adjust the import path as necessary

const Filter = ({ filterOptions, selectedOption, onFilterChange }) => {
  return (
    <div className="relative flex items-center mb-4 space-x-4 bg-[#0F0F0F] p-4 rounded-lg">
      <div className="relative flex items-center">
        <FilterIcon className="absolute left-2 w-6 h-6 text-white" />
        <select
          value={selectedOption}
          onChange={onFilterChange}
          className="border bg-[#0F0F0F] text-white border-gray-300 rounded-lg px-12 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          style={{ paddingLeft: '2.5rem' }} // Adjust padding as needed
        >
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
