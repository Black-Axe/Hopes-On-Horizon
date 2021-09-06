import React from 'react'

export default function ContactSection() {
    return (
        <div>
        <div className="touch_section">
            <div className="container">
            <div className="row">
    			<div className="col-sm-12">
				    <h1 className="get_taital"><strong><span style={{color: "#ffffff"}}>Contact</span>  Us</strong></h1>
    			</div>
    		</div>

            <div className="email_box">
                    <div className="input_main">
                       <div className="container">
                          <form action="/action_page.php">
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Name" name="Name" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Your Phone Numbar" name="Name" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Your Email" name="Email" />
                            </div>
                            
                            <div className="form-group">
                                <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                            </div>
                          </form>   
                       </div> 
                       <div className="send_btn">
                        <button type="button" className="main_bt"><a href="#">Send</a></button>
                       </div>                   
                    </div>
    		</div>








            </div>
        </div>



    </div>
    )
}
