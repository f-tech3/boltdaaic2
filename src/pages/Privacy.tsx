import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-[rgb(var(--foreground))]/70 mb-4">
            We collect information that you provide directly to us when using DaalC, including registration information and event preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-[rgb(var(--foreground))]/70 mb-4">
            We use the information we collect to provide, maintain, and improve our services, and to communicate with you about events.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="text-[rgb(var(--foreground))]/70 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information.
          </p>
        </section>
      </div>
    </div>
  );
};