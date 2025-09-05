import React from 'react';

const categories = [
  'Automobiles',
  'Clothes and wear',
  'Home interiors',
  'Computer and tech',
  'Tools, equipments',
  'Sports and outdoor',
  'Animal and pets',
  'Machinery tools',
  'More category'
];

interface HeroProps {
  onOpenAuthModal: (mode: 'login' | 'register') => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAuthModal }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <nav className="hero-categories">
          <ul>
            {categories.map((category, index) => (
              <li key={category} className={index === 0 ? 'active' : ''}>
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hero-banner">
          <div className="hero-banner-content">
            <p>Latest trending</p>
            <h2>Electronic items</h2>
            <a href="#" className="btn btn-light">Learn more</a>
          </div>
        </div>

        <aside className="hero-sidebar">
          <div className="user-card">
            <div className="user-info">
              <div className="user-avatar">U</div>
              <p>Hi, user<br />let's get started</p>
            </div>
            <button 
              onClick={() => onOpenAuthModal('register')} 
              className="btn btn-primary"
            >
              Join now
            </button>
            <button 
              onClick={() => onOpenAuthModal('login')} 
              className="btn btn-secondary"
            >
              Log in
            </button>
          </div>

          <a href="#" className="promo-card promo-orange">
            Get US $10 off with a new supplier
          </a>

          <a href="#" className="promo-card promo-green">
            Send quotes with supplier preferences
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Hero;