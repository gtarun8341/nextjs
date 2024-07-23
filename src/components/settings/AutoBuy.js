import { useState } from 'react';
import Input from '../InputButton'; // Adjust the path to where your Input component is located
import ToggleSwitch from '../ToggleSwitch'; // Adjust the path to where your ToggleSwitch component is located
import CircleTooltip from '../CircleTooltip'; // Adjust the path to where your CircleTooltip component is located

export default function AutoBuy() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* Auto Buy Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}

        {/* Investment per Asset */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h4 className="text-lg font-semibold">Investment per Asset</h4>
            <CircleTooltip text="i" tooltip="Investment per Asset" />
          </div>
          <Input
            id="investmentPerAsset"
            type="number"
            placeholder="Enter investment per asset"
            className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Pooled SOL */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h4 className="text-lg font-semibold">Pooled SOL</h4>
            <CircleTooltip text="i" tooltip="Pooled SOL Information" />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <Input
                label="Min"
                id="changeMin"
                type="number"
                placeholder="Enter min change"
                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="w-1/2">
              <Input
                label="Max"
                id="changeMax"
                type="number"
                placeholder="Enter max change"
                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Pooled Token Section */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h4 className="text-lg font-semibold">Pooled Token</h4>
            <CircleTooltip text="i" tooltip="Pooled Token Information" />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <Input
                label="Min"
                id="pooledTokenMin"
                type="number"
                placeholder="Enter min value"
                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="w-1/2">
              <Input
                label="Max"
                id="pooledTokenMax"
                type="number"
                placeholder="Enter max value"
                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* 24 Hours Change Section */}
        <div>
          <div className="flex items-center mb-2">
            <h4 className="text-lg font-semibold">24 Hours Change</h4>
            <CircleTooltip text="i" tooltip="24 Hours Change Information" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-1/2">
              <Input
                label="Min"
                id="changeMin"
                type="number"
                placeholder="Enter min change"
                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex-1 flex items-center space-x-4">
              <Input
                label="Max"
                id="changeMax"
                type="number"
                placeholder="Enter max change"
                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ToggleSwitch
                id="toggleSwitch"
                checked={isChecked}
                onChange={handleToggleChange}
                label="LP burned audit"
                tooltip="LP burned audit"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lorem Ipsum Section */}
      <div className="w-full md:w-1/3 flex flex-col">
        {/* Lorem Ipsum Section */}
        <div className="flex-1 mb-4 bg-gray-100 p-4 rounded-lg h-80 overflow-y-auto"> {/* Increased height here */}
          <h4 className="text-lg font-semibold mb-1">Lorem Ipsum</h4>
          <p className="text-gray-600 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Duis ultricies pharetra magna nec dictum.
          </p>
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
