import ev1 from "./pureevrd.webp"
import ev2 from "./pureevblue.webp"
import ev3 from "./pureevblack.webp"

const Thirdelectric = () => {
    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = ev1;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = ev2;
    }
    const mydisplay2 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = ev3;
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
                                        <div className="tab-pane active" id="pic-1"><img src={ev1} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={ev2} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={ev3} /></div>

                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay} src={ev1} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay1} src={ev2} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img onMouseEnter={mydisplay2} src={ev3} /></a></li>

                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">PURE EV eTryst 350 </h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>₹ 1,64,489</span></h4>

                                    <h5 class="colors">Colors:
                                        <button onClick={mydisplay} className="color red" data-toggle="tooltip" title="Not In store"></button>
                                        <button onClick={mydisplay1} className="color blue"></button>
                                        <button onClick={mydisplay2} className="color black"></button>
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
                                                PURE EV Etryst 350 price for its variant - Etryst 350 Standard starts at Rs. 1,64,489. The mentioned Etryst 350 price is the on-road price of Bhopal.

                                                PURE EV Etryst 350 is an electric street bike available in only 1 variant and 3 colours. PURE EV Etryst 350 generates 3000 W power from its motor. PURE EV Etryst 350 comes up with both front and rear disc brakes.

                                                Pure EV eTryst 350 is an electric motorcycle priced at Rs 1,54,999 (ex-showroom). It’s available in three colours: Sea Blue, Tan Red, and Punch Black. Pure EV offers the eTryst 350 in only one variant.

                                                The eTryst 350 is a naked electric bike with a hint of youthful design. It gets a hexagonal headlight and slim bodywork. Pure EV has equipped the eTryst 350 with a slightly muscular tank with extensions, a single-piece seat, and a tubular crash guard for added safety.

                                                The eTryst 350 uses a 3kW motor mated to a 3.5kWh battery. Its top speed is limited to 85kmph and the maximum range for the electric bike is 140km. On the feature front, the eTryst 350 features an LED and regenerative braking.

                                                Weighing 120kg, its suspension hardware comprises gaitered telescopic front forks and dual rear shocks. Then, the eTryst 350’s braking hardware includes a front and rear disc unit mounted on alloy wheels.                                </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Suspension - Hydraulic Dual Suspension</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension - Hydraulic Dual Suspension</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rated Power -3000W</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - Standard</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Brake Type - Disc</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Battery Warranty - 3 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Motor Warranty - 1 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Additional Features - 7 Inch LED Display</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2">
                                                <tr>
                                                    <th class="py-2">Max Power</th>
                                                    <td class="py-2">4000W</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Motor Type</th>
                                                    <td class="py-2">BLDC Hub Motor</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">140 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">85 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Battery Charging Time</th>
                                                    <td class="py-2">6hrs</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Start Type</th>
                                                    <td class="py-2">Electric Start</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Kill Switch</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Emission Standard</th>
                                                    <td class="py-2">BS6</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Clutch</th>
                                                    <td class="py-2">Wet Multiplate</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Cooling System</th>
                                                    <td class="py-2">Air/Oil Cooled</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Engine Capacity</th>
                                                    <td class="py-2">349.34 cc</td>
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
                                                    Etryst 350 Standard
                                                    </a>
                                                    <strong class="text-dark">₹ 1,64,489</strong>
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
export default Thirdelectric;