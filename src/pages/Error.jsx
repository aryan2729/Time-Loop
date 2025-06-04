import { useNavigate } from 'react-router-dom';
import './Error.css';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="home-button">
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Error; 