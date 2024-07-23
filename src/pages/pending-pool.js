import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    // Apply filtering logic here if needed
  };

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
          <select 
            value={filterOption} 
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
          <div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Settings
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pair</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Audit</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pooled Sol</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pooled Token</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">24h Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">LP Burned</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pair}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.created}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.contactAudit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pooledSol}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pooledToken}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.change24h}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.lpBurned}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
