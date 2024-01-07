import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import yourImage from '../assets/images/blackbgUG.webp'; // Import your hero image
import { Link } from 'react-router-dom';
const Main = () => {
  const heroRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.timeline()
      .to(heroRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      })
      .from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative text-white flex flex-col justify-center items-center opacity-0"
      style={{
        backgroundImage: `url(${yourImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="z-10 p-5 text-center" ref={textRef}>
        <h1 className="text-5xl font-bold mb-4">UNDERGROUND SPORTS NUTRITION</h1>
        <p className="text-xl mb-8">Premium supplements for athletes and bodybuilders</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  <Link to="/ProductsPage" className="block text-center text-white no-underline">
    Shop Now
  </Link>
</button>
      </div>
    </div>
  );
};

export default Main;


