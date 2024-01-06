import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactCardFlip from 'react-card-flip';
gsap.registerPlugin(ScrollTrigger);
import "./Menu.css"

// Dummy data for menu sections
const menuData = [
  {
    title: 'Protein Shakes',
    items: [
      { name: 'Vanilla Caramel', price: '12 oz $5.50 | 20 oz $7.50', description: 'hello' },
      { name: 'Mocha', price: '20 oz $7.50', description: 'hello' },
      // ... add more items
    ],
  },
  {
    title: 'Fruit Smoothies',
    items: [
      { name: 'Tropical Paradise', price: '20 oz $5.99', description: 'hello' },
      // ... add more items
    ],
  },
  // ... your menu data
];

const Menu = () => {
  useEffect(() => {
    // Animate the navbar and hero section
    // gsap.from('.hero-logo', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
    // gsap.from('.hero-cta', { duration: 1, y: 100, opacity: 0, ease: 'bounce', delay: 0.5 });

    // Animate menu sections on scroll
    gsap.utils.toArray('.menu-section').forEach(section => {
      gsap.from(section, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to('.parallax-background', {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
      });
    });
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-100 text-white">
 <div className="hero-section relative min-h-80 flex flex-col justify-center items-center bg-white overflow-hidden">
  <div className="menuImg parallax-background absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'url(../src/assets/images/proteinJugs.jpg)' }}></div>
  <h1 className="hero-logo text-6xl font-bold text-black z-10 ">Underground Sports Nutrition</h1>
  <button className="hero-cta mt-5 bg-accent hover:bg-accent-hover text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 z-10 text-lg">
    View Menu
  </button>
</div>

      <div className="container mx-auto p-5">
        {menuData.map((section, index) => (
          <MenuSection key={index} section={section} />
        ))}
      </div>
     
    </div>
  );
};

const MenuSection = ({ section }) => {
  return (
    <div className="menu-section opacity-100 mb-12  ">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">{section.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};


const MenuItem = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div 
        className="p-6 rounded-lg shadow-lg transition-shadow duration-300 bg-[#a22727]"
        onClick={handleClick} // Change to onClick
      >
        <img src="../src/assets/images/proteinShake.webp" alt={item.name} className="rounded-t-lg h-40 w-full object-cover mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{item.name || "Item Name"}</h3>
        <p className="text-gray-200 mb-4">{item.description || "Item description"}</p>
        <p className="text-gray-200 font-semibold">{item.price || "$0.00"}</p>
      </div>
      <div 
        className="bg-gray-200 p-6 rounded-lg shadow-lg transition-shadow duration-300"
        onClick={handleClick} // Change to onClick
      >
        <h3 className="text-2xl font-semibold mb-2">{item.name} - Ingredients</h3>
        <p>Lorem ipsum dolor sit amet...</p>
        {/* Additional details or ingredients here */}
      </div>
    </ReactCardFlip>
  );
};

export default Menu;
