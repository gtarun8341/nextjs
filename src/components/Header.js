import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className="p-1" style={{ background: '#171717' }}>
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
        <div className=" p-1 rounded-full mr-4">
  <img src="/file.png" alt="Logo" className="w-19 h-12" />
</div>

          <ul className="flex space-x-4">
            <li>
              <Link href="/pending-pool">
                <span className={`hover:underline ${router.pathname === '/pending-pool' ? 'text-white' : 'text-[#858686]'}`}>
                  Pending Pool
                </span>
              </Link>
            </li>
            <li>
              <Link href="/open-positions">
                <span className={`hover:underline ${router.pathname === '/open-positions' ? 'text-white' : 'text-[#858686]'}`}>
                  Open Positions
                </span>
              </Link>
            </li>
            <li>
              <Link href="/closed-positions">
                <span className={`hover:underline ${router.pathname === '/closed-positions' ? 'text-white' : 'text-[#858686]'}`}>
                  Closed Positions
                </span>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <span className={`hover:underline ${router.pathname === '/settings' ? 'text-white' : 'text-[#858686]'}`}>
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
<button className="flex items-center justify-between bg-gradient-to-r from-[#271197] to-[#00AC82] backdrop-blur-sm rounded px-3 py-1">
  <div className="flex flex-col items-start mr-12">
    <span className="font-bold text-base text-white">Purchase Premium</span>
    <span className="text-xs text-white">Pay 0% Fees</span>
  </div>
  <svg width="18" height="16" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9984 14.2065L1.99736 14.2065L0 4.2501L7.00017 8.25019L11.0003 0.25L15.0004 8.25019L22.0005 4.2501L19.9984 14.2065Z" fill="url(#paint0_linear_2751_154)"/>
    <path d="M1.99971 15.25H20.0001V18.75H1.99736L1.99971 15.25Z" fill="url(#paint1_linear_2751_154)"/>
    <defs>
      <linearGradient id="paint0_linear_2751_154" x1="11.3336" y1="0.249613" x2="10.9996" y2="16.25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC700"/>
        <stop offset="0.901" stopColor="#FFD04A"/>
      </linearGradient>
      <linearGradient id="paint1_linear_2751_154" x1="11.3336" y1="0.249613" x2="10.9996" y2="16.25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC700"/>
        <stop offset="0.901" stopColor="#FFD04A"/>
      </linearGradient>
    </defs>
  </svg>
</button>

  <div className="relative flex items-center space-x-2">
    {/* Image and Balance Container */}
    <div className="flex items-center space-x-2 border border-white p-1 rounded-full bg-[#0F0F0F] h-8 px-6">
      <div className="text-white text-xl">123</div>
      <img src="/sol.png" alt="Wallet" className="w-15 h-5"/>
    </div>
  </div>
  <div className="user-id flex items-center space-x-2 border border-white p-1 rounded-full text-white bg-[#0F0F0F] h-8 px-6">
  123456....34567
</div>

  <div className="profile-icon bg-[#0F0F0F] p-1 rounded-full">
    <img src="/profile.jpg" alt="Profile Icon" className="w-8 h-8 rounded-full border-white" />
  </div>
</div>

      </nav>
    </header>
  );
}

export default Header;
