import React from 'react';
import { EventList } from '../components/EventList';

export const MyEvents: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">My Events</h1>
      <EventList viewMode="grid" />
    </div>
  );
};