import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, BookmarkPlus, Tag } from 'lucide-react';

export const Notifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      type: 'upcoming',
      icon: Clock,
      title: 'Upcoming Event Reminder',
      message: 'AI Summit 2024 starts in 3 days',
      time: '2 hours ago',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
    },
    {
      id: 2,
      type: 'bookmark',
      icon: BookmarkPlus,
      title: 'Event Bookmarked',
      message: 'You bookmarked Data Analytics Workshop',
      time: '1 day ago',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      id: 3,
      type: 'tag',
      icon: Tag,
      title: 'New Events Added',
      message: '5 new AI & ML events added this week',
      time: '2 days ago',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
  ];

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
              <Bell className="w-12 h-12 text-[rgb(var(--primary))]" />
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
          Notifications
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[rgb(var(--foreground))]/70 text-lg max-w-2xl mx-auto"
        >
          Stay updated with event reminders, bookmarks, and new additions
        </motion.p>
      </div>

      {/* Notifications List */}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[rgb(var(--card))] p-6 rounded-2xl border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className={`${notification.bgColor} ${notification.color} rounded-xl p-3`}>
                    <notification.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-semibold mb-1">{notification.title}</p>
                    <p className="text-[rgb(var(--foreground))]/70">{notification.message}</p>
                    <p className="text-sm text-[rgb(var(--foreground))]/50 mt-2">{notification.time}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};