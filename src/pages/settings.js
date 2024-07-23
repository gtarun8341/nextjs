import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PendingPool from '@/components/settings/PendingPool';
import AutoBuy from '@/components/settings/AutoBuy';
import SLTP from '@/components/settings/SLTP';
import Fees from '@/components/settings/Fees';
import GeneralSettings from '@/components/settings/GeneralSettings';
import CircleTooltip from '@/components/CircleTooltip';
import { ClipboardIcon } from '@heroicons/react/24/outline'; // Correct import

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Pending Pool');
  const [walletAddress, setWalletAddress] = useState('0x1234567890abcdef1234567890abcdef12345678');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Pending Pool':
        return <PendingPool />;
      case 'Auto Buy':
        return <AutoBuy />;
      case 'SL/TP':
        return <SLTP />;
      case 'Fees':
        return <Fees />;
      case 'General Settings':
        return <GeneralSettings />;
      default:
        return <PendingPool />;
    }
  };

  const tabHeadings = [
    { label: 'Pending Pool', tooltip: 'Manage pending pool settings' },
    { label: 'Auto Buy', tooltip: 'Configure auto buy settings' },
    { label: 'SL/TP', tooltip: 'Set stop loss and take profit' },
    { label: 'Fees', tooltip: 'Adjust fee settings' },
    { label: 'General Settings', tooltip: 'Configure general settings' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    alert('Wallet address copied to clipboard!');
  };

  return (
    <div>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Manage your settings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <div className="flex flex-col">
          {/* Title and Wallet Address */}
          <div className="p-4 mb-6">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <div className="mt-4 flex items-center">
              <span className="text-lg font-semibold">Trading Wallet:</span>
              <div className="ml-4 flex items-center border border-gray-300 rounded-lg bg-white shadow-sm px-3 py-1">
                <span className="text-gray-600">{walletAddress}</span>
                <button
                  onClick={handleCopy}
                  className="ml-2 p-1 text-gray-500 hover:text-gray-700"
                  aria-label="Copy to clipboard"
                >
                  <ClipboardIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex space-x-4">
              {tabHeadings.map(({ label, tooltip }) => (
                <div key={label} className="flex items-center">
                  <button
                    onClick={() => setActiveTab(label)}
                    className={`py-2 px-4 text-sm font-semibold ${
                      activeTab === label
                        ? 'text-blue-600 underline'
                        : 'text-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                  <CircleTooltip text="i" tooltip={tooltip} />
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex flex-col md:flex-row">
            {/* Forms Area */}
            <div className="flex-1 mr-4">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
