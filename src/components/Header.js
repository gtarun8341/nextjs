import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">My App</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/pending-pool">
                <span className="hover:underline">Pending Pool</span>
              </Link>
            </li>
            <li>
              <Link href="/open-positions">
                <span className="hover:underline">Open Positions</span>
              </Link>
            </li>
            <li>
              <Link href="/closed-positions">
                <span className="hover:underline">Closed Positions</span>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <span className="hover:underline">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Purchase Premium</button>
          <div className="wallet-balance">Wallet Balance</div>
          <div className="user-id">User ID</div>
          <div className="profile-icon">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A6.993 6.993 0 0112 15c1.61 0 3.09.525 4.28 1.418m0 0A6.993 6.993 0 0119 17.804M16 14a3 3 0 10-4-4m0 0A3 3 0 1010 14m6 0v4m-6 0v4m2-4h4m-4 0h-4" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
