import enfieldlogo from "./enfieldlogo.png";
import bmwlogo from "./bmw logo.png";
import jawalogo from "./jawa logo.png";
import ktmlogo from "./ktm logo.jpg";
import olalogo from "./OLA LOGO.png";
import harleylogo from "./davidson logo.png";
import kawasakilogo from "./kawasakilogo.png";
import torklogo from "./torklogo.svg";
import revoltlogo from "./revoltrvlogo.png";
import pureevlogo from "./pureevlogo.webp";
import revolt from "./revoltrv.webp"
import kratos from "./torkkartos.webp"
import pureev from "./pureevred.webp"
import royal from "./royalenfieldhunter350.webp";
import ktm from "./ktmrc200.webp";
import jawa from "./jawaperak.webp";
import fb from "./fb.png";
import ig from "./ig.png";
import whatsapp from "./whatsapp.png";
import twitter from "./twitter.png";
import vdo from "./Jawa.mp4"
import green from "./go electric.jpg";
import go from "./go green.jpg";
import user from "./userimage.webp";
import footer from "./animated.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [input, setInput] = useState({});
	const myNav = useNavigate();

    const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setInput(values => ({ ...values, [name]: value }));
	}
    const handleSubmit = (e) => {
		e.preventDefault();

		// let url = "http://127.0.0.1:8000/message/";
		let url = "http://127.0.0.1:8000/msg/";
		axios.post(url, input).then((res) => {
			alert("Message Successfully Submitted !!!");
			myNav("/home");
		});
	}
    return (
        <>
            <head>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" href="style.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </head>

            <body>
                {/* home video */}
                <video  muted autoPlay loop id="video">
                    <source src={vdo} type="video/mp4" />
                </video>

                {/* brand logos */}
                <marquee behavior="alternate" direction="">
                    <img src={enfieldlogo} alt="" width="260px" height="170px" scrollamount="9000" />
                    <img src={bmwlogo} alt="" width="200px" height="200px" scrollamount="9000" />
                    <img src={jawalogo} alt="" width="210px" height="200px" scrollamount="9000" />
                    <img src={kawasakilogo} alt="" width="380px" height="70px" scrollamount="9000" />
                    <img src={ktmlogo} alt="" width="300px" height="200px" scrollamount="9000" />
                    <img src={torklogo} alt="" width="280px" height="200px" scrollamount="9000" />
                    {/* <img src={olalogo} alt="" width="360px" height="200px" scrollamount="5000" /> */}
                    <img src={harleylogo} alt="" width="350px" height="200px" scrollamount="9000" />
                    <img src={revoltlogo} alt="" width="240px" height="200px" scrollamount="9000" />
                    <img src={pureevlogo} alt="" width="200px" height="200px" scrollamount="9000" />


                </marquee>

                {/* <!-- bike section --> */}
                <div class="bikes-home">
                    <div class="card-main-home">
                        <h1>BIKES</h1>

                        <div class="card-container-home">

                            {/* <!-- first card --> */}
                            <div class="card-item-home">
                                <img className="product-home" src={royal} />
                                <div class="detail-home">
                                    <h3>Royal Enfield Hunter <br></br> 350</h3>
                                    <br></br>
                                    <p>₹ 1,50,000-1,75,000</p>
                                    <button><a href="./firstbike">View Details</a></button>
                                </div>
                            </div>

                            {/* <!-- second card --> */}
                            <div class="card-item-home">
                                <img className="product-home" src={ktm} />
                                <div class="detail-home">
                                    <h3>KTM <br />Rc 200</h3>
                                    <br></br>
                                    <p>₹ 2,18,000</p>
                                    <button><a href="./secondbike">View Details</a></button>
                                </div>
                            </div>
                            {/* <!-- third card --> */}
                            <div class="card-item-home">
                                <img className="product-home" src={jawa} />
                                <div class="detail-home">
                                    <h3>Harley-Davidson Sportster S</h3>
                                    <br></br>
                                    <p>₹ 17,92,545</p>
                                    <button><a href="./fourthbike">View Details</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="more">
                    <button><a href="./login">BUY NOW</a></button>
                </div>

                {/* <!-- go green go electric --> */}
                <div class="electric-head">
                    <div className="heading">
                        <h1>GO GREEN</h1>
                    </div>
                    <div>
                        <img className="green" src={go}></img>
                    </div>
                    <div className="heading">
                        <h1>GO ELECTRIC</h1>
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
                                <br></br>
                                <p>₹ 1,49,737</p>
                                <button><a href="./firstelectric">View Details</a></button>
                            </div>

                            {/* <!-- second card --> */}
                            <div class="card-item-home">
                                <img className="product-home" src={kratos} />
                                <h3>Tork Kratos <br></br> R</h3>
                                <br></br>
                                <p>₹ 1,86,188</p>
                                <button><a href="./secondelectric">View Details</a></button>
                            </div>
                            {/* <!-- third card --> */}
                            <div class="card-item-home">
                                <img className="product-home" id="pureev" src={pureev} />
                                <h3>PURE EV Etryst <br></br> 350</h3>
                                <br></br>
                                <p>₹ 1,64,489</p>
                                <button><a href="./thirdelectric">View Details</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="re-head">
                    <h1>WHAT OUR CUSTOMERS SAY ABOUT US !</h1>
                </div>

                {/* reviews */}
                <div className="reviews">
                    <div class="wrapper-review">
                        <div class="box">
                            <i class="fas fa-quote-left quote"></i>
                            <p>The performance of the bike is very good and the comfort level is amazing. The bike is not too heavy and not too light. The light of the bike is awesome. It looks Aggressive and huge in size with its safety guards. The service cost is higher but the service quality is good and fast.</p>
                            <div class="content">
                                <div class="info">
                                    <div class="name">Alex Smith</div>
                                    <div class="job">Designer | Developer</div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <div class="image">
                                    <img src={user} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <i class="fas fa-quote-left quote"></i>
                            <p>I am writing after one month of using a single battery scooty.Good shocker for a bumpy road, good headlight, amazing looks, gives 70% of claimed mileage in city traffic. You should recover your scooty cost in 20000 km and the battery replacement cost in another 7000.
                                Cons: delicate plastics, less leg room, low boot space in dual battery, the seat has a bump separating the pillion which is uncomfortable, I got it covered with foam.</p>
                            <div class="content">
                                <div class="info">
                                    <div class="name">Steven Chris</div>
                                    <div class="job">YouTuber | Blogger</div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <div class="image">
                                    <img src={user} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <i class="fas fa-quote-left  quote"></i>
                            <p>Very stylish, smooth run, load capacity is standard, the headlight is very bright, but body durability needs to be modified, the problem facing about a meter, body cracked tire is not long-lasting, seat plastic is also broken, suddenly accelerometer not working service center is not non cooperate these are problem facing.</p>
                            <div class="content">
                                <div class="info">
                                    <div class="name">Kristina Bellis</div>
                                    <div class="job">Freelancer | Advertiser</div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <div class="image">
                                    <img src={user} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* location */}
                <div className="location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469402.70437816554!2d77.07623464395338!3d23.19906632038403!
                    2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!
                    1sen!2sin!4v1708552544806!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="contactform">
                        <form>
                            <h1 class="h1">CONTACT US</h1>
                            <br></br>
                            <input className="msg" placeholder="Enter Name" type="text" name="name" value={input.name} onChange={handleInput} required></input>
                            <br></br><br></br><br></br>
                            <input className="msg" placeholder="Enter Email" type="email" name="email" value={input.email} onChange={handleInput} required></input>
                            <br></br><br></br>
                            <input className="msg" placeholder="Enter Message" type="text" name="msg" value={input.msg} onChange={handleInput} required></input>
                            <br></br><br></br><br></br><br></br>
                            <button className="btn-con" onClick={handleSubmit}>Submit</button>
                        </form>
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

                    </footer> */}

                {/* </div> */}
            </body>
        </>
    );
}
export default Home;