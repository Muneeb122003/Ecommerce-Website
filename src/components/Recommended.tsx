import React from 'react';
import { useCart } from '../context/CartContext';

const recommendedProducts = [
  { id: 'rec-1', title: 'T-shirts with multiple colors, for men', price: 10.30, image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' },
  { id: 'rec-2', title: 'Jeans shorts for men blue color', price: 10.30, image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg' },
  { id: 'rec-3', title: 'Brown winter coat medium size', price: 12.50, image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg' },
  { id: 'rec-4', title: 'Jeans bag for travel for men', price: 34.00, image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg' },
  { id: 'rec-5', title: 'Leather wallet', price: 99.00, image: 'https://images.pexels.com/photos/6533315/pexels-photo-6533315.jpeg' },
  { id: 'rec-6', title: 'Canon camera black, 100x zoom', price: 9.99, image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' },
  { id: 'rec-7', title: 'Headset for gaming with mic', price: 8.99, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
  { id: 'rec-8', title: 'Smartwatch silver color modern', price: 10.30, image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { id: 'rec-9', title: 'Blue wallet for men leather material', price: 10.30, image: 'https://images.pexels.com/photos/6533315/pexels-photo-6533315.jpeg' },
  { id: 'rec-10', title: 'Jeans bag for travel for men', price: 80.95, image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg' },
];

const Recommended: React.FC = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: typeof recommendedProducts[0]) => {
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

  return (
    <section id="recommended" className="recommended-section">
      <div className="container">
        <h2 className="section-title">Recommended items</h2>
        <div className="recommended-grid">
          {recommendedProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleAddToCart(product)}
            >
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="title">{product.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;