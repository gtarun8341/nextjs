import React from 'react';
import Image from 'next/image'; // Using Next.js Image component for better optimization
import { toast } from 'react-toastify'; // Ensure toast is imported

const CustomToast = () => (
  <div className="relative p-2 bg-[#282828] text-white flex items-center rounded-lg max-w-[900px] min-w-[300px]">
    {/* Tick Icon */}
    <Image src="/tick.png" alt="Tick" width={24} height={24} className="w-7 h-7 mr-1" />

    {/* Toast Content */}
    <div className="flex flex-col flex-grow w-3/4">
      <div className="font-semibold text-xs">Transaction Completed</div>
      <div className="mt-1" style={{ fontSize: '0.6rem' }}>Sold 1,000,000 PEPE For 0.9 SOL</div>
    </div>

    {/* Additional Content */}
    <div className="flex flex-col mt-5  w-2/4">
      <button className="font-semibold text-blue-500 underline "style={{ fontSize: '0.5rem' }} onClick={() => alert('View Transaction')}>View Transaction</button>
    </div>

    {/* Close Button */}
    <button
      className="absolute top-1 right-5 w-4 h-4 flex items-center justify-center"
      onClick={() => toast.dismiss()} // Handle toast dismissal
    >
     <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00022 8.0711L8.07129 1.00003" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1.00022 1.00001L8.07129 8.07108" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>    </button>
  </div>
);

export default CustomToast;
