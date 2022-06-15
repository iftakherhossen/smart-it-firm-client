import { Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const handleDragStart = (e) => e.preventDefault();

    useEffect(() => {
        fetch('https://smart-it-firm-server.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    const items = projects.map(({ _id, title, image }) => 
        <Tooltip title={title} arrow followCursor>
            <img src={image} onDragStart={handleDragStart} role="presentation" alt="thumbnail" className="thumbnail" key={_id} style={{ padding: '0 40px' }} />
        </Tooltip>
    );

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            infinite
            className="thumbnailWrapper"
        />
    );
};

export default Project;