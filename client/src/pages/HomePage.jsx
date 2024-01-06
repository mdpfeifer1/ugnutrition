import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { AiFillClockCircle, AiFillDollarCircle, AiFillPhone } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import Carousel1 from '../assets/images/undergroundsportslogo.jpg';
import Carousel2 from '../assets/images/undergroundsportslogo.webp';
import Carousel3 from '../assets/images/carousel-img3.webp';
import Cart from '../components/Cart';
import ProductItem from '../components/ProductItem';

const Main = () => {
  const icons = [<AiFillClockCircle />, <AiFillDollarCircle />, <AiFillPhone />, <FaTruckFast />];

  const descriptions = [
    'Around the clock updates on new tech',
    'Great Affordable Pricing',
    '24/7 Customer Support',
    'Fast and secure Shipping',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Cart />
      {/* Animated Carousel Section */}
      <motion.section className="bg-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="container mx-auto flex items-center justify-center h-[320px] relative">
          <Slider {...sliderSettings} className="w-full max-w-[900px]">
            {[Carousel1, Carousel2, Carousel3].map((carouselImg, index) => (
              <div key={index} className="relative">
                <img className="max-h-[300px] w-full object-cover" src={carouselImg} alt={`Special Item ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center">
          <motion.button
            className="flex mx-auto mb-20 bg-[#7A2525] p-3 rounded-xl text-white hover:text-lg"
            whileHover={{ scale: 1.1 }}
          >
            <h2>Browse our Shop!</h2>
          </motion.button>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mt-5">
          <div className="lg:col-span-1">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4"> Elevate Gains with Underground Nutrition! </h2>
              <p className="text-gray-800 mb-4">
                Fuel your fitness journey with power-packed nutrition – where strength meets flavor, excellence begins, and
                results shine!
              </p>

              <motion.button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#7A2525] hover:text-white"
                whileHover={{ scale: 1.1 }}
              >
                <a href='/ProductsPage'>Explore</a>
              </motion.button>
            </div>
          </div>

          {/* Right section for 2 staggered photos */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-3">
            <motion.div
              className="animate__animated animate__fadeIn"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <img className="w-full h-auto object-cover rounded-xl" src="../src/assets/images/undergroundsportslogo.webp" alt="First Staggered Image" />
            </motion.div>
            <motion.div
              className="animate__animated animate__fadeIn animate__delay-1s"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <img className="w-full h-auto object-cover rounded-xl" src="../src/assets/images/undergroundsportslogo.webp" alt="Second Staggered Image" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          {/* Left section with image */}
          <div className="lg:w-1/2 lg:pr-8 mb-8">
            <img
              className="w-full h-auto object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Section Image"
            />
          </div>

          {/* Right section with Why Choose Us content */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-800 mb-4 font-semibold">
              Choose us for unmatched quality, reliability, and a seamless experience.
            </p>

            {/* Icons and Descriptions */}
            <div className="flex flex-wrap ml-6">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="bg-white p-4 mb-5 mr-5 rounded-md h-40 w-48 flex flex-col items-center justify-center shadow-2xl"
                >
                  {icons[index - 1]}
                  <p className="text-gray-700 mt-2 text-center">{descriptions[index - 1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <div className="bg-[--Navy] py-8 animate__animated animate__fadeIn">
        <div className="container mx-auto flex justify-center">
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaGithub />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;


