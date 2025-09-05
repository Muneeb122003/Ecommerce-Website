import React from 'react';
import { useCart } from '../context/CartContext';

interface Category {
  name: string;
  price: string;
  image: string;
}

interface CategoryBlockProps {
  id: string;
  title: string;
  backgroundImage: string;
  categories: Category[];
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({ id, title, backgroundImage, categories }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (category: Category, index: number) => {
    const priceMatch = category.price.match(/\d+/);
    const price = priceMatch ? parseFloat(priceMatch[0]) : 19;
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${id}-${index}`,
        title: category.name,
        price: price,
        image: category.image,
      }
    });
  };

  return (
    <section id={id} style={{ padding: '20px 0' }}>
      <div className="container" style={{
        display: 'flex',
        border: '1px solid var(--gray-300)',
        borderRadius: '6px',
        overflow: 'hidden',
        backgroundColor: '#F5F5F5',
      }}>
        <div style={{
          position: 'relative',
          flex: '0 0 280px',
          padding: '20px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              lineHeight: '1.3',
              margin: '0 0 18px 0',
              maxWidth: '150px',
            }}>{title}</h3>
            <a
              href="#"
              className="btn btn-light"
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
              }}
            >
              Source now
            </a>
          </div>
        </div>

        <div style={{
          flexGrow: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          backgroundColor: 'var(--white)',
        }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleAddToCart(category, index)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                border: 'none',
                borderLeft: (index % 4 === 0) ? 'none' : '1px solid var(--gray-300)',
                borderBottom: (index < 4) ? '1px solid var(--gray-300)' : 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gray-200)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <h4 style={{
                  margin: '0 0 5px 0',
                  fontSize: '16px',
                  fontWeight: '400',
                }}>{category.name}</h4>
                <p style={{
                  margin: '0',
                  fontSize: '13px',
                  color: 'var(--gray-500)',
                  lineHeight: '1.2',
                }}>From <br />{category.price}</p>
              </div>
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '82px',
                  height: '82px',
                  objectFit: 'contain',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBlock;