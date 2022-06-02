import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';

const Folk = () => {
     const handleDragStart = (e) => e.preventDefault();
    
     const items = [
          <img src="https://i.ibb.co/5KYzqJw/male-1.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/tZNM8B0/female-1.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/hfhBPGR/male-8.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/TLBJxLL/male-6.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/9sL4Xd9/male-7.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/5L5Jphq/male-10.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/M2ckq0b/female-4.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/M5Q3SZT/male-16.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/KKPJrFB/male-3.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />,
          <img src="https://i.ibb.co/P54sXnQ/male-14.png" onDragStart={handleDragStart} role="presentation" alt="member" className="member" />
     ];

     const responsive = {
          0: { items: 1 },
          568: { items: 3 },
          1024: { items: 6 },
     };

     return (
          <AliceCarousel
               mouseTracking
               items={items}
               responsive={responsive}
               infinite
          />
     );
};

export default Folk;