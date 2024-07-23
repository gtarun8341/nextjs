import { useState } from 'react';
import Input from '../InputButton'; // Adjust the path to where your Input component is located

export default function SLTP() {
  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* SL/TP Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}
        <h3 className="text-xl font-semibold mb-4">SL/TP</h3>

        {/* Take Profit Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Take Profit</h4>

          {/* Input Pairs */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <Input
                label="ROI%"
                  id={`takeProfitRoi${index}`}
                  type="number"
                  placeholder="Enter ROI%"
                  className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="w-1/2">
                <Input
                label="Amt%"
                  id={`takeProfitAmt${index}`}
                  type="number"
                  placeholder="Enter Amt%"
                  className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stop Loss Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stop Loss</h4>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <Input
              label="ROI%"
                id="stopLossRoi"
                type="number"
                placeholder="Enter ROI%"
                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="w-1/2">
              <Input
              label="Amt%"
                id="stopLossAmt"
                type="number"
                placeholder="Enter Amt%"
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
