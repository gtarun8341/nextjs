// components/CustomToast.js
import React from 'react';
import Image from 'next/image'; // Using Next.js Image component for better optimization

const CustomToast = () => (
  <div className="relative p-4 bg-[#282828] text-white flex items-center rounded-lg">
    {/* Tick Icon */}
    <Image src="/tick.png" alt="Tick" width={24} height={24} className="w-5 h-5 mr-3" />

    {/* Toast Content */}
    <div className="flex flex-col">
      <div className="font-semibold">Transaction Completed</div>
      <div className="mt-1 text-sm">Sold 1,000,000 PEPE For 0.9 SOL</div>
    </div>

    {/* Close Button */}
    <button
      className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center"
      onClick={() => toast.dismiss()} // Handle toast dismissal
    >
      <Image src="/cross.png" alt="Close" width={16} height={16} className="w-4 h-4" />
    </button>
  </div>
);

export default CustomToast;
