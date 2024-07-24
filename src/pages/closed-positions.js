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
    created: '2024-07-20',
    invested: '500',
    sold: '600',
    roi: '20%',
    pnl: '100',
    actions: 'Reopen | Delete',
    hide: 'Hide'
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-19',
    invested: '300',
    sold: '350',
    roi: '15%',
    pnl: '50',
    actions: 'Reopen | Delete',
    hide: 'Hide'
  },
  // Add more rows as needed
];

export default function ClosedPositions() {
  const [filterOption, setFilterOption] = useState('All');

  // Calculate the total PNL
  const totalPnl = data.reduce((acc, item) => acc + parseFloat(item.pnl), 0);

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    // Apply filtering logic here if needed
  };

  // Define table headers
  const headers = [
    'Pair',
    'Created',
    'Invested',
    'Sold',
    'ROI',
    'PNL',
    'Action',
    'Hide'
  ];

  return (
    <div>
      <Head>
        <title>Closed Positions</title>
        <meta name="description" content="Closed positions in the pool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Closed Positions</h2>
        </div>
        <div className="mb-4">
          <p>Presenting your current closed positions</p>
        </div>
        {/* Filter and Settings */}
        <div className="flex items-center mb-4">
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
          <div className="text-lg font-semibold mr-4">
            <span>Closed Position PNL: </span>
            <span>${totalPnl.toFixed(2)}</span>
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
