
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Store } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Vendors', path: '/vendors' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="bg-black shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="bg-orange-600 p-2 rounded-lg">
//                 <Store className="h-6 w-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-orange-500">MVAD GROUP</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(link.path)
//                   ? 'text-orange-500 border-b-2 border-orange-500'
//                   : 'text-gray-200 hover:text-orange-400 hover:bg-gray-900'
//                   }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-orange-500 hover:bg-gray-900 transition-colors duration-200"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-black border-t border-gray-700">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive(link.path)
//                   ? 'text-orange-500 bg-gray-900'
//                   : 'text-gray-200 hover:text-orange-400 hover:bg-gray-800'
//                   }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Store } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vendors', path: '/vendors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-orange-500 group-hover:bg-orange-600 p-2 rounded-xl shadow-md transition-colors duration-300">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-wide text-white group-hover:text-orange-500 transition-colors duration-300">
              MVAD <span className="text-orange-500">GROUP</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${isActive(link.path)
                  ? 'text-orange-500'
                  : 'text-gray-300 hover:text-orange-400'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-500 rounded"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-orange-500 hover:bg-gray-800 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive(link.path)
                  ? 'text-orange-500 bg-gray-900'
                  : 'text-gray-300 hover:text-orange-400 hover:bg-gray-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
