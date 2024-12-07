import React from 'react';
import { UserButton as ClerkUserButton } from '@clerk/clerk-react';

export const UserButton: React.FC = () => {
  return (
    <ClerkUserButton
      appearance={{
        elements: {
          userButtonAvatarBox: 'w-8 h-8',
          userButtonTrigger: 'focus:shadow-none',
        },
      }}
    />
  );
};