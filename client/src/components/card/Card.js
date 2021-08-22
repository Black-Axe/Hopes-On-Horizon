import React from 'react';

import './Card.styles.css';

export const Card = ({animal}) => {
    const noImg = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/noimage.png';
    const randImg = `https://picsum.photos/200`;

    const img = animal.primary_photo_cropped ? animal.primary_photo_cropped.small : noImg;

   



    return (
 
    <div className="card-container">
        <div className="img-container">
            <img className="img" alt={animal.name ? animal.name : "animal"} src={img} />
        </div>
        <h2 className="animal-name">{animal.name ? animal.name : 'name'} </h2>
        <p>{animal.type ? animal.type : 'type'}</p>
        <p>{animal.breeds.primary ? animal.breeds.primary : 'type'}</p>
        <p>{animal.description ? animal.description : 'No desc'}</p>
    </div>
    )
}

    
   
