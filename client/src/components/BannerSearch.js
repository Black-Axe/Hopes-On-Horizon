import React, {useRef} from 'react'

export default function BannerSearch() {

    function openNav(){
        //console.log(navRef.current);
        navRef.current.style.width = '100%';
    }
    function closeNav(){
        navRef.current.style.width = '0';
    }

    const navRef = useRef(null);
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
							<li className="last">Log in / Register</li>
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
		<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
	  <div class="col-sm">
	  <h1 className="taital">Search</h1>
	  <input type="text" class="" placeholder="Search for a product" />
	  </div>
    </div>
    <div class="col-sm">
      One of three columns
	  <div className="col-sm-12">
	<h1 className="taital">Search</h1>
	<input type="text" class="" placeholder="Search for a product" />
	
</div>
    </div>
    <div class="col-sm">
      One of three columns
	  <div className="col-sm-12">
	<h1 className="taital">Search</h1>
	<input type="text" class="" placeholder="Search for a product" />
	</div>
    </div>
  </div>
</div>
		</div>
	</div>
    </div>
	






	
    )
}
