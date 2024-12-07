import React from 'react';
import { Search, Calendar, BookmarkPlus, Bell, Map, Tag, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const helpItems = [
  {
    icon: Search,
    title: 'How do I find specific conferences?',
    description: 'Use the search bar at the top of the page to find conferences by name, location, or keywords. You can also use filters to narrow down by categories and organizers.',
    color: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Calendar,
    title: 'How are events organized?',
    description: 'Events can be viewed by date (upcoming/past), grouped by month or quarter, and displayed in either card or list view. The timeline helps you plan your conference schedule effectively.',
    color: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: BookmarkPlus,
    title: 'Can I save conferences for later?',
    description: 'Yes! Click the bookmark icon on any conference card to save it to your favorites. You\'ll need to be signed in to use this feature.',
    color: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Bell,
    title: 'How do notifications work?',
    description: 'Once logged in, you\'ll receive notifications about upcoming conferences you\'ve bookmarked, price changes, and new events matching your interests.',
    color: 'bg-rose-500/10',
    iconColor: 'text-rose-500',
  },
  {
    icon: Map,
    title: 'Can I see where conferences are located?',
    description: 'Yes, our interactive map view shows you the locations of all conferences. Click on map markers to see event details and get directions.',
    color: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
  },
  {
    icon: Tag,
    title: 'What do the different tags mean?',
    description: 'Tags help categorize conferences by focus area (AI, Data, Tech, etc.). Use them to quickly filter and find events relevant to your interests.',
    color: 'bg-indigo-500/10',
    iconColor: 'text-indigo-500',
  },
];

export const Help: React.FC = () => {
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
              <HelpCircle className="w-12 h-12 text-[rgb(var(--primary))]" />
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
          How can we help you?
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[rgb(var(--foreground))]/70 text-lg max-w-2xl mx-auto"
        >
          Find answers to common questions about using DaaiC to discover and track Data Analytics & AI conferences.
        </motion.p>
      </div>

      {/* Help Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helpItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[rgb(var(--card))] p-6 rounded-2xl border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
              <div className={`w-12 h-12 ${item.color} ${item.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-[rgb(var(--foreground))]/70">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};