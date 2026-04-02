import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  ArrowUp,
  ChevronRight
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="trip">Trip</span>
            <span className="to-india">ToIndia</span>
          </div>
          <p className="brand-desc">
            Discover the incredible diversity of India with our comprehensive travel guides, itineraries, and booking services.
          </p>
          <div className="social-links">
            <div className="social-icon"><Facebook size={18} /></div>
            <div className="social-icon"><Instagram size={18} /></div>
            <div className="social-icon"><Twitter size={18} /></div>
            <div className="social-icon"><Youtube size={18} /></div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#" className="footer-link"><ChevronRight size={14} /> About Us</a></li>
            <li><a href="#" className="footer-link"><ChevronRight size={14} /> Destinations</a></li>
            <li><a href="#" className="footer-link"><ChevronRight size={14} /> Itineraries</a></li>
            <li><a href="#" className="footer-link"><ChevronRight size={14} /> Festivals</a></li>
            <li><a href="#" className="footer-link"><ChevronRight size={14} /> Experiences</a></li>
            <li><a href="#" className="footer-link"><ChevronRight size={14} /> Cuisine</a></li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-item">
            <MapPin className="contact-icon" size={20} />
            <p className="contact-text">123 Travel Street, New Delhi, 110001</p>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={20} />
            <p className="contact-text">+91 98765 43210</p>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={20} />
            <p className="contact-text">info@triptoindia.com</p>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="footer-newsletter">
          <h4 className="footer-title">Newsletter</h4>
          <p className="newsletter-desc">Subscribe to our newsletter for the latest travel updates and offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email" className="newsletter-input" />
            <button className="newsletter-submit">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">© 2024 TripToIndia. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
