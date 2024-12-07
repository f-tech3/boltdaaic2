import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GemIcon, Users, Calendar, Tag, Send } from 'lucide-react';
import { joinWaitlist } from '../lib/waitlist';
import toast from 'react-hot-toast';
import clsx from 'clsx';

export const Sponsors: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = [
    { id: 'users', icon: Users, value: '10K+', label: 'Monthly Users', color: 'bg-blue-600' },
    { id: 'events', icon: Calendar, value: '400+', label: 'Events', color: 'bg-emerald-600' },
    { id: 'categories', icon: Tag, value: '35+', label: 'Categories', color: 'bg-amber-600' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) {
      toast.error('Please provide your email and consent to continue');
      return;
    }

    setIsSubmitting(true);
    const success = await joinWaitlist(email);
    setIsSubmitting(false);

    if (success) {
      toast.success('Successfully joined the waitlist!');
      setEmail('');
      setConsent(false);
    } else {
      toast.error('Failed to join waitlist. Please try again.');
    }
  };

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
              <GemIcon className="w-12 h-12 text-[rgb(var(--primary))]" />
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
          Become a Sponsor
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[rgb(var(--foreground))]/70 text-lg max-w-2xl mx-auto"
        >
          Connect with the data analytics and AI community. Showcase your brand to thousands of professionals. Our sponsorship program is launching soon.
        </motion.p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            className={clsx(
              'relative p-6 rounded-xl overflow-hidden',
              stat.color
            )}
          >
            <div className="relative z-10 flex flex-col items-center text-white">
              <stat.icon className="w-8 h-8 mb-3" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/90">{stat.label}</div>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        ))}
      </div>

      {/* Early Access Form */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-[rgb(var(--card))] p-8 rounded-xl border border-[rgb(var(--border))]">
          <h2 className="text-2xl font-bold mb-2">Get Early Access</h2>
          <p className="text-[rgb(var(--foreground))]/70 mb-6">
            Be the first to know when our sponsorship opportunities become available.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-[rgb(var(--foreground))]/70">
                I consent to receiving emails about sponsorship opportunities and related updates. 
                I understand that I can unsubscribe at any time. View our{' '}
                <a href="/privacy" className="text-[rgb(var(--primary))] hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={clsx(
                "w-full px-6 py-3 rounded-xl font-medium transition-all",
                "bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/90",
                "text-white flex items-center justify-center gap-2",
                isSubmitting && "opacity-70 cursor-not-allowed"
              )}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Notify Me'}</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};