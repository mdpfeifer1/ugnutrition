import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/images/undergroundsportslogo.webp'
import { useStoreContext } from '../utils/GlobalState';
import { TOGGLE_CART } from '../utils/actions';
function NavTabs() {
  const currentPage = useLocation().pathname;
  const [state, dispatch] = useStoreContext();
  return (
    <section className="bg-[#000000] flex justify-between items-center text-white border-b-4">
      <div className="logo">
        <img className='max-h-[100px] max-w-[200px]' src={Logo} alt="Tech-E" />
      </div>

      <ul className="flex items-center space-x-12 mr-5">
        <li className="nav-item">
          <Link
            to="/"
            className={`hover:text-gray-300 ${currentPage === '/' ? 'font-bold' : ''}`}
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductsPage"
            className={`hover:text-gray-300 ${currentPage === '/ProductsPage' ? 'font-bold' : ''}`}
          >
            Shop
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductsPage"
            className={`hover:text-gray-300 ${currentPage === '/ProductsPage' ? 'font-bold' : ''}`}
          >
            Menu
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductsPage"
            className={`hover:text-gray-300 ${currentPage === '/ProductsPage' ? 'font-bold' : ''}`}
          >
            In Store Only
          </Link>
        </li>


        <li className="nav-item">
          {/* {loggedIn ? (
            <button onClick={logout} className='hover:text-gray-300'>
              Logout
            </button>
          ) : ( */}
            <Link
              to="/Login"
              className={`hover:text-gray-300 ${currentPage === '/Login' ? 'font-bold' : ''}`}
            >
              Login/Sign Up
            </Link>
          {/* )} */}
        </li>

        <li className="nav-item mt-1">
          <Link
           
            className={`hover:text-gray-300 ${currentPage === '/Checkout' ? 'font-bold' : ''} flex items-center`}
          >

            <FaShoppingCart  onClick={() => {
              console.log('you clicked me');
              dispatch({ type: TOGGLE_CART });
            }} className="text-2xl" /> {/* Adjust the size with text-2xl or other utility classes */}

          </Link>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;