import React, { useState } from 'react';
import { Search, ChevronDown, User, MessageSquare, Package, ShoppingCart, Menu, Star, Heart, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface ProductDetailsProps {
  onOpenAuthModal: (mode: 'login' | 'register') => void;
  onOpenCartModal: () => void;
}

const relatedProducts = [
  { id: 'rel-1', title: 'Xiaomi Redmi 8 Original', price: '32.00-40.00', image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg' },
  { id: 'rel-2', title: 'Smart Watch Modern', price: '32.00-40.00', image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { id: 'rel-3', title: 'Gaming Headphones', price: '32.00-40.00', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
  { id: 'rel-4', title: 'Digital Camera', price: '32.00-40.00', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' },
  { id: 'rel-5', title: 'Smart Watch Silver', price: '32.00-40.00', image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { id: 'rel-6', title: 'Home Appliance', price: '32.00-40.00', image: 'https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg' }
];

const youMayLike = [
  { id: 'like-1', title: 'Men Blazers Sets Elegant Formal', price: '7.00 - 99.50', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg' },
  { id: 'like-2', title: 'Men Shirt Sleeve Polo Contrast', price: '7.00 - 99.50', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' },
  { id: 'like-3', title: 'Apple Watch Series Space Gray', price: '7.00 - 99.50', image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { id: 'like-4', title: 'Basketball Crew Socks Long Stuff', price: '7.00 - 99.50', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg' },
  { id: 'like-5', title: 'New Summer Men\'s castrol T-Shirts', price: '7.00 - 99.50', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' }
];

const ProductDetails: React.FC<ProductDetailsProps> = ({ onOpenAuthModal, onOpenCartModal }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { dispatch } = useCart();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
    'https://images.pexels.com/photos/6533315/pexels-photo-6533315.jpeg',
    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg'
  ];

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: 'product-detail-1',
        title: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
        price: 98.00,
        image: productImages[selectedImage],
      }
    });
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background-light)', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'var(--color-background-white)' }}>
        <div style={{ padding: '20px 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <div style={{ position: 'relative', width: '150px', height: '46px', flexShrink: 0 }}>
              <a href="#">
                <Search size={32} color="#0D6EFD" style={{ position: 'absolute', left: '0', top: '0' }} />
                <span style={{ position: 'absolute', left: '49px', top: '12px', fontSize: '24px', fontWeight: '700', color: '#1c1c1c' }}>Brand</span>
              </a>
            </div>
            
            <form style={{ display: 'flex', flexGrow: 1, border: '2px solid var(--color-primary)', borderRadius: '6px' }}>
              <input 
                type="text" 
                placeholder="Search"
                style={{ flexGrow: 1, border: 'none', padding: '0 10px', fontSize: '16px', outline: 'none' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', padding: '0 15px', borderLeft: '1px solid var(--color-border)', cursor: 'pointer' }}>
                <span style={{ marginRight: '5px' }}>All category</span>
                <ChevronDown size={16} />
              </div>
              <button type="submit" style={{ background: 'var(--color-primary)', color: 'var(--color-text-white)', padding: '10px 20px', fontSize: '16px', fontWeight: '500', border: 'none', borderRadius: '0 4px 4px 0' }}>
                Search
              </button>
            </form>
            
            <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button 
                onClick={() => !isAuthenticated ? onOpenAuthModal('login') : undefined}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-light)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <User size={20} />
                <span>{isAuthenticated ? user?.name : 'Profile'}</span>
              </button>
              <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-light)' }}>
                <MessageSquare size={20} />
                <span>Message</span>
              </a>
              <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-light)' }}>
                <Package size={20} />
                <span>Orders</span>
              </a>
              <button 
                onClick={onOpenCartModal}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-light)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <ShoppingCart size={20} />
                <span>My cart</span>
              </button>
              {isAuthenticated && (
                <button 
                  onClick={logout}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-light)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span>Logout</span>
                </button>
              )}
            </nav>
          </div>
        </div>

        <div style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <nav>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '20px' }}>
                <li><a href="#" style={{ color: 'var(--color-text-dark)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Menu size={16} /> All category
                </a></li>
                <li><a href="#" style={{ color: 'var(--color-text-dark)', fontWeight: '500' }}>Hot offers</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-dark)', fontWeight: '500' }}>Gift boxes</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-dark)', fontWeight: '500' }}>Projects</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-dark)', fontWeight: '500' }}>Menu item</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-dark)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px' }}>
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
                <span style={{ width: '22px', height: '16px' }}>🇺🇸</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--color-background-light)', padding: '16px 0' }}>
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

      {/* Product Details Section */}
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0 }}>
              {/* Product Gallery */}
              <div style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '20px' }}>
                <div style={{ position: 'relative', width: '100%', paddingTop: '100%', border: '1px solid var(--color-border)', borderRadius: '6px', marginBottom: '16px' }}>
                  <img 
                    src={productImages[selectedImage]} 
                    alt="Mens Long Sleeve T-shirt"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {productImages.map((image, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      style={{ width: '56px', height: '56px', border: `1px solid ${selectedImage === index ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: '4px', cursor: 'pointer', padding: '2px' }}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Description */}
              <div style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '20px' }}>
                <nav style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', marginBottom: '20px' }}>
                  {[
                    { id: 'description', label: 'Description' },
                    { id: 'reviews', label: 'Reviews' },
                    { id: 'shipping', label: 'Shipping' },
                    { id: 'about-seller', label: 'About seller' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{ padding: '12px 20px', color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-light)', fontWeight: '500', borderBottom: `2px solid ${activeTab === tab.id ? 'var(--color-primary)' : 'transparent'}`, background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
                
                {activeTab === 'description' && (
                  <div>
                    <p style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
                      <tbody>
                        <tr><td style={{ padding: '10px', border: '1px solid var(--color-border)', backgroundColor: '#EFF2F4', width: '30%' }}>Model</td><td style={{ padding: '10px', border: '1px solid var(--color-border)' }}>#8786867</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid var(--color-border)', backgroundColor: '#EFF2F4' }}>Style</td><td style={{ padding: '10px', border: '1px solid var(--color-border)' }}>Classic style</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid var(--color-border)', backgroundColor: '#EFF2F4' }}>Certificate</td><td style={{ padding: '10px', border: '1px solid var(--color-border)' }}>ISO-898921212</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid var(--color-border)', backgroundColor: '#EFF2F4' }}>Size</td><td style={{ padding: '10px', border: '1px solid var(--color-border)' }}>34mm x 450mm x 19mm</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid var(--color-border)', backgroundColor: '#EFF2F4' }}>Memory</td><td style={{ padding: '10px', border: '1px solid var(--color-border)' }}>36GB RAM</td></tr>
                      </tbody>
                    </table>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#00b517" /> Some great feature name here</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#00b517" /> Lorem ipsum dolor sit amet, consectetur</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#00b517" /> Duis aute irure dolor in reprehenderit</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#00b517" /> Some great feature name here</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Product Info */}
              <div style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '20px' }}>
                <p style={{ color: 'var(--color-success)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px', marginTop: 0 }}>
                  <Check size={16} /> In stock
                </p>
                <h1 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-text-dark)', lineHeight: 1.4, margin: '8px 0' }}>
                  Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={15} fill={i < 4 ? "#FFD700" : "none"} color="#FFD700" />
                    ))}
                  </div>
                  <span style={{ color: 'var(--color-secondary)', fontWeight: '500' }}>9.3</span>
                  <span style={{ color: '#ddd' }}>•</span>
                  <MessageSquare size={16} />
                  <span>32 reviews</span>
                  <span style={{ color: '#ddd' }}>•</span>
                  <Package size={16} />
                  <span>154 sold</span>
                </div>
                <div style={{ backgroundColor: '#FFF0DF', borderRadius: '6px', display: 'flex', justifyContent: 'space-around', padding: '16px 0', marginBottom: '16px' }}>
                  <div style={{ textAlign: 'center', padding: '0 20px' }}>
                    <p style={{ color: 'var(--color-danger)', fontSize: '18px', fontWeight: '600', margin: '0 0 4px 0' }}>$98.00</p>
                    <p style={{ color: '#606060', fontSize: '13px', margin: 0 }}>50-100 pcs</p>
                  </div>
                  <div style={{ textAlign: 'center', padding: '0 20px', borderLeft: '1px solid #BDC1C8' }}>
                    <p style={{ color: 'var(--color-text-dark)', fontSize: '18px', fontWeight: '600', margin: '0 0 4px 0' }}>$90.00</p>
                    <p style={{ color: '#606060', fontSize: '13px', margin: 0 }}>100-700 pcs</p>
                  </div>
                  <div style={{ textAlign: 'center', padding: '0 20px', borderLeft: '1px solid #BDC1C8' }}>
                    <p style={{ color: 'var(--color-text-dark)', fontSize: '18px', fontWeight: '600', margin: '0 0 4px 0' }}>$78.00</p>
                    <p style={{ color: '#606060', fontSize: '13px', margin: 0 }}>700+ pcs</p>
                  </div>
                </div>
                <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
                    <dt style={{ color: 'var(--color-text-light)' }}>Price:</dt>
                    <dd style={{ margin: 0, color: 'var(--color-text-body)' }}>Negotiable</dd>
                  </div>
                  <hr style={{ border: 0, borderTop: '1px solid var(--color-border)', margin: '4px 0' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
                    <dt style={{ color: 'var(--color-text-light)' }}>Type:</dt>
                    <dd style={{ margin: 0, color: 'var(--color-text-body)' }}>Classic shoes</dd>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
                    <dt style={{ color: 'var(--color-text-light)' }}>Material:</dt>
                    <dd style={{ margin: 0, color: 'var(--color-text-body)' }}>Plastic material</dd>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
                    <dt style={{ color: 'var(--color-text-light)' }}>Design:</dt>
                    <dd style={{ margin: 0, color: 'var(--color-text-body)' }}>Modern nice</dd>
                  </div>
                  <hr style={{ border: 0, borderTop: '1px solid var(--color-border)', margin: '4px 0' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
                    <dt style={{ color: 'var(--color-text-light)' }}>Customization:</dt>
                    <dd style={{ margin: 0, color: 'var(--color-text-body)' }}>Customized logo and design custom packages</dd>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
                    <dt style={{ color: 'var(--color-text-light)' }}>Protection:</dt>
                    <dd style={{ margin: 0, color: 'var(--color-text-body)' }}>Refund Policy</dd>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
                    <dt style={{ color: 'var(--color-text-light)' }}>Warranty:</dt>
                    <dd style={{ margin: 0, color: 'var(--color-text-body)' }}>2 years full warranty</dd>
                  </div>
                </dl>
              </div>

              {/* Seller Card */}
              <div style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#c6f3f1', color: 'rgba(76, 167, 167, 0.6)', display: 'grid', placeItems: 'center', fontSize: '28px', fontWeight: '600' }}>
                    R
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: 'var(--color-text-dark)', margin: 0 }}>Guanjoi Trading LLC</p>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-light)', margin: 0 }}>Supplier</p>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: '12px 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '21px' }}>🇺🇸</span> Germany, Berlin
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} color="#00b517" /> Verified Seller
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Package size={16} /> Worldwide shipping
                  </li>
                </ul>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <button 
                    onClick={handleAddToCart}
                    style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding: '10px 16px', borderRadius: '6px', fontWeight: '500', fontSize: '16px', cursor: 'pointer', border: '1px solid transparent', textAlign: 'center', background: 'linear-gradient(180deg, #127fff 0%, #0067ff 100%)', color: 'var(--color-text-white)' }}
                  >
                    Add to cart
                  </button>
                  <a href="#" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding: '10px 16px', borderRadius: '6px', fontWeight: '500', fontSize: '16px', cursor: 'pointer', border: '1px solid var(--color-border)', textAlign: 'center', backgroundColor: 'var(--color-background-white)', color: 'var(--color-primary)' }}>
                    Seller's profile
                  </a>
                </div>
              </div>

              {/* Save for Later */}
              <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border)', borderRadius: '6px' }}>
                <Heart size={16} /> Save for later
              </a>

              {/* You May Like */}
              <div style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '20px' }}>
                <h3 style={{ marginTop: 0, fontSize: '16px', fontWeight: '600', color: 'var(--color-text-dark)' }}>You may like</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {youMayLike.map(item => (
                    <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain', border: '1px solid var(--color-border)', borderRadius: '6px' }} />
                      <div>
                        <p style={{ margin: '0 0 4px 0', fontSize: '16px', color: 'var(--color-text-dark)' }}>{item.title}</p>
                        <span style={{ fontSize: '16px', color: 'var(--color-text-light)' }}>${item.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-text-dark)', marginTop: 0, marginBottom: '20px' }}>Related products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '20px' }}>
              {relatedProducts.map(product => (
                <div key={product.id}>
                  <div style={{ backgroundColor: '#eeeeee', borderRadius: '6px', marginBottom: '12px', aspectRatio: '1 / 1', display: 'grid', placeItems: 'center', padding: '10px' }}>
                    <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 8px 0', color: 'var(--color-text-body)' }}>{product.title}</p>
                    <span style={{ color: 'var(--color-text-light)' }}>${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div style={{ backgroundColor: '#005ade', borderRadius: '8px', padding: '30px 40px', color: 'var(--color-text-white)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 8px 0' }}>Super discount on more than 100 USD</h2>
                <p style={{ margin: 0, opacity: 0.7 }}>Have you ever finally just write dummy info</p>
              </div>
              <a href="#" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding: '10px 16px', borderRadius: '6px', fontWeight: '500', fontSize: '16px', cursor: 'pointer', border: '1px solid transparent', textAlign: 'center', backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-white)' }}>
                Shop now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-background-white)', color: 'var(--color-text-body)' }}>
        <div style={{ padding: '40px 0' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr repeat(5, 1fr)', gap: '30px' }}>
            <div>
              <div style={{ marginBottom: '16px', width: '150px', height: '46px', position: 'relative' }}>
                <a href="#">
                  <Search size={32} color="#0D6EFD" style={{ position: 'absolute', left: '0', top: '0' }} />
                  <span style={{ position: 'absolute', left: '49px', top: '12px', fontSize: '24px', fontWeight: '700', color: '#1c1c1c' }}>Brand</span>
                </a>
              </div>
              <p style={{ lineHeight: 1.5, marginBottom: '16px' }}>Best information about the company gies here but now lorem ipsum is</p>
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

export default ProductDetails;