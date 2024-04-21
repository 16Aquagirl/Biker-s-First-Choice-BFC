import revolt1 from "./revoltredd.webp"
import revolt2 from "./revoltgreen.webp"
import revolt3 from "./revoltblue.webp"
import revolt4 from "./revoltwhite.webp"
import revolt5 from "./revoltmatblack.webp"
import revolt6 from "./revoltgold.webp"
import revolt7 from "./revoltblack.webp"

const Firstelectric = () => {
    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = revolt1;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = revolt2;
    }
    const mydisplay2 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = revolt3;
    }
    const mydisplay3 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = revolt4;
    }
    const mydisplay4 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = revolt5;
    }
    const mydisplay5 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = revolt6;
    }
    const mydisplay6 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = revolt7;
    }

    return (
        <>
            <div>
                <div className="containerr">
                    <div className="card">
                        <div className="container-fluid">
                            <div className="wrapper row">
                                <div className="preview col-md-6">

                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={revolt1} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={revolt2} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={revolt3} /></div>
                                        <div className="tab-pane" id="pic-4"><img src={revolt4} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={revolt5} /></div>
                                        <div className="tab-pane" id="pic-6"><img src={revolt6} /></div>
                                        <div className="tab-pane" id="pic-7"><img src={revolt7} /></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay} src={revolt1} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay1} src={revolt2} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img onMouseEnter={mydisplay2} src={revolt3} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay3} src={revolt4} /></a></li>
                                        <li><a data-target="#pic-5" data-toggle="tab"><img onMouseEnter={mydisplay4} src={revolt5} /></a></li>
                                        <li><a data-target="#pic-6" data-toggle="tab"><img onMouseEnter={mydisplay5} src={revolt6} /></a></li>
                                        <li><a data-target="#pic-7" data-toggle="tab"><img onMouseEnter={mydisplay6} src={revolt7} /></a></li>
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">Revolt RV 400</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>₹ 1,49,737</span></h4>

                                    <h5 class="colors">Colors:
                                        <button onClick={mydisplay} className="color redd" data-toggle="tooltip" title="Not In store"></button>
                                        <button onClick={mydisplay1} className="color darkgreen"></button>
                                        <button onClick={mydisplay2} className="color blue"></button>
                                        <button onClick={mydisplay3} className="color white"></button>
                                        <button onClick={mydisplay4} className="color black"></button>
                                        <button onClick={mydisplay5} className="color gold"></button>
                                        <button onClick={mydisplay6} className="color mattblack"></button>
                                    </h5>
                                    <div className="action">
                                        {/* <button className="buy-now btn btn-default" type="button"><a href="./checkout">Buy Now</a></button> */}
                                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="bg-light border-top py-4">
                    <div class="container">
                        <div class="row gx-4">
                            <div class="col-lg-8 mb-4">
                                <div class="border rounded-2 px-3 py-2 bg-white">

                                    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                        <li class="nav-item d-flex" role="presentation">
                                            <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Summary</a>
                                        </li>
                                        <li class="nav-item d-flex" role="presentation">
                                            <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false"> Specification</a>
                                        </li>
                                    </ul>

                                    <div class="tab-content" id="ex1-content">
                                        <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                            <p>
                                                Revolt RV 400 price for its variant - RV 400 BRZ starts at Rs. 1,49,737. The price for the other variants - RV 400 Premium and RV 400 Limited Edition are Rs. 1,54,993 and Rs. 1,60,250. The mentioned RV 400 prices are the on-road price of Bhopal.

                                                Revolt RV 400 is an electric street bike available in 3 variants and 10 colours. Revolt RV 400 generates 3000 W power from its motor. With both front and rear disc brakes, Revolt RV 400 comes up with combined braking system of both wheels.

                                                The Revolt RV400 is the country’s first AI-enabled electric motorcycle with the design on the lines of street naked motorcycles. It gets a muscular tank and beefy tank extensions along with a fairing that covers components like the motor and battery. At the rear, it uses a bolt-on sub frame with a one-piece seat. Braking is done by a single disc at both ends along with CBS. Suspension duties are handled by inverted forks up front and a monoshock at the rear.

                                                The electric motorcycle comes powered by a 3kW motor which produces 5kW of power and 50Nm of torque. It uses a 3kWh lithium-ion battery that is offered with an unlimited kilometer warranty. The bike comes equipped with three modes- Eco, Normal and Sport and the range depends on which mode the bike is being ridden in. The Sport mode propels the bike to a top speed of 85kmph and offers a range of 90km while the City mode offers a 120km range it limits the speed to 65kmph. However, if ridden in the Eco mode in which the bike can go to 45kmph, the RV400 has a range of 156km.

                                                In terms of features, the RV400 is equipped with a full-digital instrument cluster and full-LED lighting for the headlamp, tail lamp and turn indicators. It also gets an app which can be used to start up the motorcycle, setup a geo-fence and also get notified if the battery charge is low. Moreover, the company is offering a ‘Delivery on Demand’ feature which enables the user to have a fully-charged battery delivered to their specified location. Apart from that, the Revolt is offering the RV400 with an onboard charger, portable battery charger and will soon setup battery swapping stations, to be known as Switch Stations. However, the most interesting features are the simulated exhaust notes which can be changed from the app and can also be switched on or off on-the-go.

                                                Revolt is offering the motorcycle in two colour schemes- black and a dual-tone black/red paint.             </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Rated Power -3000 W</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension - Monoshock(Adjustable)</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - CBS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Battery Charging Time - 4.5 Hrs</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Artificial Sound -Yes</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Odometer - Digital</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Touch Screen Display - Display</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Battery Warranty - Whichever comes first out of 1,50,000 kms or 8 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Motor Warranty - 5 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Start Type -Electric Start</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Additional Features - Smart Remote Control, MyRevolt app, Ergonomically poisitioned seat, Adjustable foot pegs, Highest Ground Clearance</li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2">
                                                <tr>
                                                    <th class="py-2">Riding Modes</th>
                                                    <td class="py-2">Eco, Normal and Sport</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Rated Power</th>
                                                    <td class="py-2">3000 W</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission</th>
                                                    <td class="py-2">Automatic</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">150 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">85 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Motor Type</th>
                                                    <td class="py-2">Hub Motor</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Battery Capacity</th>
                                                    <td class="py-2">3.24 kWh</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Battery Type</th>
                                                    <td class="py-2">Lithium Ion</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">No. Of Batteries</th>
                                                    <td class="py-2">1</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Portable/Swappable Battery</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Charger Type</th>
                                                    <td class="py-2">Portable Charger</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Type</th>
                                                    <td class="py-2">Electric</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Charger Output</th>
                                                    <td class="py-2">15Amp</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Carrying Capacity</th>
                                                    <td class="py-2">150 kg</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Gradeability</th>
                                                    <td class="py-2">10.2 Degree</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Tyre Type</th>
                                                    <td class="py-2">Tubeless</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Kerb Weight</th>
                                                    <td class="py-2">108 kg</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="px-0 border rounded-2 shadow-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Variants</h5>
                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        RV 400 BRZ

                                                    </a>
                                                    <strong class="text-dark">₹ 1,49,737</strong>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        RV 400 Premium

                                                    </a>
                                                    <strong class="text-dark">₹ 1,54,993</strong>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        RV 400 Limited Edition
                                                    </a>
                                                    <strong class="text-dark">₹ 1,60,250</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


            </div>
        </>
    );
}
export default Firstelectric;