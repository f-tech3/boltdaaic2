import React, { useRef } from 'react';
import { Brain, Cpu, Building2, Users, Hash, Sparkles, Database, Stethoscope, Briefcase, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEventStore } from '../stores/eventStore';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const categories = [
  { id: 'ai', name: 'AI & ML', icon: Brain, color: 'bg-purple-600' },
  { id: 'genai', name: 'Gen AI & LLMs', icon: Sparkles, color: 'bg-blue-600' },
  { id: 'tech', name: 'Technology', icon: Cpu, color: 'bg-emerald-600' },
  { id: 'industry', name: 'Industry', icon: Building2, color: 'bg-amber-600' },
  { id: 'conference', name: 'Conferences', icon: Users, color: 'bg-red-600' },
  { id: 'data', name: 'Data & Analytics', icon: Database, color: 'bg-indigo-600' },
  { id: 'health', name: 'Healthcare', icon: Stethoscope, color: 'bg-pink-600' },
  { id: 'business', name: 'Business', icon: Briefcase, color: 'bg-cyan-600' },
  { id: 'other', name: 'Others', icon: Hash, color: 'bg-gray-600' },
] as const;

export const EventCategories: React.FC = () => {
  const { filters, toggleCategory } = useEventStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group flex items-center">
      {/* Left Navigation Arrow */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 p-2 bg-[rgb(var(--card))] rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-[rgb(var(--foreground))]/70" />
        </motion.button>
      </AnimatePresence>

      {/* Categories Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar scroll-smooth px-12"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = filters.categories.includes(category.id);
          
          return (
            <motion.button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative flex-shrink-0 px-6 py-4 rounded-xl flex items-center space-x-3
                transition-all duration-300 overflow-hidden min-w-[180px]
                ${category.color} 
                ${isSelected ? 'ring-2 ring-white shadow-lg shadow-black/20' : 'hover:shadow-md'}
              `}
            >
              {/* Selection Check Mark */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <Check className="w-3 h-3 text-[rgb(var(--primary))] stroke-[3]" />
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                animate={{
                  scale: isSelected ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Label */}
              <span className="relative z-10 text-base text-white font-medium whitespace-nowrap">
                {category.name}
              </span>

              {/* Selected State Overlay */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/10"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Right Navigation Arrow */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 p-2 bg-[rgb(var(--card))] rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-[rgb(var(--foreground))]/70" />
        </motion.button>
      </AnimatePresence>
    </div>
  );
};