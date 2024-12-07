import React from 'react';
import { motion } from 'framer-motion';
import { Info, Target, Users, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make it easier for professionals to discover, track, and participate in the most impactful data analytics and AI events globally.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a vibrant community of data professionals, researchers, and enthusiasts passionate about analytics and AI.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting professionals with events worldwide, fostering knowledge exchange and networking opportunities.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
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
              <Info className="w-12 h-12 text-[rgb(var(--primary))]" />
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
          About DaaiC
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[rgb(var(--foreground))]/70 text-lg max-w-2xl mx-auto"
        >
          Your premier destination for discovering and tracking data analytics and AI conferences worldwide.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[rgb(var(--card))] p-6 rounded-2xl border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
              <div className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-[rgb(var(--foreground))]/70">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};