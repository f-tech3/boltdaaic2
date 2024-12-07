import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { SignIn, AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';
import { MyEvents } from '../pages/MyEvents';
import { Sponsors } from '../pages/Sponsors';
import { About } from '../pages/About';
import { Help } from '../pages/Help';
import { Terms } from '../pages/Terms';
import { Privacy } from '../pages/Privacy';
import { Contact } from '../pages/Contact';
import { Notifications } from '../pages/Notifications';
import { AuthLayout } from '../components/layout/AuthLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'my-events', element: <MyEvents /> },
      { path: 'sponsors', element: <Sponsors /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'about', element: <About /> },
      { path: 'help', element: <Help /> },
      { path: 'terms', element: <Terms /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '/signin',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn routing="path" path="/signin" />,
      },
      {
        path: 'sso-callback',
        element: <AuthenticateWithRedirectCallback />,
      },
    ],
  },
]);