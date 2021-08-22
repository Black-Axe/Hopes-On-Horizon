import React from 'react';
import { sanitize } from 'dompurify';      

import './Card.styles.scss';

export const Card = ({animal}) => {
    const noImg = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/noimage.png';
    const randImg = `https://picsum.photos/200`;


    const img = animal.primary_photo_cropped ? animal.primary_photo_cropped.small : noImg;
    const address = animal.contact.address ? animal.contact.address : null; //address obj with key values
    const addressNoneDiv = 'No address';
    var addressText = "";

    if(address){
        //console.log(address);
        for (var key in address) {
            //console.log(key);
            //console.log(address[key]);
            const keyText = address[key];
            addressText +=  `
                    <span class="addressKey">
                        ${key}:
                    </span>
                    <span class="addressValue">
                        ${address[key] ? address[key] : ''}
                    </span>
                    <br>
                    `;
          }

    }
   



    return (
 

        /*
    <div className="card">
        <div className="img-container">
            <img className="img" alt={animal.name ? animal.name : "animal"} src={img} />
        </div>
    <div className="card-container">
        
        <h2 className="animal-name">{animal.name ? animal.name : 'name'} </h2>

        <div className="animal-info">
            <p>{animal.type ? animal.type : 'type'}: <span className="breed">{animal.breeds.primary ? animal.breeds.primary : 'type'}</span></p>
            <p></p>
            <p>{animal.description ? animal.description : 'No desc'}</p>
            <h3 className="contactHeader">Contact</h3>

            <div className="contact-info">
                <p>{animal.contact.email ? animal.contact.email : ''}</p>
                <p>{animal.contact.phone ? animal.contact.phone : ''}</p>

                <p dangerouslySetInnerHTML={{__html: sanitize(
                    address ? addressText : addressNoneDiv
                )}}>
                
                    
                    </p>
            </div>
        </div>
    </div>
    </div>
    




*/
<div className="cardcard">
<div class="container">
  <div class="card">
     <div class="card__image-container">
       <img class="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt="" />
    </div>
      
      <svg class="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
        <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
      </svg>
    
     <div class="card__content">
       <h1 class="card__title">Lorem ipsum</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
    </div>
  </div>
</div>
</div>

    )
}

    
   
