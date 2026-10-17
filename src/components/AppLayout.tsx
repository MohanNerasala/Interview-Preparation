import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import SearchDialog from './SearchDialog';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex h-screen bg-bg-main overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
          onMenuClick={() => setSidebarOpen(true)} 
          onSearchClick={() => setSearchOpen(true)} 
        />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}
    </div>
  );
}
