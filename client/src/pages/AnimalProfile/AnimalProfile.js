import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
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
  let animalImg;

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
  console.log(animalId);

  fetch(`http://localhost:5000/animals/${animalId}`)
    .then(res => res.json())
    .then(data => {
      setAnimal(data.animal);
      setLoading(false);
      console.log(data.animal);
      
      if(!data.animal.primary_photo_cropped) {
        console.log("no image");
        setAnimalImage(noImg);
      }
      else {
        console.log("image");
        setAnimalImage(data.animal.primary_photo_cropped.medium);
      }
      setAnimalImageArray(data.animal.photos);
      setAnimalTags(data.animal.tags);
      console.log(data.animal.tags);
      console.log(data.animal.photos);

      if(data.animal.photos.length > 0) {
        for(let i =0; i < data.animal.photos.length; i++) {
          console.log(data.animal.photos[i].medium);
        }
      }

    })
} , []);
  

  

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


  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

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
                    {animal ? animal.size : "size"}, {animal ? animal.species : "species"}
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
                  tabButton: "Work",
                  tabIcon: Palette,
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
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>60</b> Products
                          </li>
                          <li>
                            <b>4</b> Collections
                          </li>
                          <li>
                            <b>331</b> Influencers
                          </li>
                          <li>
                            <b>1.2K</b> Likes
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>Meet {animal ? animal.name : ""}</h4>
                        <p className={classes.description}>
                          {animal ? animal.description : "description"}
                        </p>
                        <hr />
                        <h4 className={classes.title}>Attributes</h4>
                        {
                          animalTags ? animalTags.map(tag => {
                            let randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
                            console.log(randomColor);

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
                                    Gigi Hadid
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth...
                                  </p>
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
                                    Kendall Jenner
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye. Don
                                    {"'"}t be scared of the truth.
                                  </p>
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
                                    George West
                                  </h4>
                                  <Muted>
                                    <h6>MODEL/DJ</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  ),
                },
                {
                  tabButton: "Media",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={""}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={""}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={""}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={""}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={""}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
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
