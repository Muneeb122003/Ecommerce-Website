import React, { useState } from 'react';
import { Search, ChevronDown, User, MessageSquare, Package, ShoppingCart, Menu, Grid, List, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface ProductListingProps {
  onOpenAuthModal: (mode: 'login' | 'register') => void;
  onOpenCartModal: () => void;
}

const products = [
  {
    id: 'prod-1',
    title: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 998.00,
    originalPrice: 1128.00,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    rating: 7.5,
    orders: 154,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    id: 'prod-2',
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998.00,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    rating: 7.5,
    orders: 154,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    id: 'prod-3',
    title: 'Smartphone Android Latest Model',
    price: 998.00,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    rating: 7.5,
    orders: 154,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    id: 'prod-4',
    title: 'Laptop Computer High Performance',
    price: 998.00,
    image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg',
    rating: 7.5,
    orders: 154,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    id: 'prod-5',
    title: 'Smart Watch Silver Color Modern',
    price: 998.00,
    originalPrice: 1128.00,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
    rating: 7.5,
    orders: 154,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    id: 'prod-6',
    title: 'Headphones Gaming with Microphone',
    price: 998.00,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    rating: 7.5,
    orders: 154,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  }
];

const ProductListing: React.FC<ProductListingProps> = ({ onOpenAuthModal, onOpenCartModal }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { state: cartState, dispatch } = useCart();
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    brands: [] as string[],
    features: [] as string[],
    condition: 'any',
    ratings: [] as string[],
    minPrice: '0',
    maxPrice: '999999'
  });

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }
    });
  };

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    setFilters(prev => {
      if (filterType === 'brands' || filterType === 'features' || filterType === 'ratings') {
        const currentArray = prev[filterType as keyof typeof prev] as string[];
        return {
          ...prev,
          [filterType]: checked 
            ? [...currentArray, value]
            : currentArray.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: value
        };
      }
    });
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      {/* Header */}
      <header className="site-header" style={{ backgroundColor: 'var(--color-white)', fontSize: '16px' }}>
        <div className="header-top" style={{ borderBottom: '1px solid var(--color-border)', padding: '10px 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <ul style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: 0, padding: 0, listStyle: 'none' }}>
                <li><a href="#" style={{ color: 'var(--color-text)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Menu size={16} /> All category
                </a></li>
                <li><a href="#" style={{ color: 'var(--color-text)', fontWeight: '500' }}>Hot offers</a></li>
                <li><a href="#" style={{ color: 'var(--color-text)', fontWeight: '500' }}>Gift boxes</a></li>
                <li><a href="#" style={{ color: 'var(--color-text)', fontWeight: '500' }}>Projects</a></li>
                <li><a href="#" style={{ color: 'var(--color-text)', fontWeight: '500' }}>Menu item</a></li>
                <li><a href="#" style={{ color: 'var(--color-text)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Help <ChevronDown size={16} />
                </a></li>
              </ul>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                <span>English, USD</span>
                <ChevronDown size={16} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                <span>Ship to</span>
                <span style={{ width: '22px', height: '16px', margin: '0 5px' }}>🇺🇸</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="header-main" style={{ padding: '20px 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <a href="#" style={{ flexShrink: 0 }}>
              <div style={{ position: 'relative', width: '150px', height: '46px' }}>
                <Search size={32} color="#0D6EFD" style={{ position: 'absolute', left: '0', top: '0' }} />
                <span style={{ position: 'absolute', left: '49px', top: '12px', fontSize: '24px', fontWeight: '700', color: '#1c1c1c' }}>Brand</span>
              </div>
            </a>
            
            <form style={{ display: 'flex', flexGrow: 1, border: '2px solid var(--color-primary)', borderRadius: '6px', overflow: 'hidden', maxWidth: '665px' }}>
              <input 
                type="search" 
                placeholder="Search" 
                style={{ flexGrow: 1, border: 'none', padding: '10px 15px', fontSize: '16px', outline: 'none' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', padding: '0 15px', borderLeft: '1px solid var(--color-border)', cursor: 'pointer', gap: '10px', color: 'var(--color-text)' }}>
                <span>All category</span>
                <ChevronDown size={16} />
              </div>
              <button type="submit" style={{ background: 'var(--color-primary)', color: 'var(--color-white)', padding: '10px 20px', fontSize: '16px', fontWeight: '500', border: 'none' }}>
                Search
              </button>
            </form>
            
            <nav style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
              <button 
                onClick={() => !isAuthenticated ? onOpenAuthModal('login') : undefined}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <User size={20} />
                <span>{isAuthenticated ? user?.name : 'Profile'}</span>
              </button>
              <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                <MessageSquare size={20} />
                <span>Message</span>
              </a>
              <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                <Package size={20} />
                <span>Orders</span>
              </a>
              <button 
                onClick={onOpenCartModal}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <ShoppingCart size={20} />
                <span>My cart</span>
              </button>
              {isAuthenticated && (
                <button 
                  onClick={logout}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span>Logout</span>
                </button>
              )}
            </nav>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--color-background)', padding: '16px 0' }}>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)', fontSize: '16px' }}>
                <li><a href="#" style={{ color: 'var(--color-text-light)' }}>Home</a></li>
                <li><ChevronRight size={16} /></li>
                <li><a href="#" style={{ color: 'var(--color-text-light)' }}>Clothings</a></li>
                <li><ChevronRight size={16} /></li>
                <li><a href="#" style={{ color: 'var(--color-text-light)' }}>Men's wear</a></li>
                <li><ChevronRight size={16} /></li>
                <li><span style={{ color: 'var(--color-text-body)' }}>Summer clothing</span></li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ padding: '20px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '20px' }}>
          {/* Sidebar */}
          <aside style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '6px', alignSelf: 'start' }}>
            {/* Category Filter */}
            <div style={{ borderBottom: '1px solid var(--color-border)', padding: '16px' }}>
              <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '16px', fontWeight: '600', padding: 0, background: 'none', border: 'none' }}>
                Category <ChevronDown size={16} />
              </button>
              <div style={{ paddingTop: '16px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
                  <li><a href="#" style={{ color: 'var(--color-text-light)' }}>Mobile accessory</a></li>
                  <li><a href="#" style={{ color: 'var(--color-text-light)' }}>Electronics</a></li>
                  <li><a href="#" style={{ color: 'var(--color-text-light)' }}>Smartphones</a></li>
                  <li><a href="#" style={{ color: 'var(--color-text-light)' }}>Modern tech</a></li>
                  <li><a href="#" style={{ color: 'var(--color-primary)' }}>See all</a></li>
                </ul>
              </div>
            </div>

            {/* Brands Filter */}
            <div style={{ borderBottom: '1px solid var(--color-border)', padding: '16px' }}>
              <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '16px', fontWeight: '600', padding: 0, background: 'none', border: 'none' }}>
                Brands <ChevronDown size={16} />
              </button>
              <div style={{ paddingTop: '16px' }}>
                {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map(brand => (
                  <div key={brand} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <input 
                      type="checkbox" 
                      id={brand.toLowerCase()}
                      style={{ width: '20px', height: '20px' }}
                      onChange={(e) => handleFilterChange('brands', brand, e.target.checked)}
                    />
                    <label htmlFor={brand.toLowerCase()}>{brand}</label>
                  </div>
                ))}
                <a href="#" style={{ color: 'var(--color-primary)', marginTop: '6px' }}>See all</a>
              </div>
            </div>

            {/* Features Filter */}
            <div style={{ borderBottom: '1px solid var(--color-border)', padding: '16px' }}>
              <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '16px', fontWeight: '600', padding: 0, background: 'none', border: 'none' }}>
                Features <ChevronDown size={16} />
              </button>
              <div style={{ paddingTop: '16px' }}>
                {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map(feature => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <input 
                      type="checkbox" 
                      id={feature.toLowerCase().replace(' ', '-')}
                      style={{ width: '20px', height: '20px' }}
                      onChange={(e) => handleFilterChange('features', feature, e.target.checked)}
                    />
                    <label htmlFor={feature.toLowerCase().replace(' ', '-')}>{feature}</label>
                  </div>
                ))}
                <a href="#" style={{ color: 'var(--color-primary)', marginTop: '6px' }}>See all</a>
              </div>
            </div>

            {/* Price Range Filter */}
            <div style={{ borderBottom: '1px solid var(--color-border)', padding: '16px' }}>
              <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '16px', fontWeight: '600', padding: 0, background: 'none', border: 'none' }}>
                Price range <ChevronDown size={16} />
              </button>
              <div style={{ paddingTop: '16px' }}>
                <div style={{ position: 'relative', height: '4px', marginBottom: '20px' }}>
                  <div style={{ position: 'absolute', height: '100%', borderRadius: '2px', backgroundColor: '#afd0ff', width: '100%' }}></div>
                  <div style={{ position: 'absolute', height: '100%', borderRadius: '2px', backgroundColor: 'var(--color-primary)', left: '22.5%', right: '32.5%' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: 'var(--color-text)' }}>Min</label>
                    <input 
                      type="text" 
                      value={filters.minPrice}
                      onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                      style={{ width: '100%', padding: '8px', border: '1px solid var(--color-border)', borderRadius: '6px' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: 'var(--color-text)' }}>Max</label>
                    <input 
                      type="text" 
                      value={filters.maxPrice}
                      onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                      style={{ width: '100%', padding: '8px', border: '1px solid var(--color-border)', borderRadius: '6px' }}
                    />
                  </div>
                </div>
                <button style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border)', borderRadius: '6px', fontWeight: '500', color: 'var(--color-primary)', background: 'white' }}>
                  Apply
                </button>
              </div>
            </div>

            {/* Condition Filter */}
            <div style={{ borderBottom: '1px solid var(--color-border)', padding: '16px' }}>
              <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '16px', fontWeight: '600', padding: 0, background: 'none', border: 'none' }}>
                Condition <ChevronDown size={16} />
              </button>
              <div style={{ paddingTop: '16px' }}>
                {[
                  { value: 'any', label: 'Any' },
                  { value: 'refurbished', label: 'Refurbished' },
                  { value: 'brand-new', label: 'Brand new' },
                  { value: 'old', label: 'Old items' }
                ].map(condition => (
                  <div key={condition.value} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <input 
                      type="radio" 
                      id={condition.value}
                      name="condition"
                      checked={filters.condition === condition.value}
                      onChange={() => handleFilterChange('condition', condition.value, true)}
                      style={{ width: '20px', height: '20px' }}
                    />
                    <label htmlFor={condition.value}>{condition.label}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Ratings Filter */}
            <div style={{ padding: '16px' }}>
              <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '16px', fontWeight: '600', padding: 0, background: 'none', border: 'none' }}>
                Ratings <ChevronDown size={16} />
              </button>
              <div style={{ paddingTop: '16px' }}>
                {[5, 4, 3, 2].map(rating => (
                  <div key={rating} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <input 
                      type="checkbox" 
                      id={`rating${rating}`}
                      style={{ width: '20px', height: '20px' }}
                      onChange={(e) => handleFilterChange('ratings', rating.toString(), e.target.checked)}
                    />
                    <label htmlFor={`rating${rating}`} style={{ display: 'flex', alignItems: 'center' }}>
                      {Array.from({ length: rating }, (_, i) => (
                        <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                      ))}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Product Area */}
          <main>
            {/* Product Toolbar */}
            <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <p style={{ margin: 0 }}>12,911 items in <strong>Mobile accessory</strong></p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" id="verified" defaultChecked style={{ width: '20px', height: '20px' }} />
                  <label htmlFor="verified">Verified only</label>
                </div>
                <div style={{ border: '1px solid var(--color-border)', borderRadius: '6px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>Featured</span>
                  <ChevronDown size={16} />
                </div>
                <div style={{ display: 'flex' }}>
                  <button 
                    onClick={() => setViewMode('list')}
                    style={{ padding: '8px', border: '1px solid var(--color-border)', borderRadius: '6px 0 0 6px', backgroundColor: viewMode === 'list' ? '#e5f1ff' : 'white' }}
                  >
                    <List size={16} />
                  </button>
                  <button 
                    onClick={() => setViewMode('grid')}
                    style={{ padding: '8px', border: '1px solid var(--color-border)', borderLeft: 'none', borderRadius: '0 6px 6px 0', backgroundColor: viewMode === 'grid' ? '#e5f1ff' : 'white' }}
                  >
                    <Grid size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {products.map((product) => (
                <article key={product.id} style={{ position: 'relative', display: 'flex', gap: '20px', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '20px' }}>
                  <div style={{ flexShrink: 0, width: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      style={{ maxWidth: '100%', maxHeight: '185px', objectFit: 'contain' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '500', margin: 0 }}>{product.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ fontSize: '20px', fontWeight: '600' }}>${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <s style={{ color: 'var(--color-text-secondary)' }}>${product.originalPrice.toFixed(2)}</s>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} size={14} fill={i < 4 ? "#FFD700" : "none"} color="#FFD700" />
                        ))}
                      </div>
                      <span style={{ color: 'var(--color-orange)' }}>{product.rating}</span>
                      <span style={{ width: '6px', height: '6px', backgroundColor: '#dbdbdb', borderRadius: '50%' }}></span>
                      <span>{product.orders} orders</span>
                      <span style={{ width: '6px', height: '6px', backgroundColor: '#dbdbdb', borderRadius: '50%' }}></span>
                      <span style={{ color: 'var(--color-green)' }}>Free Shipping</span>
                    </div>
                    <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>{product.description}</p>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      style={{ color: 'var(--color-primary)', fontWeight: '500', marginTop: 'auto', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
                    >
                      Add to cart
                    </button>
                  </div>
                  <button style={{ position: 'absolute', top: '20px', right: '20px', width: '40px', height: '40px', border: '1px solid var(--color-border)', borderRadius: '6px', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Heart size={20} />
                  </button>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '6px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>Show 10</span>
                <ChevronDown size={16} />
              </div>
              <nav style={{ display: 'flex' }}>
                <button style={{ width: '40px', height: '40px', border: '1px solid var(--color-border)', borderRadius: '6px 0 0 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                  <ChevronLeft size={16} />
                </button>
                <button style={{ width: '40px', height: '40px', border: '1px solid var(--color-border)', borderLeft: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}>
                  1
                </button>
                <button style={{ width: '40px', height: '40px', border: '1px solid var(--color-border)', borderLeft: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                  2
                </button>
                <button style={{ width: '40px', height: '40px', border: '1px solid var(--color-border)', borderLeft: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                  3
                </button>
                <button style={{ width: '40px', height: '40px', border: '1px solid var(--color-border)', borderLeft: 'none', borderRadius: '0 6px 6px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                  <ChevronRight size={16} />
                </button>
              </nav>
            </div>
          </main>
        </div>
      </div>

      {/* Newsletter Section */}
      <section style={{ backgroundColor: 'var(--color-gray-light)', padding: '40px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 10px' }}>Subscribe on our newsletter</h2>
          <p style={{ color: '#606060', margin: '0 0 20px' }}>Get daily news on upcoming offers from many suppliers all over the world</p>
          <form style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '6px', paddingLeft: '12px' }}>
              <MessageSquare size={16} />
              <input 
                type="email" 
                placeholder="Email"
                style={{ border: 'none', background: 'transparent', padding: '10px', outline: 'none', width: '250px' }}
              />
            </div>
            <button type="submit" style={{ background: 'linear-gradient(180deg, #127fff 0%, #0067ff 100%)', color: 'var(--color-white)', padding: '10px 20px', borderRadius: '6px', fontWeight: '500', border: 'none' }}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-white)', paddingTop: '40px', fontSize: '16px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', paddingBottom: '40px' }}>
          <div style={{ gridColumn: '1 / span 2', minWidth: '250px' }}>
            <a href="#" style={{ display: 'block', marginBottom: '15px' }}>
              <div style={{ position: 'relative', width: '150px', height: '46px' }}>
                <Search size={32} color="#0D6EFD" style={{ position: 'absolute', left: '0', top: '0' }} />
                <span style={{ position: 'absolute', left: '49px', top: '12px', fontSize: '24px', fontWeight: '700', color: '#1c1c1c' }}>Brand</span>
              </div>
            </a>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.5, margin: '0 0 15px' }}>Best information about the company gies here but now lorem ipsum is</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="#"><div style={{ width: '32px', height: '32px', backgroundColor: '#1877f2', borderRadius: '50%' }}></div></a>
              <a href="#"><div style={{ width: '32px', height: '32px', backgroundColor: '#1da1f2', borderRadius: '50%' }}></div></a>
              <a href="#"><div style={{ width: '32px', height: '32px', backgroundColor: '#0077b5', borderRadius: '50%' }}></div></a>
              <a href="#"><div style={{ width: '32px', height: '32px', backgroundColor: '#e4405f', borderRadius: '50%' }}></div></a>
              <a href="#"><div style={{ width: '32px', height: '32px', backgroundColor: '#ff0000', borderRadius: '50%' }}></div></a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-text-dark)', margin: '0 0 10px 0' }}>About</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>About Us</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Find store</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Categories</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Blogs</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-text-dark)', margin: '0 0 10px 0' }}>Partnership</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>About Us</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Find store</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Categories</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Blogs</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-text-dark)', margin: '0 0 10px 0' }}>Information</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Help Center</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Money Refund</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Shipping</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-text-dark)', margin: '0 0 10px 0' }}>For users</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><button onClick={() => onOpenAuthModal('login')} style={{ color: 'var(--color-text-light)', background: 'none', border: 'none', cursor: 'pointer' }}>Login</button></li>
              <li style={{ marginBottom: '8px' }}><button onClick={() => onOpenAuthModal('register')} style={{ color: 'var(--color-text-light)', background: 'none', border: 'none', cursor: 'pointer' }}>Register</button></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>Settings</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--color-text-light)' }}>My Orders</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-text-dark)', margin: '0 0 10px 0' }}>Get app</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#"><div style={{ height: '42px', backgroundColor: '#000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontSize: '12px' }}>App Store</div></a>
              <a href="#"><div style={{ height: '42px', backgroundColor: '#000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontSize: '12px' }}>Google Play</div></a>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#EFF2F4', padding: '20px 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ margin: 0, color: '#606060' }}>© 2023 Ecommerce.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <span style={{ fontSize: '20px' }}>🇺🇸</span>
              <span style={{ color: '#606060' }}>English</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductListing;