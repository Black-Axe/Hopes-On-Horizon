import React from 'react'
import { Card } from '../card/Card';
import './card-list.styles.css';


export default function CardList({animals}) {
    
    return (


        animals ?
        (<section className="cards-wrapper">
 
            {animals.map((animal, index) => (
                <Card key={index} animal={animal} />
            ))}


        </section>)
        :
        (<div></div>)
    )
}
