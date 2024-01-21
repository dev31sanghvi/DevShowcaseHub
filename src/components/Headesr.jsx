
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black p-4 flex items-center justify-between">
      {/* Logo (Centered) */}
      <div className="text-white text-lg font-bold mx-auto">DevShowcaseHub</div>


      {/* Event Calendar Button (Right) */}
      <a
        href="#event-calendar"
        className="text-white hover:text-gray-200 transition duration-300"
      >
        Event Calender
      </a>
    </header>
  );
};

export default Header;
