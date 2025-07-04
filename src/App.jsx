import { BrowserRouter , Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search  from './pages/Search';
import Account from './pages/Account';
import Reels from './pages/Reels';
import Error from './pages/Error';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && (
        <div className="loading-screen">
          <div className="loading-animation">
            <img src="./assets/TimeLoop1.png" alt="logo" />
          </div>
        </div>
      )}
      <BrowserRouter>    
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search/>} />
            <Route path="account" element={<Account />} />
            <Route path="reels" element={<Reels />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
