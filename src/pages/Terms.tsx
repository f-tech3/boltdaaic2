import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-[rgb(var(--foreground))]/70 mb-4">
            By accessing and using DaalC, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-[rgb(var(--foreground))]/70 mb-4">
            Permission is granted to temporarily access and use DaalC for personal, non-commercial purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Event Listings</h2>
          <p className="text-[rgb(var(--foreground))]/70 mb-4">
            DaalC strives to provide accurate and up-to-date information about events but cannot guarantee the accuracy of all listings.
          </p>
        </section>
      </div>
    </div>
  );
};