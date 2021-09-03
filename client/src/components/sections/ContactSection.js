import React from 'react'

export default function ContactSection() {
    return (
        <div>
        <div class="touch_section">
            <div class="container">
            <div class="row">
    			<div class="col-sm-12">
				    <h1 class="get_taital"><strong><span style={{color: "#ffffff"}}>Contact</span>  Us</strong></h1>
    			</div>
    		</div>

            <div class="email_box">
                    <div class="input_main">
                       <div class="container">
                          <form action="/action_page.php">
                            <div class="form-group">
                              <input type="text" class="email-bt" placeholder="Name" name="Name" />
                            </div>
                            <div class="form-group">
                              <input type="text" class="email-bt" placeholder="Your Phone Numbar" name="Name" />
                            </div>
                            <div class="form-group">
                              <input type="text" class="email-bt" placeholder="Your Email" name="Email" />
                            </div>
                            
                            <div class="form-group">
                                <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                            </div>
                          </form>   
                       </div> 
                       <div class="send_btn">
                        <button type="button" class="main_bt"><a href="#">Send</a></button>
                       </div>                   
                    </div>
    		</div>








            </div>
        </div>



<div class="touch_section_2">
    	<div class="container">
    		<div class="row">
    			<div class="col-sm-12">
    				<h1 class="our_texts">Our Newsletter</h1>
    				<div class="input-group mb-3">
                        <input class="email_bt" type="text" class="form-control" placeholder="Enter your email" />
                     <div class="input-group-append">
                        <button class="subscribe_bt" class="btn btn-primary" type="Subscribe">Subscribe</button>  
                     </div>
                    </div>
    			</div>
    		</div>
    	</div>
    </div>

    </div>
    )
}
