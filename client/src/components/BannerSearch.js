import React, {useState, useEffect, useRef } from 'react'

export default function BannerSearch() {


  const [animalFact, setAnimalFact] = useState(null);

    function openNav(){
        //console.log(navRef.current);
        navRef.current.style.width = '100%';
    }
    function closeNav(){
        navRef.current.style.width = '0';
    }

    const navRef = useRef(null);

    useEffect(() => {
      fetchAnimalFact();

    }, []);

    const fetchAnimalFact = async () => {
      fetch('https://se-animal-facts.herokuapp.com/')
      .then(response => response.json())
    .then(response => {

      console.log(response.data)
      setAnimalFact(response.data);

      })
            


    }

    return (
    
        <div className="header_section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4">
					<div><a href="index.html"><img src="images/logo.png" alt="logo"/></a></div>
				</div>
				<div className="col-md-8">
					<div className="menu_text">
						<ul>
							<li className="last"><img src="images/search-icon.png" alt="search Icon" onClick={openNav}/></li>
							<li className="active">
							 <div id="myNav" className="overlay" ref={navRef}>
                                <button className="closebtn" onClick={closeNav}>&times;</button>
                             <div className="overlay-content">
                             	<a href="index.html">Home</a>
                                <a href="about.html">About</a>
                                <a href="gallery.html">Gallery</a>
                                <a href="contact.html">Contact</a>
                              </div>
                            </div>
                             <span style={{fontSize: '30px',cursor:"pointer"}} onClick={openNav}>&#9776; Menu</span>
                            
                            </li>
						</ul>
					</div>
			</div>
		</div>
		<div className="banner_main">
		<div class="container searchContainerBanner">
    <div className="container">
				<div className="ram">
					<div className="row">
					    <div className="col-sm-12">
						    <h1 className="taital">Search for a new friend</h1>
                <h5 className="consectetur_text"> Fun fact: </h5>
						    <p className="consectetur_text">{animalFact ? animalFact : ""}</p>
						    <div className="banner_bt">

						    </div>
					    </div>
				    </div>
				</div>
				<div className="box">
					<h1 className="numbar_text">01</h1>
				</div>
			</div>
  
		</div>
    
	</div>
  
  </div>

  
    </div>  




	
    )
}
