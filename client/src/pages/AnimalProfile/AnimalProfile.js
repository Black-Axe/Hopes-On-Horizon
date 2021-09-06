import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
// core components

import Header from '../../components/materialHeader/Header';

import GridContainer from "../../components/materialGridContainer/GridContainer";
import GridItem from "../../components/materialGridItem/GridItem";
import NavPills from "../../components/materialNavPill/NavPills";
import Card from "../../components/matCard/Card";
import CardBody from "../../components/matCardBody/CardBody";
import Badge from "../../components/Badge/Badge";
import Muted from "../../components/materialTypography/Muted";
import Parallax from "../../components/matParallax/Parallax";
import Clearfix from "../../components/matClearFix/Clearfix";

import HeaderLinks from "../../components/materialHeader/HeaderLinks";

import Footer from '../../components/sections/Footer';
import profilePageStyle from "./profilePageStyle";


import {
    useParams
} from "react-router-dom";


import catdog from '../../digitalAssets/catdog.jpg';

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePageTwo({  match, ...rest }) {

  const notSpecified = "not specified";

  const colorsArray = ["primary",
  "warning",
  "danger",
  "success",
  "info",
  "rose",
  "gray",]

  const noImg = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/nune.jpg';

  let { animalId } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animalImage, setAnimalImage] = useState(noImg);
  const [animalImageArray, setAnimalImageArray] = useState();
  const [animalTags, setAnimalTags] = useState();
  const [animalAttributes, setAnimalAttributes] = useState();
  const [adoptionEmail, setAdoptionEmail] = useState("");
  const [adoptionPhone, setAdoptionPhone] = useState("");


  /*
  useEffect(() => {
    fetch(`http://localhost:8080/api/animals/${animalId}`)
      .then(res => res.json())
      .then(data => {
        setAnimal(data);
        setLoading(false);
      }, [animalId]);
      */



