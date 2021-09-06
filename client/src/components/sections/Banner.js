import React, {useRef} from 'react'
import { useHistory } from "react-router-dom";


export default function Banner() {
	const history = useHistory();

	function handleClick() {
		//console.log('clicked')
		history.push("/search");
	}

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
					<div><a href="/"><img src="images/logohope.png" alt="logo"/></a></div>
				</div>
				<div className="col-md-8">
					<div className="menu_text">
						<ul>
							<a href="/search"><li className="last">Search Animals</li></a>
							<li className="last"><img src="images/search-icon.png" alt="search Icon" onClick={openNav}/></li>
							<li className="active">
							 <div id="myNav" className="overlay" ref={navRef}>
                                <button className="closebtn" onClick={closeNav}>&times;</button>
                             <div className="overlay-content">
                             	<a href="/">Home</a>
                                <a href="/search">Search</a>
                                <a href="/animals">Animals</a>
                              </div>
                            </div>
                             <span style={{fontSize: '30px',cursor:"pointer"}} onClick={openNav}>&#9776; Menu</span>
                            
                            </li>
						</ul>
					</div>
			</div>
		</div>
		<div className="banner_main">
			<div className="container">
				<div className="ram">
					<div className="row">
					    <div className="col-sm-12">
						    <h1 className="taital">Find your bestfriend</h1>
						    <p className="consectetur_text">Search for a new furry or scaly friend within 100miles from you!</p>
						    <div className="banner_bt">
						    	<button className="read_bt" onClick={handleClick}>Search Now</button>
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
	
    )
}
