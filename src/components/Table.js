import React from 'react';
import EagleIcon from './EagleIcon';
const Table = ({ headers, data, actions = [] }) => {
  // Helper function to check if a value is negative
  const isNegative = (value) => {
    if (typeof value === 'string') {
      return value.startsWith('-') || (value.includes('%') && parseFloat(value) < 0);
    }
    return false;
  };

  // Helper function to get the color for specific headers
  const getCellColor = (header, item) => {
    if (header === 'Status' && item.status === 'waiting...') {
      return 'text-yellow-500';
    }
    if (header === 'ROI' || header === 'PNL' || header === 'Status' || header === 'change24h') {
      return isNegative(item.pnl || item.change24h) ? 'text-red-500' : 'text-green-500';
    }
    return ''; // Default color if not ROI, PNL, Status, or change24h
  };
  

  // Helper function to render cell content with conditional styling
  const renderCellContent = (header, item) => {
    const key = header.toLowerCase().replace(/\s+/g, '');
    const value = item[key];
    const cellColor = getCellColor(header, item);

    const images = ['/p1.jpg', '/p2.jpg', '/p3.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    if (header === 'Pair') {
      return (
        <div className={`flex items-center ${cellColor}`}>
          <img src={randomImage} alt="Random" className="w-4 h-4 mr-2 rounded-full" />
          {value}
        </div>
      );
    }
    if (header === 'Contact Audit') {
      return (
        <div className="flex items-center space-x-2">
          {item.fad && (
            <div className="flex items-center space-x-1">
              <span>FAD</span>
              <img src="/tick.png" alt="Tick" className="w-2 h-2" />
            </div>
          )}
          {item.mad && (
            <div className="flex items-center space-x-1">
              <span>MAD</span>
              <img src="/tick.png" alt="Tick" className="w-2 h-2" />
            </div>
          )}
          {item.top10 && (
            <div className="flex items-center space-x-1">
              <span>Top 10 Holders</span>
              <img src="/tick.png" alt="Tick" className="w-2 h-2" />
            </div>
          )}
        </div>
      );
    }

    if (header === 'LP Burned') {
      return (
        <div className="flex items-center">
          {value}
          {value === 'burned' ? (
            <img src="/tick.png" alt="Tick" className="w-2 h-2 ml-2" />
          ) : (
            <img src="/cross.png" alt="Cross" className="w-2 h-2 ml-2" />
          )}
        </div>
      );
    }

    return (
      <div className={`flex items-center ${cellColor}`}>
        {header === 'Invested' || header === 'Current' || header === 'PNL' || header === 'Sold' || header === 'Pooled Sol' ? (
          <>
            <img src="/sol.png" alt="Sol" className="w-6 h-6 mr-2" />
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
        <button key="quickBuy" className="bg-[#2B2B2B] text-white px-4 py-1 rounded-2xl hover:bg-[#2B2B2B]">
          Quick Buy
        </button>
      ),
      quickSell: (
        <button key="quickSell" className="bg-[#2B2B2B] text-white px-4 py-1 rounded-2xl hover:bg-[#2B2B2B]">
          Quick Sell
        </button>
      ),
      cancel: (
        <button key="cancel" className="bg-[#2B2B2B] text-white px-4 py-1 rounded-2xl hover:bg-[#2B2B2B]">
          Cancel
        </button>
      ),
      rotate: (
        <img
          key="rotate"
          src="./rotate.png" // Replace with actual path to your rotate icon image
          alt="Rotate Icon"
          className="w-5 h-5"
        />
      ),
      eagle: (
        <EagleIcon key="eagle" src="/eagle-icon.png" alt="Eagle Icon" width={20} height={24} className="w-5 h-5" />
      ),
      eye: (
        <img
          key="eye"
          src="./hide.png" // Replace with actual path to your eye icon image
          alt="Eye Icon"
          className="w-5 h-5 filter invert"
        />
      ),
    };

    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {actions.filter(action => action !== 'eye').map(action => actionComponents[action])}
        </div>
        <div className="ml-auto">
          {actions.includes('eye') && actionComponents.eye}
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-x-auto">
      <div
        className="absolute top-0 left-0 w-32 h-32 bg-[rgba(149,14,144,0.5)]"
        style={{
          filter: 'blur(166.9px)',
          zIndex: -1,
        }}
      />
<div
        className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#0F0F0F] scrollbar-track-[#141414]"
        style={{ 
          maxHeight: '450px', 
          scrollbarWidth: '12px' /* For Firefox */,
        }}
      >        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-[#0F0F0F] text-white">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  {header}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"></th>
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
    </div>
  );
};

export default Table;
