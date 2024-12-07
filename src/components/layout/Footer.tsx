import React, { useState } from 'react';
import { Send, Bell, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { joinWaitlist } from '../../lib/waitlist';
import toast from 'react-hot-toast';
import { QuarryLogo } from '../icons/QuarryLogo';
import { ContactModal } from '../modals/ContactModal';
import clsx from 'clsx';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) {
      toast.error('Please provide your email and consent to continue');
      return;
    }

    setIsSubmitting(true);
    const success = await joinWaitlist(email);
    setIsSubmitting(false);

    if (success) {
      toast.success('Successfully subscribed to updates!');
      setEmail('');
      setConsent(false);
    } else {
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="bg-[rgb(var(--card))] border-t border-[rgb(var(--border))]">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))]/20 via-transparent to-[rgb(var(--primary))]/20 blur-3xl opacity-30" />

          <div className="relative bg-[rgb(var(--background))] rounded-2xl p-8 border border-[rgb(var(--border))]">
            {/* Icon Group */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Bell className="w-8 h-8 text-[rgb(var(--primary))]" />
              <Sparkles className="w-6 h-6 text-[rgb(var(--primary))]" />
              <Zap className="w-6 h-6 text-[rgb(var(--primary))]" />
            </div>

            <h2 className="text-3xl font-bold text-center mb-4">Stay in the Loop</h2>
            <p className="text-[rgb(var(--foreground))]/70 text-center max-w-2xl mx-auto mb-8">
              Get notified about upcoming data analytics and AI conferences, exclusive events, and early-bird tickets
            </p>

            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto space-y-6">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={clsx(
                    "px-6 py-3 rounded-xl font-medium transition-all",
                    "bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/90",
                    "text-white flex items-center gap-2",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-[rgb(var(--foreground))]/70">
                  I consent to receiving emails about upcoming conferences and events. 
                  I understand that I can unsubscribe at any time. View our{' '}
                  <a href="/privacy" className="text-[rgb(var(--primary))] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <QuarryLogo className="w-8 h-8 text-[rgb(var(--primary))]" />
            <div>
              <div className="font-bold text-lg">DaaiC</div>
              <div className="text-sm text-[rgb(var(--foreground))]/70">
                Data Analytics & AI Conferences
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <a href="/privacy" className="text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition-colors">
              Terms
            </a>
            <a href="/about" className="text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition-colors">
              About
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="text-[rgb(var(--foreground))]/70">
            © 2024 DaaiC. All rights reserved.
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
};