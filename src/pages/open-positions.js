// pages/open-positions.js

import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Filter from '@/components/Filter'; // Import new Filter component
import SettingsButton from '@/components/SettingsButton'; // Import new SettingsButton component
import Table from '@/components/Table'; // Import the Table component

const initialData = [
  {
    id: 1,
    pair: 'BTC/ETH',
    created: '2024-07-23',
    invested: '100',
    current: '2000',
    roi: '5%',
    pnl: '50',
    status: 'Open',
    actions: 'Edit | Close',
  },
  {
    id: 2,
    pair: 'ETH/USD',
    created: '2024-07-22',
    invested: '150',
    current: '3000',
    roi: '-3%',
    pnl: '75',
    status: 'Open',
    actions: 'Edit | Close',
  },
  // Add more rows as needed
];

export default function OpenPositions() {
  const [data, setData] = useState(initialData);
  const [filterOption, setFilterOption] = useState('All');
  const [showAdditionalSection, setShowAdditionalSection] = useState(false);

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    // Apply filtering logic here if needed
  };

  const calculateTotalInvested = () => {
    return data.reduce((total, item) => total + parseFloat(item.invested), 0);
  };

  const calculateTotalCurrent = () => {
    return data.reduce((total, item) => total + parseFloat(item.current), 0);
  };

  const headers = [
    'Pair',
    'Created',
    'Invested',
    'Current',
    'ROI',
    'PNL',
    'Status',
    'Actions'
  ];

  return (
    <div>
      <Head>
        <title>Open Positions</title>
        <meta name="description" content="Open positions in the pool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Open Positions</h2>
        </div>
        <div className="mb-4">
          <p>Presenting your current open positions, updated in real-time</p>
        </div>
        {/* Filter, Toggle, and Settings */}
        <div className="flex items-center mb-4 space-x-4">
          <Filter 
            filterOptions={[
              { value: 'All', label: 'All' },
              { value: 'Active', label: 'Active' },
              { value: 'Inactive', label: 'Inactive' },
              { value: 'Pending', label: 'Pending' },
            ]}
            selectedOption={filterOption}
            onFilterChange={handleFilterChange}
            className="border bg-[#0F0F0F] border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="flex items-center cursor-pointer ml-4">
            <input 
              type="checkbox"
              checked={showAdditionalSection}
              onChange={() => setShowAdditionalSection(!showAdditionalSection)}
              className="sr-only"
            />
            <div className="relative">
              <div className="w-12 h-6 bg-gray-200 rounded-full shadow-inner"></div>
              <div 
                className={`absolute left-0 top-0 w-6 h-6 bg-blue-500 rounded-full shadow-md transform transition-transform ${showAdditionalSection ? 'translate-x-full' : ''}`}
              ></div>
            </div>
            <span className="ml-2 text-sm text-white">Show hidden</span>
          </label>
          <div className="text-lg font-semibold mr-4 flex-grow">
            <span>Open Positions: {data.length}</span>
            <span className="ml-4">Total Invested: ${calculateTotalInvested()}</span>
            <span className="ml-4">Total Current: ${calculateTotalCurrent()}</span>
          </div>
          <div className="flex-grow" /> {/* This takes up remaining space */}
          <SettingsButton 
            onClick={() => console.log('Settings Clicked')} 
            className="border border-[#0F0F0F] text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          />
        </div>
        {/* Table */}
        <Table headers={headers} data={data} />
      </main>

    </div>
  );
}
