import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  return (
    <div>
      <Head>
        <title>Open Positions</title>
        <meta name="description" content="Open positions in the pool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Open Positions</h2>
        </div>
        <div className="mb-4">
          <p>Presenting your current open positions, updated in real-time</p>
        </div>
        {/* Filter and Toggle */}
        <div className="relative flex items-center mb-4 space-x-4">
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
          {/* Toggle Switch */}
          <label className="flex items-center cursor-pointer">
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
            <span className="ml-2 text-sm">Show hidden</span>
          </label>
          {/* Totals Display */}
          <div className="ml-4 flex items-center space-x-4 text-sm text-gray-700">
          <span>Open Positions: {calculateTotalInvested()}</span>
            <span>Total Invested: {calculateTotalInvested()}</span>
            <span>Total Current: {calculateTotalCurrent()}</span>
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
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Current</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ROI</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">PNL</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pair}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.created}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.invested}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.current}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.roi}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pnl}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

    </div>
  );
}
