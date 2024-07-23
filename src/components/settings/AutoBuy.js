import { useState } from 'react';
import Input from '../InputButton'; // Adjust the path to where your Input component is located

export default function AutoBuy() {
  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* Auto Buy Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}
        <h3 className="text-xl font-semibold mb-4">Auto Buy</h3>

        {/* Investment per Asset */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Investment per Asset</h4>
          <Input
            id="investmentPerAsset"
            type="number"
            placeholder="Enter investment per asset"
            className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Pooled SOL */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Pooled SOL</h4>
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
          <h4 className="text-lg font-semibold mb-2">Pooled Token</h4>
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
          <h4 className="text-lg font-semibold mb-2">24 Hours Change</h4>
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
