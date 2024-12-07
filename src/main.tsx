import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Clerk Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={clerkPubKey}
      appearance={{
        baseTheme: 'dark',
        variables: {
          colorPrimary: '#2ecc71',
          colorBackground: '#1f2437',
          colorText: '#ffffff',
          colorInputText: '#ffffff',
          colorInputBackground: '#262b3d',
        },
        elements: {
          formButtonPrimary: 
            'bg-[#2ecc71] hover:bg-[#2ecc71]/90 text-white',
          card: 
            'bg-[#1f2437] border-gray-800',
          headerTitle: 
            'text-white',
          headerSubtitle: 
            'text-gray-400',
          socialButtonsBlockButton: 
            'border-gray-800 hover:bg-gray-800',
          socialButtonsBlockButtonText: 
            'text-white',
          formFieldLabel: 
            'text-gray-300',
          formFieldInput: 
            'bg-[#262b3d] border-gray-800 text-white',
          dividerLine: 
            'bg-gray-800',
          dividerText: 
            'text-gray-400',
          footer: 
            'hidden',
        },
      }}
      afterSignInUrl="/"
      afterSignUpUrl="/"
      signInUrl="/signin"
      signUpUrl="/signin"
    >
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ClerkProvider>
  </StrictMode>
);