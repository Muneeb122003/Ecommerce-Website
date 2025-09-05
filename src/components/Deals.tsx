import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const dealItems = [
  { 
    id: 'deal-1', 
    title: 'Smart watches', 
    discount: '25%', 
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
    price: 75
  },
  { 
    id: 'deal-2', 
    title: 'Laptops', 
    discount: '15%', 
    image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg',
    price: 850
  },
  { 
    id: 'deal-3', 
    title: 'GoPro cameras', 
    discount: '40%', 
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    price: 300
  },
  { 
    id: 'deal-4', 
    title: 'Headphones', 
    discount: '25%', 
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    price: 120
  },
  { 
    id: 'deal-5', 
    title: 'Canon cameras', 
    discount: '25%', 
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    price: 450
  },
];

const Deals: React.FC = () => {
  const { dispatch } = useCart();
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (item: typeof dealItems[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      }
    });
  };

  return (
    <section id="deals" className="deals-section">
      <div className="container deals-container">
        <div className="deals-header">
          <div>
            <h3 className="deals-title">Deals and offers</h3>
            <p className="deals-subtitle">Hygiene equipments</p>
          </div>
          <div className="countdown">
            {[
              { value: String(timeLeft.days).padStart(2, '0'), label: 'Days' },
              { value: String(timeLeft.hours).padStart(2, '0'), label: 'Hour' },
              { value: String(timeLeft.minutes).padStart(2, '0'), label: 'Min' },
              { value: String(timeLeft.seconds).padStart(2, '0'), label: 'Sec' }
            ].map((item, index) => (
              <div key={index} className="countdown-item">
                <span>{item.value}</span>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="deals-grid">
          {dealItems.map((item) => (
            <div 
              key={item.id} 
              className="deal-item"
              onClick={() => handleAddToCart(item)}
            >
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <span className="discount-badge">-{item.discount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;