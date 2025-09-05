import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Inquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    item: '',
    details: '',
    quantity: '',
    unit: 'Pcs'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
    // Here you would handle the form submission
    alert('Inquiry sent successfully!');
    setFormData({ item: '', details: '', quantity: '', unit: 'Pcs' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="inquiry" className="inquiry-section">
      <div className="container inquiry-container">
        <div className="inquiry-content">
          <h2>An easy way to send requests to all suppliers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <h3>Send quote to suppliers</h3>
          <input 
            type="text" 
            name="item"
            placeholder="What item you need?"
            value={formData.item}
            onChange={handleInputChange}
            required
          />
          <textarea 
            name="details"
            placeholder="Type more details"
            value={formData.details}
            onChange={handleInputChange}
            required
          />
          <div className="form-row">
            <input 
              type="text" 
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
            <div className="custom-select">
              <span>{formData.unit}</span>
              <ChevronDown size={16} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Send inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default Inquiry;