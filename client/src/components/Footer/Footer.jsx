import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../../pages/Menu.css'; 
const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and About */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Underground Sports Nutrition</h4>
            <p className="text-gray-400">Dedicated to providing the best in sports nutrition and fitness.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-gray-200">Home</a></li>
              <li><a href="/ProductsPage" className="text-gray-400 hover:text-gray-200">Shop</a></li>
              <li><a href="/Menu" className="text-gray-400 hover:text-gray-200">Menu</a></li>
              <li><a href="/ProductsPage" className="text-gray-400 hover:text-gray-200">In Store Only</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-2">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
            <form>
              <input type="email" placeholder="Email Address" className="p-2 text-black mb-2" />
              <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-black p-2">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center py-6 mt-10">
          <p>&copy; {new Date().getFullYear()} Underground Sports Nutrition. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  