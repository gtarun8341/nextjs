import React from 'react';
import InputButton from '../InputButton'; // Adjust the path to where your Input component is located
import CircleTooltip from '../CircleTooltip'; // Adjust the path to your CircleTooltip component

export default function SLTP() {
  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* SL/TP Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}

        {/* Take Profit Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            Take Profit
            <CircleTooltip text="?" tooltip="Define your take profit levels. ROI% is the percentage of return on investment, and Amt% is the amount to be taken as profit." className="ml-2" />
          </h4>

          {/* Input Pairs */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex mb-4">
              <InputButton
                label="ROI%"
                id={`takeProfitRoi${index}`}
                type="number"
                placeholder="Enter ROI%"
                className="w-2/5" // 40% width of the parent
              />
              <InputButton
                label="Amt%"
                id={`takeProfitAmt${index}`}
                type="number"
                placeholder="Enter Amt%"
                className="w-2/5" // 40% width of the parent
              />
            </div>
          ))}
        </div>

        {/* Stop Loss Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            Stop Loss
            <CircleTooltip text="?" tooltip="Define your stop loss levels. ROI% is the percentage of return on investment, and Amt% is the amount to be lost before stopping the trade." className="ml-2" />
          </h4>
          <div className="flex">
            <InputButton
              label="ROI%"
              id="stopLossRoi"
              type="number"
              placeholder="Enter ROI%"
              className="w-2/5" // 40% width of the parent
            />
            <InputButton
              label="Amt%"
              id="stopLossAmt"
              type="number"
              placeholder="Enter Amt%"
              className="w-2/5" // 40% width of the parent
            />
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
