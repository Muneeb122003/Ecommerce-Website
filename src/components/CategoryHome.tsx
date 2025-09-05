import React from 'react';
import CategoryBlock from './CategoryBlock';

const homeCategories = [
  { name: 'Soft chairs', price: 'USD 19', image: 'https://images.pexels.com/photos/586848/pexels-photo-586848.jpeg' },
  { name: 'Sofa & chair', price: 'USD 19', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg' },
  { name: 'Kitchen dishes', price: 'USD 19', image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg' },
  { name: 'Smart watches', price: 'USD 19', image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { name: 'Kitchen mixer', price: 'USD 100', image: 'https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg' },
  { name: 'Blenders', price: 'USD 39', image: 'https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg' },
  { name: 'Home appliance', price: 'USD 19', image: 'https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg' },
  { name: 'Coffee maker', price: 'USD 10', image: 'https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg' },
];

const CategoryHome: React.FC = () => {
  return (
    <CategoryBlock
      id="category-home"
      title="Home and outdoor"
      backgroundImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
      categories={homeCategories}
    />
  );
};

export default CategoryHome;