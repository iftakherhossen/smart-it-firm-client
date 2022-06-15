import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Folk = () => {
     const [team, setTeam] = useState([]);
     const handleDragStart = (e) => e.preventDefault();     

     useEffect(() => {
          fetch('https://smart-it-firm-server.herokuapp.com/team')
               .then(res => res.json())
               .then(data => setTeam(data));
     }, []);

     const items = team.map(({ _id, image }) => <img src={image} onDragStart={handleDragStart} role="presentation" alt="member" draggable="false" className="member" key={_id} />);

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