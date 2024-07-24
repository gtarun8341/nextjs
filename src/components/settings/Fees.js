import React, { useState } from 'react';
import InputButton from '../InputButton'; // Adjust the path to where your InputButton component is located
import CircleTooltip from '../CircleTooltip'; // Adjust the path to where your CircleTooltip component is located

export default function Fees() {
  const [priorityFee, setPriorityFee] = useState('');
  const [binaryFee, setBinaryFee] = useState('');
  const [slippage, setSlippage] = useState('');

  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* Fees Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}


        {/* Priority Fee Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-semibold">Priority Fee</h4>
            <CircleTooltip text="i" tooltip="Enter the priority fee for processing" />
          </div>
          <InputButton
            label="Priority Fee"
            value={priorityFee}
            onChange={(e) => setPriorityFee(e.target.value)}
            placeholder="Enter Priority Fee"
            className="w-full"
            type="number"
          />
        </div>

        {/* Binary Fee Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-semibold">Binary Fee</h4>
            <CircleTooltip text="i" tooltip="Enter the binary fee for transactions" />
          </div>
          <InputButton
            label="Binary Fee"
            value={binaryFee}
            onChange={(e) => setBinaryFee(e.target.value)}
            placeholder="Enter Binary Fee"
            className="w-full"
            type="number"
          />
        </div>

        {/* Slippage Section */}
        <div>
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-semibold">Slippage</h4>
            <CircleTooltip text="i" tooltip="Enter the slippage percentage" />
          </div>
          <InputButton
            label="Slippage"
            value={slippage}
            onChange={(e) => setSlippage(e.target.value)}
            placeholder="Enter Slippage"
            className="w-full"
            type="number"
          />
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
