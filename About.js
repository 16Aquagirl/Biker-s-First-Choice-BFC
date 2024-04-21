import img1 from "./career-img.png";
import img2 from "./career3.png";

const About = () => {
    return (
        <>
            <main class="careers" id="careers">
                <div class="career">
                    <div class="career-content">
                        <h3>Do you want to be a part of future <br></br>
                            problem solver?</h3>
                        <div class="career-btn">
                            <button className="btn-about">Join The Team</button>
                            <button className="btn-about">Current Openings</button>
                        </div>
                    </div>
                </div>

                <div class="career2">

                    <div class="career2-img">
                        <img src={img2} alt=""></img>
                    </div>

                    <div class="career2-content">
                        <div class="h">
                            <h3>Working at BFC!</h3>
                        </div>

                        <div class="para">
                            <p>We believe that the customer is king and strive to make sure you are treated like a king.<br/>
                                 Our efforts and drive doesn’t just come from one person but from all of our partners and employees.<br/>
                                  We believe that together we can make your experience one that you never forget. That’s why our website is your<br/>
                                   one stop shop for two wheelers.
                                  On our site, you can  buy a used bike, compare bikes, find dealers and even get the on-road price of the bike you’re looking for.<br/>
                                   We pride ourselves on giving you everything that you need to make a decision while buying a bike,<br/>
                                   We love what we do and our passion for motorcycles and people is what drives us to constantly better ourselves to help you. <br/>
                                   Innovation, Reliability and Client-friendliness are the key values that we hold dear.<br/>
                                    Biker's First Choice provides you with all the information you need to make a well informed buying decision.<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* footer */}
            {/* <div className="footer">
                    <footer className="new_footer_area bg_color">
                        <div className="new_footer_top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                            <p>Don’t miss any updates of our new templates and extensions.!</p>
                                            <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate="true" _lpchecked={1}>
                                                <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                                <p className="mchimp-errmessage" style={{ display: 'none' }} />
                                                <p className="mchimp-sucmessage" style={{ display: 'none' }} />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">Company</a></li>
                                                <li><a href="#">Android App</a></li>
                                                <li><a href="#">ios App</a></li>
                                                <li><a href="#">Desktop</a></li>
                                                <li><a href="#">Projects</a></li>
                                                <li><a href="#">My tasks</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Term &amp; conditions</a></li>
                                                <li><a href="#">Reporting</a></li>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">Support Policy</a></li>
                                                <li><a href="#">Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                            <div className="f_social_icon">
                                                <a href="#" className="fab fa-facebook" />
                                                <a href="#" className="fab fa-twitter" />
                                                <a href="#" className="fab fa-linkedin" />
                                                <a href="#" className="fab fa-pinterest" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_bg">
                                <div className="footer_bg_one" />
                                <div className="footer_bg_two" />
                            </div>
                        </div>
                        
                    </footer>

                </div> */}
        </>
    );
}
export default About;