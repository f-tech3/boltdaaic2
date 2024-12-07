import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SearchBar } from '../SearchBar';
import { TimeFilter } from '../TimeFilter';
import { useEventStore } from '../../stores/eventStore';

export const Layout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { filters, setFilters } = useEventStore();

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Toaster position="top-right" />
      
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      
      <main 
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-64'
        } min-h-screen`}
      >
        {/* Fixed Header */}
        <div className="sticky top-0 z-50 bg-[rgb(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--background))]/80">
          <div className="border-b border-[rgb(var(--border))]">
            <div className="flex items-center h-14 max-w-7xl mx-auto px-4">
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-1">
                  <SearchBar />
                </div>
                <TimeFilter 
                  value={filters.timeFilter} 
                  onChange={(value) => setFilters({ timeFilter: value })} 
                />
              </div>
              <div className="pl-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-4">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}