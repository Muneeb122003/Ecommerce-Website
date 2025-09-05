import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Deals from './components/Deals';
import CategoryHome from './components/CategoryHome';
import CategoryElectronics from './components/CategoryElectronics';
import Inquiry from './components/Inquiry';
import Recommended from './components/Recommended';
import Services from './components/Services';
import Suppliers from './components/Suppliers';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CartModal from './components/CartModal';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './styles/global.css';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'listing' | 'details'>('home');

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'listing':
        return (
          <ProductListing 
            onOpenAuthModal={openAuthModal}
            onOpenCartModal={openCartModal}
          />
        );
      case 'details':
        return (
          <ProductDetails 
            onOpenAuthModal={openAuthModal}
            onOpenCartModal={openCartModal}
          />
        );
      default:
        return (
          <>
            <Header 
              onOpenAuthModal={openAuthModal}
              onOpenCartModal={openCartModal}
            />
            <main>
              <Hero onOpenAuthModal={openAuthModal} />
              <Deals />
              <CategoryHome />
              <CategoryElectronics />
              <Inquiry />
              <Recommended />
              <Services />
              <Suppliers />
              <Newsletter />
            </main>
            <Footer onOpenAuthModal={openAuthModal} />
          </>
        );
    }
  };
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          {/* Navigation Bar */}
          <div style={{ 
            position: 'fixed', 
            top: '20px', 
            right: '20px', 
            zIndex: 1000, 
            display: 'flex', 
            gap: '10px',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <button 
              onClick={() => setCurrentPage('home')}
              style={{ 
                padding: '8px 16px', 
                backgroundColor: currentPage === 'home' ? '#0D6EFD' : 'white',
                color: currentPage === 'home' ? 'white' : '#0D6EFD',
                border: '1px solid #0D6EFD',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('listing')}
              style={{ 
                padding: '8px 16px', 
                backgroundColor: currentPage === 'listing' ? '#0D6EFD' : 'white',
                color: currentPage === 'listing' ? 'white' : '#0D6EFD',
                border: '1px solid #0D6EFD',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Products
            </button>
            <button 
              onClick={() => setCurrentPage('details')}
              style={{ 
                padding: '8px 16px', 
                backgroundColor: currentPage === 'details' ? '#0D6EFD' : 'white',
                color: currentPage === 'details' ? 'white' : '#0D6EFD',
                border: '1px solid #0D6EFD',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Details
            </button>
          </div>

          {renderCurrentPage()}
          
          {isAuthModalOpen && (
            <AuthModal
              mode={authModalMode}
              onClose={() => setIsAuthModalOpen(false)}
              onSwitchMode={() => setAuthModalMode(authModalMode === 'login' ? 'register' : 'login')}
            />
          )}
          
          {isCartModalOpen && (
            <CartModal onClose={() => setIsCartModalOpen(false)} />
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;