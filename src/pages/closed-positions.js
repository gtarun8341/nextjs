import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
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
            <div className="text-lg font-semibold">
              <span>Closed Position PNL: </span>
              <span>${totalPnl.toFixed(2)}</span>
            </div>
          </div>
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
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Invested</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sold</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ROI</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">PNL</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Hide</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pair}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.created}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.invested}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.sold}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.roi}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pnl}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.actions}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.hide}</td>
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
