import React from 'react';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/image4.jpg';
import image5 from '../../Images/image5.jpg';
import image6 from '../../Images/image6.jpg';
import image7 from '../../Images/image7.jpg';
import image8 from '../../Images/image8.jpg';
import image9 from '../../Images/image9.jpg';
import image10 from '../../Images/image10.jpg';
import image11 from '../../Images/image11.jpg';
import image12 from '../../Images/image12.jpg';

import './Gallery.css'; // Import your CSS file for styling

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: image1,
    },
    {
      id: 2,
      src: image2,
    },
    {
      id: 3,
      src: image3,
    },
    {
      id: 4,
      src: image4,
    },
    {
      id: 5,
      src: image5,
    },
    {
      id: 6,
      src: image6,
    },
    {
      id: 7,
      src: image7,
    },
    {
      id: 8,
      src: image8,
    },
    {
      id: 9,
      src: image9,
    },
    {
      id: 10,
      src: image10,
    },
    {
      id: 11,
      src: image11,
    },
    {
      id: 12,
      src: image12,
    },
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <div className="image-container" key={image.id}>
          <div className="image-wrapper">
            <img src={image.src} alt={image.title} />
          </div>
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
