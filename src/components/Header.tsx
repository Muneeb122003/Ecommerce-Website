import React from 'react';
import { Search, Menu, ChevronDown, User, MessageSquare, Package, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import SearchComponent from './SearchComponent';

interface HeaderProps {
  onOpenAuthModal: (mode: 'login' | 'register') => void;
  onOpenCartModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAuthModal, onOpenCartModal }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { state: cartState } = useCart();

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-container">
          <a href="#" className="logo">
            <div className="logo-symbol">
              <Search size={32} color="#0D6EFD" />
            </div>
            <div className="logo-text">
              <span style={{ fontSize: '24px', fontWeight: '700', color: '#1c1c1c' }}>Brand</span>
            </div>
          </a>
          
          <SearchComponent />
          
          <nav className="user-actions">
            <button 
              onClick={() => !isAuthenticated ? onOpenAuthModal('login') : undefined} 
              className="action-item"
            >
              <User size={20} />
              <span>{isAuthenticated ? user?.name : 'Profile'}</span>
            </button>
            <a href="#" className="action-item">
              <MessageSquare size={20} />
              <span>Message</span>
            </a>
            <a href="#" className="action-item">
              <Package size={20} />
              <span>Orders</span>
            </a>
            <button onClick={onOpenCartModal} className="action-item">
              <ShoppingCart size={20} />
              <span>My cart ({cartState.items.length})</span>
            </button>
            {isAuthenticated && (
              <button onClick={logout} className="action-item">
                <span>Logout</span>
              </button>
            )}
          </nav>
        </div>
      </div>
      
      <div className="header-bottom">
        <div className="container header-bottom-container">
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#">
                  <Menu size={16} />
                  All category
                </a>
              </li>
              <li><a href="#">Hot offers</a></li>
              <li><a href="#">Gift boxes</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Menu item</a></li>
              <li>
                <a href="#">
                  Help 
                  <ChevronDown size={16} />
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="header-settings">
            <div className="setting-item">
              <span>English, USD</span>
              <ChevronDown size={16} />
            </div>
            <div className="setting-item">
              <span>Ship to</span>
              <span className="flag">🇺🇸</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;