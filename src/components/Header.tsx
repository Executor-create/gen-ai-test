import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ShoppingCart, User, Bell, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-50"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                GameHub
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Premium Gaming</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {[
                { name: 'Home', active: true },
                { name: 'Store', active: false },
                { name: 'Library', active: false },
                { name: 'Community', active: false },
                { name: 'Esports', active: false }
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    item.active
                      ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {item.active && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  )}
                </a>
              ))}
            </div>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Enhanced Search */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search 50,000+ games..."
                  className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl px-4 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 w-80 text-white placeholder-gray-400 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button className="relative p-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl group">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              
              <button className="relative p-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl group">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              <div className="w-px h-6 bg-gray-700"></div>

              <button className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                <User className="h-4 w-4" />
                <span className="hidden xl:block">Sign In</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 backdrop-blur-xl">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search games..."
                    className="w-full bg-gray-800/80 border border-gray-700/50 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Mobile Menu Items */}
              {[
                { name: 'Home', active: true },
                { name: 'Store', active: false },
                { name: 'Library', active: false },
                { name: 'Community', active: false },
                { name: 'Esports', active: false }
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    item.active
                      ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-gray-800/50 mt-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;