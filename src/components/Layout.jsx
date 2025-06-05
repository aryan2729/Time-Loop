import { Outlet, useNavigate } from 'react-router-dom';
import './Layout.css';

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="layout-container">
      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">

        <button onClick={() => navigate('/')} className="footer-button">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </button>
        <button onClick={() => navigate('/search')} className="footer-button">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </button>
        <button onClick={() => navigate('/reels')} className="footer-button">
          <i className="fas fa-film"></i>
          <span>Reels</span>
        </button>
        <button onClick={() => navigate('/account')} className="footer-button">
          
          <i className="fas fa-user"></i>
          <span>Account</span>
        </button>
      </footer>

    </div>
  );
}

export default Layout; 