import React from 'react';
import { Search, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenAuthModal: (mode: 'login' | 'register') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAuthModal }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-col brand-col">
          <a href="#" className="logo">
            <div className="logo-symbol">
              <Search size={32} color="#0D6EFD" />
            </div>
            <div className="logo-text">
              <span style={{ fontSize: '24px', fontWeight: '700', color: '#1c1c1c' }}>Brand</span>
            </div>
          </a>
          <p>Best information about the company goes here but now lorem ipsum is</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find store</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Partnership</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find store</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Money Refund</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>For users</h4>
          <ul>
            <li><button onClick={() => onOpenAuthModal('login')}>Login</button></li>
            <li><button onClick={() => onOpenAuthModal('register')}>Register</button></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">My Orders</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Get app</h4>
          <div className="app-buttons">
            <a href="#" style={{ display: 'block', marginBottom: '8px' }}>
              <div style={{ background: '#000', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '12px' }}>
                App Store
              </div>
            </a>
            <a href="#">
              <div style={{ background: '#000', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '12px' }}>
                Google Play
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2023 Ecommerce.</p>
          <div className="language-selector">
            <span>🇺🇸</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;