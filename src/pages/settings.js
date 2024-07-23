import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PendingPool from '@/components/settings/PendingPool';
import AutoBuy from '@/components/settings/AutoBuy';
import SLTP from '@/components/settings/SLTP';
import Fees from '@/components/settings/Fees';
import GeneralSettings from '@/components/settings/GeneralSettings';

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
          <div className="bg-gray-100 p-4 mb-6">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <div className="mt-4 flex items-center">
              <span className="text-lg font-semibold">Trading Wallet:</span>
              <span className="ml-4 text-gray-600">{walletAddress}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex space-x-4">
              {['Pending Pool', 'Auto Buy', 'SL/TP', 'Fees', 'General Settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 text-sm font-semibold rounded-lg ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {tab}
                </button>
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

      <Footer />
    </div>
  );
}
