import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Calendar } from 'lucide-react';
import { sendEmail } from '../../lib/email';
import clsx from 'clsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState<'general' | 'event'>('general');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Event-specific fields
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailData = {
      name,
      subject,
      message,
      ...(subject === 'event' && {
        eventDetails: {
          eventName,
          startDate,
          endDate,
          organizer,
          website,
        },
      }),
    };

    const success = await sendEmail(emailData);
    
    if (success) {
      // Reset form
      setName('');
      setSubject('general');
      setMessage('');
      setEventName('');
      setStartDate('');
      setEndDate('');
      setOrganizer('');
      setWebsite('');
      onClose();
    }

    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-2xl my-8 bg-[rgb(var(--card))] rounded-2xl shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[rgb(var(--foreground))]/50 hover:text-[rgb(var(--foreground))] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-[rgb(var(--border))]">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-[rgb(var(--primary))]" />
                <h2 className="text-xl font-semibold">Contact Us</h2>
              </div>
              <p className="mt-2 text-[rgb(var(--foreground))]/70">
                Have a question, suggestion, or want to report inaccurate information? We're here to help!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSubject('general')}
                      className={clsx(
                        'p-4 rounded-lg border transition-all',
                        subject === 'general'
                          ? 'border-[rgb(var(--primary))] bg-[rgb(var(--primary))]/10'
                          : 'border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50'
                      )}
                    >
                      <MessageSquare className="w-6 h-6 mx-auto mb-2 text-[rgb(var(--primary))]" />
                      <span className="block text-sm font-medium">General Inquiry</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubject('event')}
                      className={clsx(
                        'p-4 rounded-lg border transition-all',
                        subject === 'event'
                          ? 'border-[rgb(var(--primary))] bg-[rgb(var(--primary))]/10'
                          : 'border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50'
                      )}
                    >
                      <Calendar className="w-6 h-6 mx-auto mb-2 text-[rgb(var(--primary))]" />
                      <span className="block text-sm font-medium">Submit/Update Event</span>
                    </button>
                  </div>
                </div>

                {/* Event Details */}
                {subject === 'event' && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="eventName" className="block text-sm font-medium mb-2">
                        Event Name
                      </label>
                      <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                        className="w-full px-4 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          required
                          className="w-full px-4 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                        />
                      </div>
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium mb-2">
                          End Date
                        </label>
                        <input
                          type="date"
                          id="endDate"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full px-4 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organizer" className="block text-sm font-medium mb-2">
                        Organizer
                      </label>
                      <input
                        type="text"
                        id="organizer"
                        value={organizer}
                        onChange={(e) => setOrganizer(e.target.value)}
                        required
                        className="w-full px-4 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium mb-2">
                        Event Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full px-4 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                      />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))]"
                    placeholder={subject === 'event' ? 'Additional details about the event...' : 'Your message...'}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[rgb(var(--border))]">
                <div className="flex justify-end">
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
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};