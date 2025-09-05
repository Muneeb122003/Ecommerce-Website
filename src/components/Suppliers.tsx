import React from 'react';

const suppliers = [
  { name: 'Arabic Emirates', url: 'shopname.ae', flag: '🇦🇪' },
  { name: 'Australia', url: 'shopname.ae', flag: '🇦🇺' },
  { name: 'United States', url: 'shopname.ae', flag: '🇺🇸' },
  { name: 'Russia', url: 'shopname.ru', flag: '🇷🇺' },
  { name: 'Italy', url: 'shopname.it', flag: '🇮🇹' },
  { name: 'Denmark', url: 'denmark.com.dk', flag: '🇩🇰' },
  { name: 'France', url: 'shopname.com.fr', flag: '🇫🇷' },
  { name: 'Arabic Emirates', url: 'shopname.ae', flag: '🇦🇪' },
  { name: 'China', url: 'shopname.ae', flag: '🇨🇳' },
  { name: 'Great Britain', url: 'shopname.co.uk', flag: '🇬🇧' },
];

const Suppliers: React.FC = () => {
  return (
    <section id="suppliers" className="suppliers-section">
      <div className="container">
        <h2 className="section-title">Suppliers by region</h2>
        <div className="suppliers-grid">
          {suppliers.map((supplier, index) => (
            <a key={index} href="#" className="supplier-item">
              <span style={{ fontSize: '20px' }}>{supplier.flag}</span>
              <div>
                <h4>{supplier.name}</h4>
                <p>{supplier.url}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;