import React from 'react'

export default function SectionGallery() {
    return (
        <div className="gallery_main layout_padding">
            <div className="container">
            <div className="row">
    			<div className="col-sm-12">
    				<h1 className="about_taital"><strong><span style={{color: "#ffffff"}}>Our</span> Dogs</strong></h1>
				    <p className="sed_text"> Our dogs come from a range of shelters and organizations provided by an API courtesy of petfinder</p>

    			</div>
    		</div>

        	<div className="gallery_images">
    			<div className="row">
    				<div className="col-sm-7">
						<div className="gallery_blog">
                           <img src="images/gallery-img1.jpg" alt="" style={{maxWidth: "100%", height: "300px", width: "100%"}} />
                        <div className="overlay">
                            <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    				<div className="col-sm-5">
						<div className="gallery_blog">
                           <img src="images/gallery-img2.jpg" alt="" style={{maxWidth: "100%", height: "300px", width: "100%"}} />
                        <div className="overlay">
                            <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    			</div>
    		</div>



            <div className="gallery_images">
    			<div className="row">
    				<div className="col-sm-5">
						<div className="gallery_blog">
                           <img src="images/gallery-img3.jpg" alt="" style={{maxWidth: "100%", width: "100%" }}/>
                        <div className="overlay">
                            <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    				<div className="col-sm-7">
						<div className="gallery_blog">
                           <img src="images/gallery-img4.jpg" alt="" style={{maxWidth: "100%", height: "300px", width: "100%"}} />
                        <div className="overlay">
                            <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
						<div className="gallery_blog">
                           <img src="images/gallery-img5.jpg" alt="" style={{maxWidth: "100%", height: "297px", width: "100%"}} />
                        <div className="overlay">
                            <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                        </div>
					    </div>
    				</div>
    			</div>
    		</div>












            </div>
            

        </div>
        
    )
}
