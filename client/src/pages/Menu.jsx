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
          name: 'Peach Mango',
          price: '12 oz $5.99 | 32 oz $6.99',
          description: 'Energy bomb flavor'
        },
        {
          name: 'Strawberry Lemonade',
          price: '12 oz $5.99 | 32 oz $6.99',
          description: 'Energy bomb flavor'
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
  <div className="menuImg parallax-background absolute top-0 left-0 w-full h-full z-10" style={{ backgroundImage: 'url(../src/assets/images/proteinBg.webp)' }}></div>
  <h1 className="hero-logo text-6xl font-bold text-black z-10 ">Underground Sports Nutrition</h1>
  <a
  href="../src/assets/images/MenuFull.pdf" // URL to your online PDF file
  download="UndergroundSportsNutritionMenu.pdf" // Suggested name for the downloaded file
  className="hero-cta mt-5 bg-accent hover:bg-accent-hover text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 z-10 text-2xl"
>
  Download Menu
</a>

<div className="arrow-container absolute bottom-0 mb-4 flex flex-col justify-center items-center w-full">
  <p className="text-black font-bold text-xl mb-6">Click the Pictures for more information!</p> {/* Add your text here */}
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
    <div className="menu-section mb-12 ">
      <h2 className="text-4xl font-bold text-center mb-4  bg-[#a22727] text-white">{section.title}</h2>
      <p className="text-2xl text-center mb-8 text-black">{section.items[0].price}</p> 
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};





const MenuItem = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardHeight = 'h-64'; // Example fixed height for uniformity
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Adjust the width for each card so that there are three per row, and allow for automatic margins
  const cardWidth = 'md:w-1/4'; // This ensures that each card takes up one-third of the width of the container

  return (
    <div className={`${cardWidth} px-2 mb-6`}> {/* px-2 for gutter spacing, mb-6 for margin bottom */}
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{ width: '100%', height: '100%' }}>
        <div className={`card-front relative cursor-pointer flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden ${cardHeight}`} onClick={handleClick}>
          <img src={item.image || "../src/assets/images/proteinShake.webp"} alt={item.name} className="w-full object-cover" style={{ height: '60%' }} />
          <div className="p-4 bg-white">
            <h3 className="text-2xl font-semibold text-center mb-5 text-black">{item.name}</h3>
          </div>
        </div>
        <div className={`card-back p-4 bg-[#a22727] rounded-lg shadow-lg text-white flex flex-col justify-between ${cardHeight}`} onClick={handleClick}>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{item.name} - Ingredients</h3>
            <p>{item.description}</p> {/* Now holds the ingredients */}
          </div>
          <div className="text-center mt-4">
         
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};



export default Menu;
