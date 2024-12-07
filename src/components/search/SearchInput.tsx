import React from 'react';
import { Search, Loader, Building2 } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { SearchInputProps } from './types';
import { useSearchAnimation } from './useSearchAnimation';

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  isLoading = false,
  placeholder = 'Search by event name, company, location, or keywords...',
}) => {
  const { theme } = useTheme();
  const { iconRef, inputRef } = useSearchAnimation();

  return (
    <div className="relative w-full group">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2ecc71]/10 via-[#27ae60]/5 to-[#2ecc71]/10 rounded-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 blur-xl" />
      
      {/* Search Icon or Loader */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300">
        {isLoading ? (
          <Loader className="w-5 h-5 text-[#2ecc71] animate-spin" />
        ) : (
          <Search
            ref={iconRef}
            className="w-5 h-5 text-gray-400 group-focus-within:text-[#2ecc71] transition-all duration-300"
          />
        )}
      </div>

      {/* Company Filter Icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Building2 className="w-5 h-5 text-gray-400 group-focus-within:text-[#2ecc71] transition-colors duration-300" />
      </div>

      {/* Input Field */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full pl-12 pr-12 py-3.5
          bg-[rgb(var(--card))]
          border border-[rgb(var(--border))]
          rounded-xl
          text-[rgb(var(--foreground))]
          placeholder:text-[rgb(var(--foreground))]/50
          transition-all duration-300
          hover:border-[#2ecc71]/30
          focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/20 focus:border-[#2ecc71]
          group-hover:shadow-lg group-hover:shadow-[#2ecc71]/5
        `}
      />

      {/* Focus Effect */}
      <div className="absolute inset-0 -z-10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[#2ecc71]/5 blur-xl rounded-xl" />
      </div>
    </div>
  );
};