import React from 'react'

export default function SectionGallery() {
    return (
        <div className="gallery_main layout_padding">
            <div className="container">
            <div class="row">
    			<div class="col-sm-12">
    				<h1 class="about_taital"><strong><span style={{color: "#ffffff"}}>Our</span> Dogs</strong></h1>
				    <p class="sed_text"> Our dogs come from a range of shelters and organizations provided by an API courtesy of petfinder</p>

    			</div>
    		</div>

        	<div class="gallery_images">
    			<div class="row">
    				<div class="col-sm-7">
						<div class="gallery_blog">
                           <img src="images/gallery-img1.jpg" style={{maxWidth: "100%", height: "300px", width: "100%"}} />
                        <div class="overlay">
                            <div class="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    				<div class="col-sm-5">
						<div class="gallery_blog">
                           <img src="images/gallery-img2.jpg" style={{maxWidth: "100%", height: "300px", width: "100%"}} />
                        <div class="overlay">
                            <div class="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    			</div>
    		</div>



            <div class="gallery_images">
    			<div class="row">
    				<div class="col-sm-5">
						<div class="gallery_blog">
                           <img src="images/gallery-img3.jpg" style={{maxWidth: "100%", width: "100%" }}/>
                        <div class="overlay">
                            <div class="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    				<div class="col-sm-7">
						<div class="gallery_blog">
                           <img src="images/gallery-img4.jpg" style={{maxWidth: "100%", height: "300px", width: "100%"}} />
                        <div class="overlay">
                            <div class="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
						<div class="gallery_blog">
                           <img src="images/gallery-img5.jpg" style={{maxWidth: "100%", height: "297px", width: "100%"}} />
                        <div class="overlay">
                            <div class="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    			</div>
    		</div>












            </div>
            

        </div>
        
    )
}
