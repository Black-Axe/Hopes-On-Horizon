import React from 'react'
import { useHistory } from "react-router-dom";

export default function SectionGalleryTwo() {
    const history = useHistory();

	function handleClick() {
		//console.log('clicked')
		history.push("/search");
	}

    return (
        <div className="gallery_section_2">
            <div className="container">

                <div className="row">
                <div className="col-sm-8">
    				<h1 className="pet_taital">Pet adoption be part of something beautiful</h1>
    				<p className="lorem_text">Select from a wide range of pets close to where you live!</p>
    			
                    <div className="banner_bt">
					    <button className="dog_bt" onClick={handleClick}>Search</button>
				    </div>
                    <div className="box_3">
					    <h1 className="numbar">03</h1>
				    </div>
                </div>
                <div className="col-sm-4">
    				<div className="dog_img">
                        <img src="images/dog-img.png" alt="dog" style={{maxWidth: "100%"}} />
                        </div>
    			</div>

                








                </div>
            </div>
            
        </div>
 

    )
}
