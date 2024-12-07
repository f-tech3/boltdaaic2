import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { SignInButton } from '../auth/SignInButton';
import { UserButton } from '../auth/UserButton';

export const AuthSection: React.FC = () => {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? <UserButton /> : <SignInButton />}
    </div>
  );
};