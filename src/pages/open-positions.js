// pages/open-positions.js

import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Filter from '@/components/Filter'; // Import new Filter component
import SettingsButton from '@/components/SettingsButton'; // Import new SettingsButton component
import Table from '@/components/Table'; // Import the Table component
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
const initialData = [
  {
    pair: 'BTC/ETH',
    created: '2024-07-23',
    invested: '100',
    current: '2000',
    roi: '5%',
    pnl: '50',
    status: 'waiting...',
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-22',
    invested: '150',
    current: '3000',
    roi: '-3%',
    pnl: '-75',
    status: 'SL Selling',
  },
  {
    pair: 'BTC/ETH',
    created: '2024-07-21',
    invested: '200',
    current: '1800',
    roi: '-10%',
    pnl: '-20',
    status: 'SL selling',
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-22',
    invested: '150',
    current: '3000',
    roi: '-3%',
    pnl: '-75',
    status: 'SL selling',
  },
  {
    pair: 'LTC/BTC',
    created: '2024-07-23',
    invested: '400',
    current: '6000',
    roi: '50%',
    pnl: '2000',
    status: 'waiting...',
  },
  {
    pair: 'XRP/ETH',
    created: '2024-07-24',
    invested: '250',
    current: '500',
    roi: '-20%',
    pnl: '-50',
    status: 'SL selling',
  },
  {
    pair: 'ADA/BTC',
    created: '2024-07-25',
    invested: '300',
    current: '4200',
    roi: '40%',
    pnl: '1200',
    status: 'TP selling',
  },
  {
    pair: 'BTC/ETH',
    created: '2024-07-21',
    invested: '200',
    current: '1800',
    roi: '-10%',
    pnl: '-20',
    status: 'SL Selling',
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-22',
    invested: '150',
    current: '3000',
    roi: '-3%',
    pnl: '-75',
    status: 'SL selling',
  },
  {
    pair: 'LTC/BTC',
    created: '2024-07-23',
    invested: '400',
    current: '6000',
    roi: '50%',
    pnl: '2000',
    status: 'TP selling',
  },
  {
    pair: 'XRP/ETH',
    created: '2024-07-24',
    invested: '250',
    current: '500',
    roi: '-20%',
    pnl: '-50',
    status: 'SL Selling ',
  },
  {
    pair: 'ADA/BTC',
    created: '2024-07-25',
    invested: '300',
    current: '4200',
    roi: '40%',
    pnl: '1200',
    status: 'TP selling',
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
        <div className="mb-4 flex items-center justify-between mt-10">
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
    <div 
      className={`w-7 h-2 rounded-full shadow-inner transition-colors ${showAdditionalSection ? 'bg-green-500' : 'bg-gray-200'}`}
    ></div>
    <div 
      className={`absolute left-0 top-0 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${showAdditionalSection ? 'translate-x-full' : ''}`}
      style={{ top: '-0.2rem' }} /* Adjusted positioning */
    ></div>
  </div>
  <span className="ml-2 text-sm text-white">Show hidden</span>
</label>


          <div className="text-sm font-semibold mr-4 flex-grow">
            <span>Open Positions: {data.length}</span>
            <span className="ml-4">Total Invested SOL: {calculateTotalInvested()}</span>
            <span className="ml-4">Total Current SOL: {calculateTotalCurrent()}</span>
          </div>
          <div className="flex-grow" /> {/* This takes up remaining space */}
          <SettingsButton 
            onClick={() => console.log('Settings Clicked')} 
            className="border border-[#0F0F0F] text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          />
        </div>
        {/* Table */}
        <Table headers={headers} data={data} actions={['rotate', 'eagle', 'quickSell', 'eye']} />
      </main>
      <ToastContainer /> {/* Add ToastContainer here */}

    </div>
  );
}
