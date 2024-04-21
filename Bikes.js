import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./productSlice";

const Bikes = () => {
    const mycart = useSelector((state) => state.addtocart.cart);
    console.log(mycart);
    const dispatch = useDispatch();
    const mydataAdd = (id, name, detail, image, price) => {
        let productObj = { id: id, name: name, detail: detail, image: image, price: price, quantity: 1 };
        dispatch(addData(productObj));
    }
    const proAns = Product.map((key) => {
        return (
            <>
                <div className="cartData">
                    <div id="imgbox">
                        <img src={"images/" + key.image} style={{ width: "300px", height: "200px" }} />
                    </div>
                    <br />
                    <div>
                        <h2> {key.name} </h2>

                        <h3> Detail: <span style={{ color: "red", fontWeight: "100" }}>{key.detail} </span> </h3>

                        <div className="productprice">
                            <h3> Price: <span style={{ color: "red", fontWeight: "100" }}>{key.price} </span> </h3>
                        </div>
                    </div>
                    <br />
                    <div>
                        {/* ON EVERY CLICK DIFFERENT PAGE SHOULD BE SEEN */}
                    </div>
                    <div>
                        <button onClick={() => { mydataAdd(key.id, key.name, key.detail, key.image, key.price) }}> Add To Cart</button>
                    </div>    
                    </div>
            </>
        );
    });
    return (
        <>
            <div class="bikes">
                <div class="card-main">
                    <h1>BIKES</h1>

                    <div class="card-container">

                        {/* <!-- first card --> */}
                        <div class="card-item">
                            <div class="detail">
                                {proAns}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="footer">
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

                </div>
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
export default Bikes;