import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Successfully subscribed to newsletter!');
    setEmail('');
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container newsletter-container">
        <h2>Subscribe on our newsletter</h2>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="email-input-wrapper">
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;