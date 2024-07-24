import React from 'react';

const Table = ({ headers, data, actions = [] }) => { // Default value for actions
  // Helper function to check if a value is negative
  const isNegative = (value) => {
    if (typeof value === 'string') {
      return value.startsWith('-') || (value.includes('%') && parseFloat(value) < 0);
    }
    return false;
  };

  // Helper function to get the color for specific headers
  const getCellColor = (header, item) => {
    if (header === 'ROI' || header === 'PNL' || header === 'Status') {
      return isNegative(item.pnl) ? 'text-red-500' : 'text-green-500';
    }
    return ''; // Default color if not ROI, PNL, or Status
  };

  // Helper function to render cell content with conditional styling
  const renderCellContent = (header, item) => {
    const key = header.toLowerCase().replace(/\s+/g, '');
    const value = item[key];
    const cellColor = getCellColor(header, item);

    return (
      <div className={`flex items-center ${cellColor}`}>
        {header === 'Invested' || header === 'Current' || header === 'PNL' || header === 'Sold' || header === 'Pooled Sol' ? (
          <>
            <img src="/sol.jpg" alt="Sol" className="w-6 h-6 mr-2" />
            {value}
          </>
        ) : (
          value
        )}
      </div>
    );
  };

  // Render action icons based on the actions prop
  const renderActions = (item) => {
    const actionComponents = {
      quickBuy: (
        <button key="quickBuy" className="bg-gray-500 text-white px-5 py-2 rounded-2xl hover:bg-gray-600">
          Quick Buy
        </button>
      ),
      quickSell: (
        <button key="quickSell" className="bg-gray-500 text-white px-5 py-2 rounded-2xl hover:bg-gray-600">
          Quick Sell
        </button>
      ),
      cancel: (
        <button key="cancel" className="bg-gray-500 text-white px-5 py-2 rounded-2xl hover:bg-gray-600">
          Cancel
        </button>
      ),
      rotate: (
        <img
          key="rotate"
          src="./rotate.jpg" // Replace with actual path to your rotate icon image
          alt="Rotate Icon"
          className="w-5 h-5"
        />
      ),
      eagle: (
        <img
          key="eagle"
          src="./eagle.jpg" // Replace with actual path to your eagle icon image
          alt="Eagle Icon"
          className="w-5 h-5"
        />
      ),
      eye: (
        <img
          key="eye"
          src="./eye.jpg" // Replace with actual path to your eye icon image
          alt="Eye Icon"
          className="w-5 h-5"
        />
      ),
    };
  
    return (
      <div className="flex items-center space-x-2">
        {actions.map((action) => actionComponents[action])}
      </div>
    );
  };
  

  return (
    <div className="relative overflow-x-auto">
      <div
        className="absolute inset-0 top-0 left-0 w-32 h-full bg-[#681abc] opacity-50"
        style={{
          filter: 'blur(166.9px)',
          boxShadow: '2px 2px 20px rgba(104, 22, 186, 0.5)',
          zIndex: -1,
        }}
      />
      <table className="min-w-full divide-y divide-gray-100 relative">
        <thead className="bg-[#0F0F0F] text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {header}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#141414]' : 'bg-[#0F0F0F]'}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-white">
                  {renderCellContent(header, item)}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-white">
                {renderActions(item)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
