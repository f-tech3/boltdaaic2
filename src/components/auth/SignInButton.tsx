import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import { LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

export const SignInButton: React.FC = () => {
  const { openSignIn } = useClerk();

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => openSignIn()}
      className="flex items-center space-x-2 px-4 py-2 bg-[rgb(var(--primary))] text-white rounded-lg hover:bg-[rgb(var(--primary))]/90 transition-colors"
    >
      <LogIn className="w-4 h-4" />
      <span>Sign In</span>
    </motion.button>
  );
};