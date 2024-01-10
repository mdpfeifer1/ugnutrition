import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import "./Menu.css"

// Dummy data for menu sections
const menuData = [
  {
    title: 'Protein Shakes',
    items: [
      {
        name: 'Peppermint Pattie',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Chocolate Whey, Chocolate, Mint, Get Lean, Oreos, Mint Topping (opt.)'
      },
      {
        name: 'Triple Chocolate Brownie',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Vanilla Whey, Chocolate, Vanilla, Chia seeds'
      },
      {
        name: 'Chocolate Wasted',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Chocolate Whey, Chocolate, Chocolate Chips'
      },
      {
        name: 'PBC',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Chocolate Whey, Chocolate, Peanut Butter, Reeses Topping (opt.)'
      },
      {
        name: 'Get Gainzz',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Chocolate/Vanilla Mass Gainer, Banana, Oats, Peanut Butter'
      },
      {
        name: 'Funky Monkey',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Chocolate Whey, Chocolate, Banana, Peanut Butter'
      },
      {
        name: 'The Go Juice',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Vanilla Whey, Truly Latte, Espresso Beans, Get Energized'
      },
      {
        name: 'Cinnamon Bun',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Vanilla Whey, Vanilla Cream, Flaxseed Oil, Cinnamon'
      },
      {
        name: 'Nuts And Bolts',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Vanilla Whey, Salted Caramel, PB Lite, Almond Extract'
      },
      {
        name: 'Cookie Monster',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Vanilla Whey, Vanilla Cream, Oreos, Oreo Topping (opt.)'
      },
      {
        name: 'Regular Joe',
        price: '12 oz $5.50 | 20 oz $7.50',
        description: 'Almond Milk, Vanilla Whey, Vanilla Cream, Banana, Flaxseed Oil, Get Regular'
      },
    ],
  },
  {
    title: 'Fruit Smoothies',
    items: [
      {
        name: 'Bikini Bottom',
        price: '12 oz $4.99 | 20 oz $6.99',
        description: 'Pineapple Puree, Vanilla Whey, Banana, Pineapple, Coconut'
      },
      {
        name: 'Strawberry Mist',
        price: '12 oz $4.99 | 20 oz $6.99',
        description: 'Strawberry Puree, Vanilla Whey, Banana, Strawberry'
      },
      {
        name: 'Slam Berry',
        price: '12 oz $4.99 | 20 oz $6.99',
        description: 'Four Berry Puree, Vanilla Whey, Banana, Strawberry, Blueberry'
      },
      {
        name: 'The Green Giant',
        price: '12 oz $4.99 | 20 oz $6.99',
        description: 'Pineapple Puree, Vanilla Whey, Banana, Spinach, Kale'
      },
      {
        name: 'Underground Crush',
        price: '12 oz $4.99 | 20 oz $6.99',
        description: 'Mango Puree, Vanilla Whey, Banana, Strawberry, Pineapple'
      }
      // ... add more items
    ],
  },
  {

    title: 'Acai Bowls',
    items: [
      {
        name: 'Underground Bowl',
        price: '$9.50',
        description: 'GenePro, Granola (on top/mixed in), Banana, Strawberries, Nutella'
      },
      {
        name: 'The Patriot',
        price: '$9.50',
        description: 'Granola, Banana, Strawberries, Blueberries, Coconut'
      },
      {
        name: 'Pineapple Express',
        price: '$9.50',
        description: 'Granola, Pineapple, Strawberries, Kiwi'
      },
      {
        name: 'The Big Mike',
        price: '$9.50',
        description: 'Granola, Banana, Blueberries, Peanut Butter, Nutella'
      }
    ],
  },
  {
    title: 'Energy Bombs',
    items: [
      {
        name: 'Flavors',
        price: '12 oz $5.99 | 32 oz $6.99',
        description: 'Peach Mango, Strawberry Lemonade, Cherry Limeade, Blue Razz, Tropical Lime, Candy Grape.'
      },

      // ... continue with other Energy Bombs flavors
    ],
  },
  {
    title: 'Add Ins',
    items: [
      {
        name: 'Get More From Your Gains!',
        price: '$1.50',
        description: 'Get Regular, Get Energized, Get Lean,  Creatine, Glutamine, Protein, Fruit, Nutella, Peanut Butter, Collagen'
          },

      // ... continue with other Energy Bombs flavors
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
        yPercent: -30,
        ease: 'power1',
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

    <div className="min-h-screen bg-white text-white">
      <div className="hero-section relative min-h-80 flex flex-col justify-center items-center bg-white overflow-hidden">
        <div className="menuImg parallax-background absolute top-0 left-0 w-full h-full z-10" style={{ backgroundImage: 'url(../src/assets/images/acaiBowl.jpg)' }}></div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black z-10 text-center font-sedgwick mb-5">Underground Sports Nutrition</h1>

        <a
          href="../src/assets/images/MenuFull.pdf" // URL to your online PDF file
          download="UndergroundSportsNutritionMenu.pdf" // Suggested name for the downloaded file
          className="hero-cta mt-5 bg-accent hover:bg-accent-hover  py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 z-10  bg-white border border-gray-500 text-lg md:text-xl lg:text-xl xl:text-xl font-bold text-black"
        >
          Download Menu
        </a>

        <div className="arrow-container absolute bottom-0 mb-4 flex flex-col justify-center items-center w-full">

          <img src="../src/assets/images/arrow.jpg" alt="Scroll Down" className="arrow bounce z-8" />
        </div>

      </div>

      <div className="  py-5 border-b-4 border-white">
        {menuData.map((section, index) => (
          <MenuSection key={index} section={section} />
        ))}
      </div>

    </div>
  );
};

const MenuSection = ({ section }) => {
  return (
    <div className="menu-section mb-12 p-2">
      <h2 className="text-4xl pt-1 font-bold text-center mb-4 bg-[#d22d2d] text-white font-sedgwick">{section.title}</h2>
      <p className="text-2xl text-center mb-2 text-black">{section.items[0].price}</p>
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};






const MenuItem = ({ item }) => {
  // Set a minimum height for uniformity
  const minHeight = 'h-24'; // Example minimum height, adjust as needed
  const minWidth = 'w-48';
  return (
    <div className={` rounded-lg p-4 bg-white text-center hover:shadow-lg transition-shadow duration-300 mb-4 ${minHeight, minWidth} overflow-auto hover:-translate-y-1`}>
      <h3 className="text-xl font-semibold text-[#a22727] ">{item.name}</h3>
      <p className="text-black font-semibold">{item.description}</p>
    </div>
  );
};





export default Menu;
