import { React } from 'react';

import '../theme/main.scss';

// const Header = lazy(() => import('../components/main-layout/header/Header'));
// const Footer = lazy(() => import('../components/main-layout/footer/Footer'));
// const HomePage = lazy(() => import('../components/pages/home-page/HomePage'));

import Header from '../components/main-layout/header/Header';
import Footer from '../components/main-layout/footer/Footer';
import HomePage from '../components/pages/home-page/HomePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
