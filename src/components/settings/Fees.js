import React, { useState } from 'react';
import InputButton from '../InputButton';

export default function Fees() {
  const [priorityFee, setPriorityFee] = useState('');
  const [binaryFee, setBinaryFee] = useState('');
  const [slippage, setSlippage] = useState('');

  return (
    <div className="flex space-x-12"> {/* Space between content and sidebar */}
      {/* Fees Form */}
      <div className="flex-1 mr-12"> {/* Margin-right to create space */}
        <h3 className="text-xl font-semibold mb-4">Fees</h3>

        {/* Priority Fee Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Priority Fee</h4>
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
          <h4 className="text-lg font-semibold mb-4">Binary Fee</h4>
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
          <h4 className="text-lg font-semibold mb-4">Slippage</h4>
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
