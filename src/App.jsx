import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search  from './pages/Search';
import Account from './pages/Account';
import Reels from './pages/Reels';
import Error from './pages/Error';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-animation">
          <img src="./assets/TimeLoop1.png" alt="logo" />
        </div>
      </div>
    );
  }

  return (

    <BrowserRouter>    
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

  );
}

export default App;
