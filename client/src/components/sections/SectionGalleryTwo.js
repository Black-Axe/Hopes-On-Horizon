import React from 'react'
import { useHistory } from "react-router-dom";

export default function SectionGalleryTwo() {
    const history = useHistory();

	function handleClick() {
		//console.log('clicked')
		history.push("/search");
	}

    return (
        <div class="gallery_section_2">
            <div class="container">

                <div class="row">
                <div class="col-sm-8">
    				<h1 class="pet_taital">Pet adoption be part of something beautiful</h1>
    				<p class="lorem_text">Select from a wide range of pets close to where you live!</p>
    			
                    <div class="banner_bt">
					    <button class="dog_bt" onClick={handleClick}>Search</button>
				    </div>
                    <div class="box_3">
					    <h1 class="numbar">03</h1>
				    </div>
                </div>
                <div class="col-sm-4">
    				<div class="dog_img">
                        <img src="images/dog-img.png" alt="dog" style={{maxWidth: "100%"}} />
                        </div>
    			</div>

                








                </div>
            </div>
            
        </div>
 

    )
}
