import React from 'react';

import './Card.styles.css';

export const Card = (props) => (

    <div className="card-container">
        <img alt="animal" src={`https://picsum.photos/200`} />
        <h2>{props.name} </h2>
        <p>{props.age}</p>
    </div>
)