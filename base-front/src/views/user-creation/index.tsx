'use client';
import Home from './Home';
import { HomeProvider } from './HomeContext';

const HomeView = () => (
  <HomeProvider>
    <Home />
  </HomeProvider>
);

export default HomeView;
