import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { QuarryLogo } from '../icons/QuarryLogo';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] flex flex-col">
      {/* Header */}
      <header className="h-14 border-b border-[rgb(var(--border))]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2ecc71] to-[#27ae60] rounded-full blur opacity-40" />
              <QuarryLogo className="relative w-8 h-8 text-[#2ecc71]" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#2ecc71] to-[#27ae60] bg-clip-text text-transparent">
              DaaiC
            </span>
          </div>

          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 px-4 py-2 text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};