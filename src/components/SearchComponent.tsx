import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const mockProducts = [
  { id: '1', title: 'T-shirts with multiple colors, for men', price: 10.30, image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' },
  { id: '2', title: 'Jeans shorts for men blue color', price: 10.30, image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg' },
  { id: '3', title: 'Brown winter coat medium size', price: 12.50, image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg' },
  { id: '4', title: 'Jeans bag for travel for men', price: 34.00, image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg' },
  { id: '5', title: 'Leather wallet', price: 99.00, image: 'https://images.pexels.com/photos/6533315/pexels-photo-6533315.jpeg' },
  { id: '6', title: 'Canon camera black, 100x zoom', price: 9.99, image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' },
  { id: '7', title: 'Headset for gaming with mic', price: 8.99, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
  { id: '8', title: 'Smartwatch silver color modern', price: 10.30, image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
];

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = mockProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(false);
  };

  const handleProductClick = (product: typeof mockProducts[0]) => {
    setSearchTerm(product.title);
    setShowResults(false);
  };

  return (
    <div ref={searchRef} style={{ position: 'relative', flexGrow: 1 }}>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setShowResults(true)}
        />
        <div className="search-category">
          <span>All category</span>
          <ChevronDown size={16} />
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>

      {showResults && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="search-result-image"
                />
                <div className="search-result-details">
                  <div className="search-result-title">{product.title}</div>
                  <div className="search-result-price">${product.price}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="search-result-item">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;