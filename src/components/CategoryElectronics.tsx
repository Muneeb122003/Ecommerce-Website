import React from 'react';
import CategoryBlock from './CategoryBlock';

const electronicsCategories = [
  { name: 'Smart watches', price: 'USD 90', image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { name: 'Cameras', price: 'USD 89', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' },
  { name: 'Headphones', price: 'USD 10', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
  { name: 'Smart watches', price: 'USD 19', image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { name: 'Gaming set', price: 'USD 35', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
  { name: 'Laptops & PC', price: 'USD 340', image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg' },
  { name: 'Smartphones', price: 'USD 19', image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg' },
  { name: 'Electric kettle', price: 'USD 240', image: 'https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg' },
];

const CategoryElectronics: React.FC = () => {
  return (
    <CategoryBlock
      id="category-electronics"
      title="Consumer electronics and gadgets"
      backgroundImage="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
      categories={electronicsCategories}
    />
  );
};

export default CategoryElectronics;