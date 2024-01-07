import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useStoreContext } from '../../utils/GlobalState';
import mainLogo from '../../assets/images/UgLogo.png';
import Jaw from '../../assets/images/Mouth.png';
import Barbell from '../../assets/images/Barbell.png';
import { gsap } from 'gsap';
import './Nav.css';

function NavTabs() {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const [state, dispatch] = useStoreContext();

  const navigateToCart = () => {
    navigate('/Cart');
  };

  useEffect(() => {
    // Animate the jaw
    
    gsap.to("#logoJaw", {
      y: 9,
      duration: .5,
      repeat: 0,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animate the barbell
    gsap.from("#logoBarbell", {
      y: -40,
      duration: 1,
      ease: "bounce.out"
    });

    // Cart button animation
    gsap.from(".nav-item button", {
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="bg-[#000000] flex justify-between items-center text-white px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="logo flex-shrink-0">
        <img id="mainLogo" className='max-h-[100px] max-w-[200px]' src={mainLogo} alt="Main Logo" />
        <img id="logoJaw" className='logo-jaw' src={Jaw} alt="Jaw" />
        <img id="logoBarbell" className='logo-barbell' src={Barbell} alt="Barbell" />
      </div>

      <ul className="flex items-center justify-center flex-grow space-x-4 md:space-x-6 lg:space-x-12 lg:justify-end">
        <li className="nav-item">
          <Link to="/" className={`hover:text-gray-300 ${currentPage === '/' ? 'font-bold' : ''}`}>Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/ProductsPage" className={`hover:text-gray-300 ${currentPage === '/ProductsPage' ? 'font-bold' : ''}`}>Shop</Link>
        </li>

        <li className="nav-item">
          <Link to="/Menu" className={`hover:text-gray-300 ${currentPage === '/Menu' ? 'font-bold' : ''}`}>Menu</Link>
        </li>

        <li className="nav-item">
          <Link to="/ProductsPage" className={`hover:text-gray-300 ${currentPage === '/ProductsPage' ? 'font-bold' : 'text-white'}`}>In Store Only</Link>
        </li>

        <li className="nav-item mt-1 pr-5">
          <button
            onClick={navigateToCart}
            className="bg-[#a22727] p-2 rounded-lg px-9 flex items-center justify-center hover:text-black hover:bg-white transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaShoppingCart className="mr-2" />
            Cart
          </button>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;
