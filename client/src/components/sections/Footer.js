import React from 'react'
import PetsIcon from '@material-ui/icons/Pets';

export default function Footer() {
    return (
        <div>
        <div className="section_footer">
    	<div className="container">
    		<div className="mail_section">
    			<ul>
    				<li className="footer-logo"><img src="../../images/logohope.png" alt=""/></li>
    				<li className="footer-logo"><img src="../../images/map-icon.png" alt=""/><span className="map_text">New York, NY</span></li>
    				<li className="footer-logo"><img src="../../images/email-icon.png" alt=""/><span className="map_text">info@hopesonhorizon.com</span></li>
    			</ul>
    	    </div> 
    	    <div className="footer_section_2">
		        <div className="row">
    		        <div className="col-sm-6 col-md-6 col-lg-3">
    		        	<h2 className="shop_text">About Hopes on Horizon</h2>
    		        	<p className="dummy_text">
						Hopes on Horizon was built to bring a profile for each animal needing adoption in a easy and seamless manner.</p>
    		        </div>
    		        <div className="col-sm-6 col-md-6 col-lg-3">
    		        	<h2 className="shop_text">Useful Links</h2>
    		        	<a href="https://www.animalhumanesociety.org/pet-helpline" target="_blank" rel="noopener noreferrer">
							<div className="image-icon">
								<img src="../../images/bulit-icon.png" alt=""/>
								<span className="pet_text">Pet Help</span>
							</div>
						</a>
    				    <a href="https://www.petfinder.com/pet-care/" target="_blank" rel="noopener noreferrer">
							<div className="image-icon">
								<img src="../../images/bulit-icon.png" alt=""/><span className="pet_text">Pet Care</span></div>
						</a>
    				    <a href="https://www.petfinder.com/pet-adoption/dog-adoption/pet-adoption-checklist/" target="_blank" rel="noopener noreferrer"><div className="image-icon"><img src="../../images/bulit-icon.png" alt=""/><span className="pet_text">Adoption Checklist</span></div></a>
    				    <a href="https://www.google.com/search?q=vets+near+me" target="_blank" rel="noopener noreferrer"><div className="image-icon"><img src="../../images/bulit-icon.png" alt=""/><span className="pet_text">Vets</span></div></a>
    				    <a href="https://www.google.com/search?q=pet+charities" target="_blank" rel="noopener noreferrer"><div className="image-icon"><img src="../../images/bulit-icon.png" alt=""/><span className="pet_text">Pet Charities</span></div></a>
    		        </div>
    		        <div className="col-sm-6 col-md-6 col-lg-3">
    				    <h2 className="shop_text">Overview</h2>
    				    <a href="/"><div className="image-icon"><img src="../../images/bulit-icon.png" alt="" /><span className="pet_text">Home</span></div></a>
    				    <a href="/search"><div className="image-icon"><img src="../../images/bulit-icon.png" alt=""/><span className="pet_text">Search</span></div></a>
    				    <a href="/animals"><div className="image-icon"><img src="../../images/bulit-icon.png" alt=""/><span className="pet_text">Animals</span></div></a>			
    		        </div>
    			<div className="col-sm-6 col-md-6 col-lg-3">
    				<h2 className="adderess_text"><PetsIcon /></h2>
    				<div className="footer-img">
    					<div className="row">
    						<div className="col-sm-6">
    							<div className="footer-img"><img src="../../images/footer-img1.png" alt="" style={{width: "100%"}} /></div>
    							<div className="footer-img"><img src="../../images/footer-img2.png" alt="" style={{width: "100%"}} /></div>
    						</div>
    						<div className="col-sm-6">
    							<div className="footer-img"><img src="../../images/footer-img3.png" alt="" style={{width: "100%"}} /></div>
    							<div className="footer-img"><img src="../../images/footer-img4.png" alt="" style={{width: "100%"}} /></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			</div>
    	        </div>
    	        <div className="social-icon">
	        	    <div className="row">
	        		    <div className="col-sm-12">
	        			    <div className="icons">
	        				    <ul>
	        				    </ul>
	        			    </div>
	        		    </div>
	        	    </div>
	            </div>
	            <div className="copyright">{new Date().getFullYear()} All Rights Reserved. <a href="/">Hopes on Horizon</a></div>
	        </div>
    	</div>
    </div>

    )
}
