import royal from "./royalenfieldhunter350.webp";
import ktm from "./ktmrc200.webp";
import jawa from "./jawaperak.webp";
import davidson from "./harleydavidsonsportster.webp";
import bmw from "./bmwm1000r.gif";
import kawasaki from "./kawasakii.webp";
import revolt from "./revoltrv.webp"
import kratos from "./torkkartos.webp"
import pureev from "./pureevred.webp"

const Electric = () => {
    return (
        <>
            {/* bikes section */}
            <div class="bikes-home">
                <div class="card-main-home">
                    <h1>BIKES</h1>

                    <div class="card-container-home">

                        {/* <!-- first card --> */}
                        <div class="card-item-home">
                            <div class="detail-home">
                                <img className="product-home" src={royal} />
                                <h3>Royal Enfield Hunter <br></br> 350</h3>
                                <p>1,50,000-1,75,000</p>
                                <button><a href="./firstbike">View Details</a></button>
                            </div>
                        </div>

                        {/* <!-- second card --> */}
                        <div class="card-item-home">
                            <div class="detail-home">
                                <img className="product-home" src={bmw} />
                                <h3>BMW M 1000 <br></br> R</h3>
                                <p>₹ 39,04,082</p>
                                <button><a href="./fifthbike">View Details</a></button>
                            </div>
                        </div>
                        {/* <!-- third card --> */}
                        <div class="card-item-home">
                            <div class="detail-home">
                                <img className="product-home" src={davidson} />
                                <h3>Harley-Davidson <br></br> Sportster S</h3>
                                <p>₹ 17,92,545</p>
                                <button><a href="./fourthbike">View Details</a></button>
                            </div>
                        </div>


                        {/* <!-- fourth card --> */}
                        <div class="card-item-home">
                            <div class="detail-home">
                                <img className="product-home" src={jawa} />
                                <h3>Jawa <br></br> Perak</h3>
                                <p>2,14,000</p>
                                <button><a href="./thirdbike">View Details</a></button>
                            </div>
                        </div>

                        {/* <!-- fifth card --> */}
                        <div class="card-item-home">
                            <div class="detail-home">
                                <img className="product" src={ktm} />
                                <h3>KTM Rc <br></br> 200</h3>
                                <p>2,18,000</p>
                                <button><a href="./secondbike">View Details</a></button>
                            </div>
                        </div>

                        {/* <!-- sixth card --> */}
                        <div class="card-item-home">
                            <div class="detail-home">
                                <img className="product-home" src={kawasaki} />
                                <h3>Kawasaki Ninja <br></br> 300</h3>
                                <p>₹ 3,86,822</p>
                                <button><a href="./sixthbike">View Details</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- electric section --> */}
            <div class="bikes-home">
                <div class="card-main-home">
                    <h1>ELECTRIC</h1>

                    <div class="card-container-home">

                        {/* <!-- first card --> */}
                        <div class="card-item-home">
                            <img className="product-home" src={revolt} />
                            <h3>Revolt RV <br></br> 400</h3>
                            <p>₹ 1,49,737</p>
                            <button><a href="./firstelectric">View Details</a></button>
                        </div>

                        {/* <!-- second card --> */}
                        <div class="card-item-home">
                            <img className="product-home" src={kratos} />
                            <h3>Tork Kratos <br></br> R</h3>
                            <p>₹ 1,86,188</p>
                            <button><a href="./secondelectric">View Details</a></button>
                        </div>
                        {/* <!-- third card --> */}
                        <div class="card-item-home">
                            <img className="product-home" id="pureev" src={pureev} />
                            <h3>PURE EV Etryst <br></br> 350</h3>
                            <p>₹ 1,64,489</p>
                            <button><a href="./thirdelectric">View Details</a></button>
                        </div>
                    </div>
                </div>
            </div>
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
                                            <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
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
export default Electric;