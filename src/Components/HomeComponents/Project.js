import { Tooltip } from '@mui/material';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Project = () => {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <Tooltip title="Our Best Projects" arrow followCursor>
            <img src="https://i.ibb.co/rFb6sMx/carousel-1.png" onDragStart={handleDragStart} role="presentation" alt="thumbnail" className="thumbnail" />
        </Tooltip>,
        <Tooltip title="Our Best Projects" arrow followCursor>
            <img src="https://i.ibb.co/6FthxdG/carousel-2.png" onDragStart={handleDragStart} role="presentation" alt="thumbnail" className="thumbnail"  />
        </Tooltip>,
        <Tooltip title="Our Best Projects" arrow followCursor>
            <img src="https://i.ibb.co/jLTPpc4/carousel-3.png" onDragStart={handleDragStart} role="presentation" alt="thumbnail" className="thumbnail" />
        </Tooltip>,
        <Tooltip title="Our Best Projects" arrow followCursor>
            <img src="https://i.ibb.co/X8PFk7P/carousel-4.png" onDragStart={handleDragStart} role="presentation" alt="thumbnail" className="thumbnail" />
        </Tooltip>,
        <Tooltip title="Our Best Projects" arrow followCursor>
            <img src="https://i.ibb.co/8K0hSpn/carousel-5.png" onDragStart={handleDragStart} role="presentation" alt="thumbnail" className="thumbnail" />
        </Tooltip>
    ];

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