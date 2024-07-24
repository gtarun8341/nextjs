// pages/pending-pool.js

import { useState } from 'react';
import InputButton from '../InputButton';
import ToggleSwitch from '../ToggleSwitch';
import CircleTooltip from '../CircleTooltip'; // Adjust the path to your CircleTooltip component

export default function PendingPool() {
  const [isFreezeAuditOn, setIsFreezeAuditOn] = useState(false);
  const [isTop10HolderAuditOn, setIsTop10HolderAuditOn] = useState(false);
  const [isCanMintAuditOn, setIsCanMintAuditOn] = useState(false);
  const [isWatchForOn, setIsWatchForOn] = useState(false);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [pooledMinValue, setPooledMinValue] = useState('');
  const [pooledMaxValue, setPooledMaxValue] = useState('');

  const handleToggle = (setToggleFunc) => {
    setToggleFunc(prevState => !prevState);
  };

  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-12"> {/* Stack vertically on small screens, horizontally on larger screens */}
      {/* Pending Pool Form */}
      <div className="flex-1 md:mr-12 mb-6 md:mb-0"> {/* Adjust margin for small screens */}
        <h4 className="text-xl font-semibold mb-4 flex items-center">
          Pooled SOL
          <CircleTooltip 
            text="?" 
            tooltip="Configure the parameters for the pending pool, including minimum and maximum values for general and pooled tokens."
            className="ml-2"
          />
        </h4>

        {/* Min and Max Inputs */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="flex-1">
            <InputButton
              label="Min"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              placeholder="Enter min value"
              className="w-full"
              type="number"
            />
          </div>
          <div className="flex-1">
            <InputButton
              label="Max"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              placeholder="Enter max value"
              className="w-full"
              type="number"
            />
          </div>
        </div>

        {/* Pooled Token Section */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            Pooled Token
            <CircleTooltip 
              text="?" 
              tooltip="Specify the minimum and maximum values for pooled tokens."
              className="ml-2"
            />
          </h4>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <InputButton
                label="Min"
                value={pooledMinValue}
                onChange={(e) => setPooledMinValue(e.target.value)}
                placeholder="Enter min value"
                className="w-full"
                type="number"
              />
            </div>
            <div className="flex-1">
              <InputButton
                label="Max"
                value={pooledMaxValue}
                onChange={(e) => setPooledMaxValue(e.target.value)}
                placeholder="Enter max value"
                className="w-full"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* Premium Audits Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            Premium Audits
            <CircleTooltip 
              text="?" 
              tooltip="Toggle the various premium audit options to customize your audit settings."
              className="ml-2"
            />
          </h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <ToggleSwitch
                id="freezeAudit"
                label="Freeze Audit"
                checked={isFreezeAuditOn}
                onChange={() => handleToggle(setIsFreezeAuditOn)}
                tooltip="Freeze Audit"
              />
              <ToggleSwitch
                id="top10HolderAudit"
                label="Top 10 Holder Audit"
                checked={isTop10HolderAuditOn}
                onChange={() => handleToggle(setIsTop10HolderAuditOn)}
                tooltip="Top 10 Holder Audit"
              />
            </div>
            <div className="flex items-center space-x-4">
              <ToggleSwitch
                id="canMintAudit"
                label="Can Mint Audit"
                checked={isCanMintAuditOn}
                onChange={() => handleToggle(setIsCanMintAuditOn)}
                tooltip="Can Mint Audit"
              />
              <ToggleSwitch
                id="watchFor"
                label="Watch For"
                checked={isWatchForOn}
                onChange={() => handleToggle(setIsWatchForOn)}
                tooltip="Watch For"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content and Buttons Section */}
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
