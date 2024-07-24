import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Filter from '@/components/Filter'; // Import the Filter component
import SettingsButton from '@/components/SettingsButton'; // Import the SettingsButton component
import Table from '@/components/Table'; // Import the Table component

const data = [
  {
    pair: 'BTC/ETH',
    created: '2024-07-23',
    contactaudit: 'Passed', // Changed from 'contactAudit' to 'contactaudit'
    pooledsol: '100', // Changed from 'pooledSol' to 'pooledsol'
    pooledtoken: '2000', // Changed from 'pooledToken' to 'pooledtoken'
    change24h: '5%', // Changed from 'change24h' to 'change24h'
    lpburned: 'burned', // Changed from 'lpBurned' to 'lpburned'
    status: 'buying',
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-22',
    contactaudit: 'Pending', // Changed from 'contactAudit' to 'contactaudit'
    pooledsol: '150', // Changed from 'pooledSol' to 'pooledsol'
    pooledtoken: '3000', // Changed from 'pooledToken' to 'pooledtoken'
    change24h: '-3%', // Changed from 'change24h' to 'change24h'
    lpburned: 'not burned', // Changed from 'lpBurned' to 'lpburned'
    status: 'waiting...',
  },
  {
    pair: 'BTC/ETH',
    created: '2024-07-23',
    contactaudit: 'Passed',
    pooledsol: '100',
    pooledtoken: '2000',
    change24h: '5%',
    lpburned: 'burned',
    status: 'buying',
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-24',
    contactaudit: 'Pending',
    pooledsol: '150',
    pooledtoken: '2500',
    change24h: '-2%',
    lpburned: 'not burned',
    status: 'waiting...',
  },
  {
    pair: 'LTC/BTC',
    created: '2024-07-25',
    contactaudit: 'Failed',
    pooledsol: '80',
    pooledtoken: '1800',
    change24h: '8%',
    lpburned: 'burned',
    status: 'sold',
  },
  {
    pair: 'XRP/ETH',
    created: '2024-07-26',
    contactaudit: 'Passed',
    pooledsol: '120',
    pooledtoken: '2200',
    change24h: '-4%',
    lpburned: 'not burned',
    status: 'buying',
  },
  {
    pair: 'ADA/BTC',
    created: '2024-07-27',
    contactaudit: 'Pending',
    pooledsol: '90',
    pooledtoken: '2100',
    change24h: '10%',
    lpburned: 'burned',
    status: 'waiting...',
  },
  {
    pair: 'BTC/ETH',
    created: '2024-07-23',
    contactaudit: 'Passed',
    pooledsol: '100',
    pooledtoken: '2000',
    change24h: '5%',
    lpburned: 'burned',
    status: 'buying',
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-24',
    contactaudit: 'Pending',
    pooledsol: '150',
    pooledtoken: '2500',
    change24h: '-2%',
    lpburned: 'not burned',
    status: 'waiting...',
  },
  {
    pair: 'LTC/BTC',
    created: '2024-07-25',
    contactaudit: 'Failed',
    pooledsol: '80',
    pooledtoken: '1800',
    change24h: '8%',
    lpburned: 'burned',
    status: 'sold',
  },
  {
    pair: 'XRP/ETH',
    created: '2024-07-26',
    contactaudit: 'Passed',
    pooledsol: '120',
    pooledtoken: '2200',
    change24h: '-4%',
    lpburned: 'not burned',
    status: 'buying',
  },
  {
    pair: 'ADA/BTC',
    created: '2024-07-27',
    contactaudit: 'Pending',
    pooledsol: '90',
    pooledtoken: '2100',
    change24h: '10%',
    lpburned: 'burned',
    status: 'waiting...',
  },
  // Add more rows as needed
];

export default function PendingPool() {
  const [filterOption, setFilterOption] = useState('All');

  const filterOptions = [
    { value: 'All', label: 'All' },
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Pending', label: 'Pending' }
  ];

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    // Apply filtering logic here if needed
  };

  // Filter data based on selected filter option
  const filteredData = data.filter((item) => 
    filterOption === 'All' || item.status === filterOption
  );

  const headers = [
    'Pair',
    'Created',
    'Contact Audit',
    'Pooled Sol',
    'Pooled Token',
    'change24h',
    'LP Burned',
    'Status',
  ];

  return (
    <div>
      <Head>
        <title>Pending Pool</title>
        <meta name="description" content="Pending Pool page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Pending Pool</h2>
        </div>
        <div className="mb-4">
          <p>Presenting your current pending pool, updated in real-time</p>
        </div>
        {/* Filter and Settings */}
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
          <div className="flex-grow" /> {/* This takes up remaining space */}
          <SettingsButton 
            onClick={() => console.log('Settings Clicked')} 
            className="border border-[#0F0F0F] text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          />
        </div>

        {/* Table */}
        <Table headers={headers} data={filteredData} actions={['eagle', 'quickBuy', 'cancel']} />
        </main>

    </div>
  );
}