useEffect(() => {
  if(!animalId) {
    setLoading(true);
    return;
  }
  //console.log(animalId);

  fetch(`https://shelter-se.herokuapp.com/animals/${animalId}`)
    .then(res => res.json())
    .then(data => {
      setAnimal(data.animal);
      setLoading(false);
     // console.log(data.animal);
      
      if(!data.animal.primary_photo_cropped) {
       // console.log("no image");
        setAnimalImage(noImg);
      }
      else {
        //console.log("image");
        setAnimalImage(data.animal.primary_photo_cropped.medium);
      }
      setAnimalImageArray(data.animal.photos);
      setAnimalTags(data.animal.tags);
      setAnimalAttributes(data.animal.attributes);

      if(data.animal.contact.phone){
        setAdoptionPhone(data.animal.contact.phone);
      }
      if(data.animal.contact.email){
        setAdoptionEmail(data.animal.contact.email);
      }

      //console.log(data.animal.tags);
     // console.log(data.animal.photos);

      //console.log(data.animal.attributes);


    })
} , [animalId]);
  

  

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });



  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );



  if(loading){
    //LOADING ANIMAL
    return (<>
      <div>
      <Header
        color="transparent"
        brand="Hopes on Horizon"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />
      <Parallax
        image={catdog}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Loading...</h3>
                  <h2 style={{color: 'black'}}>Loading...</h2>
                  <div style={{height: '400px'}}></div>
                 
                 
                </div>
              </div>
              <div className={classes.follow}>
               
              </div>
            </GridItem>
          </GridContainer>
          </div>
          </div>

      </div>
      </>
    )
  }







  return (
    <div>
      <Header
        color="transparent"
        brand="Hopes on Horizon"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />
      <Parallax
        image={animal ? animalImage : catdog}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={animalImage ? animalImage : ""} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{animal ? animal.name : "name"}</h3>
                  <h6>
                    <strong>Size:</strong> {animal ? animal.size : "size"}
                  </h6>

                  <h6>
                    <strong>Gender:</strong> {animal ? animal.gender : "gender"}
                  </h6>

                  <h6>
                  <strong>Age:</strong> {animal ? animal.age : "age"} 
                  </h6>

                  <h6>
                    <strong>Species:</strong> {animal ? animal.species : "species"}
                  </h6>
                 
                 
                 
                </div>
              </div>
              <div className={classes.follow}>
               
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>{  animal ? animal.description : "description"}</p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Photos",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Photos</h4>
                        <GridContainer className={classes.collections}>

                          {
                            animalImageArray ? animalImageArray.map(photo => {
                              return(
                                <GridItem xs={12} sm={12} md={6}>
                                <Card
                                  background
                                  style={{
                                    backgroundImage: `url(${ photo? photo.medium : ""})`,
                                  }}
                                >
                                  <CardBody background className={classes.cardBody}>
                                 
                                   
                                  </CardBody>
                                </Card>
                              </GridItem>


                              )

                            }) : ""
                           
                            

                          }
                         
                        </GridContainer>
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Attributes</h4>
                        <ul className={classes.listUnstyled}>
                          {
                            /*declawed: null
house_trained: true
shots_current: true
spayed_neutered: true
special_needs: false*/

                          }
                          <li>
                            <b>Declawed</b>: {animalAttributes ? animalAttributes.declawed ? `${animalAttributes.declawed}` : notSpecified : ""}
                          </li>
                          <li>
                            <b>House Trained</b>: {animalAttributes ? animalAttributes.house_trained ? `${animalAttributes.house_trained}` : notSpecified : ""}
                          </li>
                          <li>
                            <b>Shots Current</b>: {animalAttributes ? animalAttributes.shots_current ? `${animalAttributes.shots_current}` : notSpecified : ""}
                          </li>
                          <li>
                            <b>Spray Neutered</b>: {animalAttributes ? animalAttributes.spayed_neutered ? `${animalAttributes.spayed_neutered}` : notSpecified : ""}
                          </li>
                          <li>
                            <b>Special Needs</b>: {animalAttributes ? animalAttributes.special_needs ? `${animalAttributes.special_needs}` : notSpecified : ""}
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>Meet {animal ? animal.name : ""}</h4>
                        <p className={classes.description}>
                          {animal ? animal.description : "description"}
                        </p>
                        <hr />
                        <h4 className={classes.title}>Tags</h4>
                        {
                          animalTags ? animalTags.map(tag => {
                            let randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
                           // console.log(randomColor);

                            return(
                              <Badge color={randomColor} >
                                {tag}
                              </Badge>
                            )
                          }) : ""


                        }
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Contact",
                  tabIcon: PermContactCalendarIcon,
                  tabContent: (
                    
                    <div>
                      {/*
                      "contact":{
         "email":"info@caspca.org",
         "phone":"(434) 973-5959",
         "address":{
            "address1":"3355 Berkmar Dr.",
            "address2":null,
            "city":"Charlottesville",
            "state":"VA",
            "postcode":"22901",
            "country":"US"
         }*/}
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={6}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                          
                              <GridItem xs={12} sm={12} md={12}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Address
                                  </h4>

                                  <p className={classes.description}>
                                  {animal.contact ? animal.contact.address? animal.contact.address.address1 : "" : ""}
                                  </p>
                                  <p>
                                  {animal.contact ? animal.contact.address? animal.contact.address.address2 : "" : ""}
                                  </p>

                                 <a href={
                                   "https://www.google.com/maps/dir/" 
                                   + animal.contact.address.address1 + " " +
                                   animal.contact.address.city + " " +
                                   animal.contact.address.state + " " +
                                   animal.contact.address.postcode 
                                   }> <p className={classes.description}>
                                  {animal.contact ? animal.contact.address? animal.contact.address.city : "" : ""}, &nbsp;  
                                    {animal.contact ? animal.contact.address? animal.contact.address.state : "" : ""},  &nbsp;
                                    {animal.contact ? animal.contact.address? animal.contact.address.postcode : "" : ""}  &nbsp;
                                    {animal.contact ? animal.contact.address? animal.contact.address.country : "" : ""}
                                    
                                  </p>
                                  </a>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                       
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={6}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                          
                              <GridItem xs={12} sm={12} md={12}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                  Email
                                  </h4>
                                  <Muted>
                                  <a href={'mailto:' + adoptionEmail}><h6>{animal.contact ? animal.contact.email : notSpecified}</h6></a>
                                  </Muted>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Phone
                                  </h4>
                                  <Muted>
                                    <a href={'tel:' + adoptionPhone}><h6>{animal.contact ? animal.contact.phone : notSpecified}</h6></a>
                                  </Muted>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  ),
                },
           
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      
      
    <Footer />
    </div>
  );
}
