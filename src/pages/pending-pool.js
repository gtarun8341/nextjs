// pages/pending-pool.js

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
    contactAudit: 'Passed',
    pooledSol: '100',
    pooledToken: '2000',
    change24h: '5%',
    lpBurned: '50',
    status: 'Active',
    actions: 'Edit | Delete'
  },
  {
    pair: 'ETH/USD',
    created: '2024-07-22',
    contactAudit: 'Pending',
    pooledSol: '150',
    pooledToken: '3000',
    change24h: '-3%',
    lpBurned: '75',
    status: 'Inactive',
    actions: 'Edit | Delete'
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
    '24h Change',
    'LP Burned',
    'Status',
    'Actions'
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
        <div className="flex justify-between items-center mb-4">
          <Filter
            filterOptions={filterOptions}
            selectedOption={filterOption}
            onFilterChange={handleFilterChange}
          />
          <div>
            <SettingsButton />
          </div>
        </div>

        {/* Table */}
        <Table headers={headers} data={filteredData} />
      </main>

    </div>
  );
}
