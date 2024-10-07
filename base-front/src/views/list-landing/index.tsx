'use client';
import Welcome from './Welcome';
import { WelcomeProvider } from './WelcomeContext';

const WelcomeView = () => (
  <WelcomeProvider>
    <Welcome />
  </WelcomeProvider>
);

export default WelcomeView;
