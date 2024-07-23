import { useState } from 'react';
import InputButton from '../InputButton';

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
    <div className="flex space-x-12"> {/* Increased space between columns */}
      {/* Pending Pool Form */}
      <div className="flex-1 mr-12"> {/* Increased margin-right */}
        <h3 className="text-xl font-semibold mb-4">Pending Pool</h3>

        {/* Min and Max Inputs */}
        <div className="flex space-x-4 mb-6">
          <div className="w-1/2">
            <InputButton
              label="Min"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              placeholder="Enter min value"
              className="w-full"
              type="number"
            />
          </div>
          <div className="w-1/2">
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
          <h4 className="text-lg font-semibold mb-4">Pooled Token</h4>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <InputButton
                label="Min"
                value={pooledMinValue}
                onChange={(e) => setPooledMinValue(e.target.value)}
                placeholder="Enter min value"
                className="w-full"
                type="number"
              />
            </div>
            <div className="w-1/2">
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
          <h4 className="text-lg font-semibold mb-4">Premium Audits</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="flex-1 text-sm font-medium text-gray-700">Freeze Audit</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isFreezeAuditOn}
                  onChange={() => handleToggle(setIsFreezeAuditOn)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 transition-all duration-300">
                  <div className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isFreezeAuditOn ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
            </div>
            <div className="flex items-center">
              <span className="flex-1 text-sm font-medium text-gray-700">Top 10 Holder Audit</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isTop10HolderAuditOn}
                  onChange={() => handleToggle(setIsTop10HolderAuditOn)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 transition-all duration-300">
                  <div className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isTop10HolderAuditOn ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
            </div>
            <div className="flex items-center">
              <span className="flex-1 text-sm font-medium text-gray-700">Can Mint Audit</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isCanMintAuditOn}
                  onChange={() => handleToggle(setIsCanMintAuditOn)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 transition-all duration-300">
                  <div className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isCanMintAuditOn ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
            </div>
            <div className="flex items-center">
              <span className="flex-1 text-sm font-medium text-gray-700">Watch For</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isWatchForOn}
                  onChange={() => handleToggle(setIsWatchForOn)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 transition-all duration-300">
                  <div className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isWatchForOn ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
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
