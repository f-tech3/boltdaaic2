import React from 'react';
import { SearchInput } from './search/SearchInput';
import { useEventStore } from '../stores/eventStore';

export const SearchBar: React.FC = () => {
  const { filters, setFilters } = useEventStore();

  return (
    <div className="w-full">
      <SearchInput
        value={filters.search}
        onChange={(value) => setFilters({ search: value })}
      />
    </div>
  );
};