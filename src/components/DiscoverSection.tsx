import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventCategories } from './EventCategories';
import { CompanyFilter } from './CompanyFilter';
import { ViewOptions } from './ViewOptions';
import { useEventStore } from '../stores/eventStore';

interface DiscoverSectionProps {
  view: 'list' | 'cards' | 'calendar';
  grouping: 'none' | 'monthly' | 'quarterly';
  onViewChange: (view: 'list' | 'cards' | 'calendar') => void;
  onGroupingChange: (grouping: 'none' | 'monthly' | 'quarterly') => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({
  view,
  grouping,
  onViewChange,
  onGroupingChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { filters, clearFilters } = useEventStore();

  // Calculate total active filters
  const activeFiltersCount = [
    filters.categories.length > 0 ? filters.categories.length : 0,
    filters.companies.length > 0 ? filters.companies.length : 0,
    filters.date ? 1 : 0,
    filters.search ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  const hasActiveFilters = activeFiltersCount > 0;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        {/* Title Section */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary))]/50 rounded-full blur-sm opacity-70" />
            <div className="relative bg-[rgb(var(--card))] p-2 rounded-full">
              <Sparkles className="w-6 h-6 text-[rgb(var(--primary))]" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary))]/70 bg-clip-text text-transparent">
              Discover Events
            </h2>
            <p className="text-sm text-[rgb(var(--foreground))]/60 mt-0.5">
              Explore upcoming conferences and meetups
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Clear Filters Button */}
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={clearFilters}
                className="group relative flex items-center space-x-2 px-4 py-2 bg-[rgb(var(--card))] rounded-xl transition-all hover:shadow-lg overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))]/10 to-[rgb(var(--primary))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Filter Count Badge */}
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(var(--primary))] text-white text-xs font-medium">
                  {activeFiltersCount}
                </div>
                
                {/* Clear Text */}
                <span className="text-sm font-medium text-[rgb(var(--foreground))]/70 group-hover:text-[rgb(var(--foreground))] transition-colors">
                  Clear Filters
                </span>
                
                {/* Clear Icon */}
                <X className="w-4 h-4 text-[rgb(var(--primary))] group-hover:rotate-90 transition-transform duration-200" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-[rgb(var(--primary))]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* View Options */}
          <ViewOptions
            view={view}
            grouping={grouping}
            onViewChange={onViewChange}
            onGroupingChange={onGroupingChange}
          />

          {/* Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-[rgb(var(--primary))]/10 hover:bg-[rgb(var(--primary))]/20 transition-colors"
          >
            <div className="absolute inset-0 bg-[rgb(var(--primary))]/5 group-hover:bg-[rgb(var(--primary))]/10 rounded-lg transition-colors" />
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-[rgb(var(--primary))] transform group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronDown className="w-6 h-6 text-[rgb(var(--primary))] transform group-hover:scale-110 transition-transform" />
            )}
            <div className="absolute inset-0 bg-[rgb(var(--primary))]/5 group-hover:bg-[rgb(var(--primary))]/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Collapsible Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <EventCategories />
            <CompanyFilter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};