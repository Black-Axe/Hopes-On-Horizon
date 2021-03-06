import React from 'react'; 

import './Card.styles.scss';
import './animals.scss';

export const Card = ({animal}) => {
    const noImg = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/nune.jpg';


    let potentialImg = noImg;
    if(animal.photos.length > 0) {
      potentialImg = animal.photos[0].medium;

    }

    const img = animal.primary_photo_cropped ? animal.primary_photo_cropped.small : potentialImg;
    const address = animal.contact.address ? animal.contact.address : null; //address obj with key values

    var blackTextClass = "";


    if (img === noImg) {
        blackTextClass = "black-text";
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
                    <p>
                        {address ? address.address1 : ''}
                        {address ? address.address2 : ''}
                    </p>
                    <p>
                        {address ? address.city : ''} , {address ? address.state : ''} , &nbsp;
                            {address ? address.postcode : ''} , {address ? address.country : ''}
                    </p>
            </div>
        </div>
    </div>
    </div>
    



*/

<div class="cardAnimal-grid-space">
    <div class="num">{animal.name ? animal.name.substring(0, 17) : 'name'}</div>
    <div class="num2">{address ? address.city : ''} , {address ? address.state : ''}</div>
    <a class="cardAnimal cardAnimal-image" href={ animal.id ? `/animal/${animal.id}` : '/'} style={{backgroundImage: `url(${img})`}}>
      <div className={"card-animal-info"}>
        <h1 className={blackTextClass}>{animal.name ? animal.name.substring(0, 20) : 'name'}</h1>
        <p className={blackTextClass}>{animal.description ? animal.description.substring(0, 72) : 'No desc'}</p>
        <div class="date">{animal.type ? animal.type : 'type'}</div>
        <div class="tags">
          <div class="tag">{animal.breeds.primary ? animal.breeds.primary : 'type'}</div>
        </div>
      </div>
    </a>
  </div>

    )
}

    
   
