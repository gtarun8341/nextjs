import React from 'react';
import CircleTooltip from '@/components/CircleTooltip'; // Adjust the path as necessary

const ToggleSwitch = ({ id, checked, onChange, label, tooltip }) => {
  return (
    <div className="flex items-center justify-between border border-gray-400 rounded-lg p-2 w-full max-w-xs">
      <div className="flex items-center">
        <CircleTooltip text="i" tooltip={tooltip} />
        <span className="text-sm font-medium text-gray-700 ml-2">{label}</span>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <label htmlFor={id} className="flex items-center cursor-pointer">
          <span className={`relative block w-12 h-6 rounded-full shadow-inner border border-gray-400 bg-gray-300 transition-colors duration-200 ease-in-out ${checked ? 'bg-green-500' : 'bg-gray-300'}`}>
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${checked ? 'translate-x-6' : 'translate-x-0'}`}
            ></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
