import React from 'react';
import { HERO_BACKGROUND_IMAGE } from '@/constants/index'; 

const Home: React.FC = () => {
  const heroStyle = {
    backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
  };

  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={heroStyle}
    >
      
      {/* Dark Overlay for improved text readability against the image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Text Content Block */}
      <div className="relative z-10 text-white text-center max-w-4xl">
        
        {/* Primary Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          Find your favorite place here!
        </h1>
        
        {/* Secondary Text */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md">
          The best prices for over 2 million properties worldwide.
        </p>
        
        {/* Optional: Add a call-to-action or search component here */}
      </div>
    </section>
  );
};

export default Home;