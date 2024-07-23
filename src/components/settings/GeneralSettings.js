import { useState } from 'react';

export default function GeneralSettings() {
  const [isBotOn, setIsBotOn] = useState(false);

  const handleToggle = () => {
    setIsBotOn(!isBotOn);
  };

  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* General Settings Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}
        <h3 className="text-xl font-semibold mb-4">General Settings</h3>

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
          <h4 className="text-lg font-semibold mb-4">Bot Running Time</h4>
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
        </div>

        {/* Toggle Switch Section */}
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 mr-4">Turn the bot on/off</span>
          <label className="relative inline-flex items-center cursor-pointer">
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
      <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-4">Lorem Ipsum</h4>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Duis ultricies pharetra magna nec dictum.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
