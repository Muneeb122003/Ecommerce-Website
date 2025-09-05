import React from 'react';
import { Search, Package, Truck, Shield } from 'lucide-react';

const services = [
  {
    title: 'Source from Industry Hubs',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    icon: <Search size={24} color="#0D6EFD" />
  },
  {
    title: 'Customize Your Products',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    icon: <Package size={24} color="#0D6EFD" />
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    icon: <Truck size={24} color="#0D6EFD" />
  },
  {
    title: 'Product monitoring and inspection',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    icon: <Shield size={24} color="#0D6EFD" />
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our extra services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div 
                className="service-card-img" 
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="service-card-icon">
                {service.icon}
              </div>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;