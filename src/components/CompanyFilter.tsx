import React, { useState } from 'react';
import { Building2, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEventStore } from '../stores/eventStore';
import clsx from 'clsx';

export const CompanyFilter: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { events, filters, toggleCompany } = useEventStore();

  // Get unique companies from events
  const companies = Array.from(new Set(events.map(event => event.organizer)))
    .filter(Boolean)
    .sort();

  return (
    <div className="mt-4">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 bg-[rgb(var(--card))] rounded-xl hover:bg-[rgb(var(--card))]/80 transition-colors group"
      >
        <div className="flex items-center space-x-3">
          <Building2 className="w-5 h-5 text-amber-400" />
          <span className="font-medium">Filter by Company</span>
          {filters.companies.length > 0 && (
            <span className="px-2 py-0.5 text-sm bg-amber-400/10 text-amber-400 rounded-full">
              {filters.companies.length} selected
            </span>
          )}
        </div>
        <div className="text-[rgb(var(--foreground))]/50 group-hover:text-[rgb(var(--foreground))] transition-colors">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-h-[400px] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {companies.map((company) => {
                  const isSelected = filters.companies.includes(company);
                  
                  return (
                    <motion.button
                      key={company}
                      onClick={() => toggleCompany(company)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={clsx(
                        'relative px-6 py-4 rounded-xl flex items-center space-x-3',
                        'transition-all duration-300 overflow-hidden',
                        'bg-gradient-to-r from-amber-600 to-orange-600',
                        isSelected ? 'ring-2 ring-white shadow-lg shadow-black/20' : 'hover:shadow-md'
                      )}
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
                        <Building2 className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Label */}
                      <span className="relative z-10 text-base text-white font-medium truncate">
                        {company}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};