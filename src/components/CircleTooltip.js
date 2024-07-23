import React from 'react';
import PropTypes from 'prop-types';

const CircleTooltip = ({ text, tooltip }) => {
  return (
    <div className="relative flex items-center group ml-2"> {/* Add ml-4 for left margin */}
      {/* Circle */}
      <div className="w-3 h-3 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 text-xs font-semibold cursor-pointer group-hover:tooltip-visible">
        {text}
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 px-3 py-1 bg-gray-700 text-white text-xs rounded w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tooltip}
      </div>
    </div>
  );
};

CircleTooltip.propTypes = {
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default CircleTooltip;
