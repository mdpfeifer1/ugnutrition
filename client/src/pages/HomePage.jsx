import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaStar } from 'react-icons/fa';
import { AiFillClockCircle, AiFillDollarCircle, AiFillPhone } from 'react-icons/ai';
import { FaTruckFast } from 'react-icons/fa6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cart from '../components/Cart';

import Carousel1 from '../assets/images/undergroundsportslogo.jpg';
import Carousel2 from '../assets/images/undergroundsportslogo.webp';
import Carousel3 from '../assets/images/carousel-img3.webp';

const Main = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2, ease: 'easeInOut' }
  };

  const scaleUp = {
    initial: { scale: 0.9 },
    animate: { scale: 1 },
    transition: { duration: 1, ease: 'backOut' }
  };

  const rotate = {
    initial: { rotate: -10 },
    animate: { rotate: 0 },
    transition: { duration: 2, ease: 'easeOut' }
  };

  const hoverBounce = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 1 } }
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Cart />

      {/* Hero Section with Carousel */}
      <motion.div className="overflow-hidden" variants={fadeIn} initial="initial" animate="animate">
        <Slider {...sliderSettings}>
          <div className="carousel-item h-64 flex justify-center items-center bg-gray-200">
            <img src={Carousel1} alt="Elevate Your Workout" className="object-contain max-h-full mx-auto" />
          </div>
          <div className="carousel-item h-64 flex justify-center items-center bg-gray-200">
            <img src={Carousel2} alt="Reach New Heights" className="object-contain max-h-full mx-auto" />
          </div>
          <div className="carousel-item h-64 flex justify-center items-center bg-gray-200">
            <img src={Carousel3} alt="Premium Nutrition" className="object-contain max-h-full mx-auto" />
          </div>
        </Slider>
      </motion.div>

      {/* Unique Selling Proposition */}
      <motion.div className="text-center my-16 px-4" variants={scaleUp} initial="initial" animate="animate">
        <h2 className="text-4xl font-bold mb-4">Unlock Your Potential</h2>
        <p className="text-lg mb-8">Step into a world of elite fitness where our supplements give you the edge you need to succeed.</p>
        <motion.a href="/ProductsPage" className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg" variants={buttonVariants} whileHover="hover">Discover Our Products</motion.a>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div className="py-16 bg-white text-center" variants={rotate} initial="initial" animate="animate">
        {/* Features */}
        <motion.div className="py-16 bg-white text-center" variants={rotate} initial="initial" animate="animate">
        <h2 className="text-4xl font-bold mb-8">Why Choose Underground Sports Nutrition</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="feature" variants={fadeIn}>
            <AiFillClockCircle size="3em" />
            <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
            <p>Our team is available around the clock to ensure your queries are handled with care and efficiency.</p>
          </motion.div>
          <motion.div className="feature" variants={fadeIn}>
            <AiFillDollarCircle size="3em" />
            <h3 className="text-lg font-semibold mt-4">Affordable Prices</h3>
            <p>Get the best value for your money with our competitively priced, high-quality supplements.</p>
          </motion.div>
          <motion.div className="feature" variants={fadeIn}>
            <AiFillPhone size="3em" />
            <h3 className="text-lg font-semibold mt-4">Expert Advice</h3>
            <p>Speak directly with our fitness and nutrition experts to tailor your supplement plan.</p>
          </motion.div>
          <motion.div className="feature" variants={fadeIn}>
            <FaTruckFast size="3em" />
            <h3 className="text-lg font-semibold mt-4">Fast Shipping</h3>
            <p>Enjoy swift and reliable delivery to your doorstep, no matter where you are.</p>
          </motion.div>
        </div>
      </motion.div>
        
      </motion.div>

      {/* Testimonials */}
      <motion.div className="py-16 bg-[#f7f7f7]" variants={fadeIn}>
        {/* Testimonials */}
        <motion.div className="py-16 bg-[#f7f7f7]" variants={fadeIn}>
        <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sample Testimonials */}
          <motion.div className="testimonial p-4" variants={hoverBounce}>
            <FaStar className="text-yellow-500" />
            <p className="italic">"The quality of supplements is unmatched. I've seen incredible results!"</p>
            <span>- Alex Smith</span>
          </motion.div>
          <motion.div className="testimonial p-4" variants={hoverBounce}>
            <FaStar className="text-yellow-500" />
            <p className="italic">"Their customer service is exceptional. Really felt like they cared."</p>
            <span>- Jessica Taylor</span>
          </motion.div>
          <motion.div className="testimonial p-4" variants={hoverBounce}>
            <FaStar className="text-yellow-500" />
            <p className="italic">"Fast delivery and amazing product range. Highly recommend!"</p>
            <span>- David Brown</span>
          </motion.div>
        </div>
      </motion.div>
      </motion.div>

      {/* Blog Section */}
      <motion.div className="py-16 bg-white" variants={fadeIn}>
        {/* Blog Posts */}
        <motion.div className="py-16 bg-white" variants={fadeIn}>
        <h2 className="text-4xl font-bold text-center mb-8">Latest From Our Blog</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="blog-post p-4" variants={hoverBounce}>
            <img src={Carousel1} alt="Blog Post 1" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-lg font-semibold">Top 5 Supplements for Muscle Growth</h3>
            <p>Discover the most effective supplements to boost your muscle growth and workout recovery.</p>
          </motion.div>
          <motion.div className="blog-post p-4" variants={hoverBounce}>
            <img src={Carousel2} alt="Blog Post 2" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-lg font-semibold">Nutrition Tips for Cutting Season</h3>
            <p>Learn how to maintain muscle while cutting fat with our expert nutrition tips.</p>
          </motion.div>
          <motion.div className="blog-post p-4" variants={hoverBounce}>
            <img src={Carousel3} alt="Blog Post 3" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-lg font-semibold">The Benefits of Pre-Workout Supplements</h3>
            <p>Find out how the right pre-workout can enhance your performance and focus in the gym.</p>
          </motion.div>
        </div>
      </motion.div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div className="bg-[#7A2525] text-white py-16 flex flex-col items-center justify-center" variants={scaleUp}>
        <h2 className="text-3xl font-bold mb-6">Ready to Transform?</h2>
        <p className="mb-6">Join our community and start your transformation today.</p>
        <motion.a href="/SignUp" className="inline-block bg-white text-[#7A2525] px-8 py-3 rounded-lg text-lg font-semibold shadow-lg" variants={buttonVariants} whileHover="hover">Get Started</motion.a>
      </motion.div>

      {/* Social Media Links */}
      <motion.div className="py-8 bg-black" variants={fadeIn}>
        <div className="container mx-auto flex justify-center">
          {[FaInstagram, FaFacebook, FaGithub, FaLinkedin].map((Icon, index) => (
            <motion.a key={index} href="#" className="text-2xl mx-4 text-white hover:text-gray-300" variants={hoverBounce}>
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Main;

