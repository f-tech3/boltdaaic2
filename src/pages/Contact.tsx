import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactModal } from '../components/modals/ContactModal';

export const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))]/20 via-transparent to-[rgb(var(--primary))]/20 blur-3xl opacity-30" />
        </div>

        {/* Icon */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[rgb(var(--primary))]/20 rounded-2xl blur-xl" />
            <div className="relative bg-[rgb(var(--card))] p-6 rounded-2xl">
              <MessageSquare className="w-12 h-12 text-[rgb(var(--primary))]" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Get in Touch
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[rgb(var(--foreground))]/70 text-lg max-w-2xl mx-auto"
        >
          Have questions about DaalC? We're here to help! Send us a message and we'll respond as soon as possible.
        </motion.p>
      </div>

      {/* Contact Button */}
      <div className="text-center">
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 bg-[rgb(var(--primary))] text-white rounded-xl font-medium hover:bg-[rgb(var(--primary))]/90 transition-colors"
        >
          Contact Us
        </motion.button>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};