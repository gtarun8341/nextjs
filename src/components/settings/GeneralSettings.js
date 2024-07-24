import React, { useState } from 'react';
import CircleTooltip from '../CircleTooltip'; // Adjust the path to where your CircleTooltip component is located

export default function GeneralSettings() {
  const [isBotOn, setIsBotOn] = useState(false);

  const handleToggle = () => {
    setIsBotOn(!isBotOn);
  };

  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* General Settings Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}


        {/* Image Upload Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600">Icon</span>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">Upload Image</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md ml-2">Remove</button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">Max file size: 5 MB. This image will be shown on your collection profile.</p>
        </div>

        {/* Bot Running Time Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-semibold">Bot Running Time</h4>
            <CircleTooltip text="i" tooltip="Specify the time range during which the bot will run" />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <select
              id="botStartTime"
              className="block w-24 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option>12:00 AM</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
              {/* Add more options as needed */}
            </select>
            <span className="text-sm font-medium text-gray-700">to</span>
            <select
              id="botEndTime"
              className="block w-24 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option>12:00 AM</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <span className="text-sm font-medium text-gray-700">times are in utc+0</span>
        </div>

        {/* Toggle Switch Section */}
        <div className="flex items-center mb-4">
          <span className="text-sm font-medium text-gray-700 mr-4">Turn the bot on/off</span>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isBotOn}
              onChange={handleToggle}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 transition-all duration-300">
              <div className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isBotOn ? 'translate-x-5' : ''}`}></div>
            </div>
          </label>
        </div>
      </div>

       {/* Lorem Ipsum Section */}
       <div className="w-full md:w-1/3 flex flex-col">
        {/* Wrapper for Shadow */}
        <div className="relative flex-1 mb-4">
          {/* Shadow Effect */}
          <div
            className="absolute inset-y-0 left-0 w-12 bg-[#0F0F0F] z-0"
            style={{
              boxShadow: '2px 0 20px rgba(156, 21, 220, 0.5)', // Darker shadow effect
              filter: 'blur(166.9px)',
              transform: 'translateX(-12px)', // Adjust the shadow positioning
            }}
          ></div>
          {/* Lorem Ipsum Content */}
          <div className="relative bg-[#0F0F0F] p-4 rounded-lg h-80 overflow-y-auto z-10">
            <h4 className="text-lg font-semibold mb-1 text-white">Lorem Ipsum</h4>
            <p className="text-gray-300 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Duis ultricies pharetra magna nec dictum.
            </p>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Update
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
