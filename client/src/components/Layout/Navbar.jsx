import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, TrendingUp } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <TrendingUp size={28} strokeWidth={2.5} />
          <span className="brand-text">
            Bell<span className="brand-accent">Corp</span>
          </span>
        </Link>

        {user && (
          <div className="navbar-actions">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/transactions" className="nav-link">
              Transactions
            </Link>
            
            <div className="user-menu">
              <div className="user-info">
                <User size={18} />
                <span>{user.name}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;