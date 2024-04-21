import harley from "./harleyblack.webp"
import harley2 from "./harleygrey.webp"
import harley3 from "./harleyblue.webp"
import harley4 from "./harleywhityessand.webp"

const Fourthbike = () => {
    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = harley2;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = harley3;
    }
    const mydisplay2 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = harley4;
    }
    const mydisplay3 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = harley;
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
                                        <div className="tab-pane active" id="pic-1"><img src={harley} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={harley2} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={harley3} /></div>
                                        <div className="tab-pane" id="pic-4"><img src={harley4} /></div>
                                        {/* <div className="tab-pane" id="pic-5"><img src={harley} /></div> */}
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay3} src={harley} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay} src={harley2} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img onMouseEnter={mydisplay1} src={harley3} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay2} src={harley4} /></a></li>
                                        {/* <li><a data-target="#pic-4" data-toggle="tab"><img src={harley} /></a></li> */}
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">Harley-Davidson Sportster S</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>₹ 17,92,545</span></h4>

                                    <h5 class="colors">Colors:
                                        <button onClick={mydisplay3} className="color black" data-toggle="tooltip" title="Not In store"></button>
                                        <button onClick={mydisplay} className="color grey"></button>
                                        <button onClick={mydisplay1} className="color navyblue"></button>
                                        <button onClick={mydisplay2} className="color whitesand"></button>
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
                                                Harley-Davidson Sportster S price for its variant - Sportster S Standard starts at Rs. 17,92,545. The mentioned Sportster S price is the on-road price of Bhopal.

                                                Harley-Davidson Sportster S is a cruiser bike available in only 1 variant and 4 colours. The Harley-Davidson Sportster S is powered by 1252cc BS6 engine which develops a power of 120.69 bhp and a torque of 125 Nm. With both front and rear disc brakes, Harley-Davidson Sportster S comes up with anti-locking braking system. This Sportster S bike weighs 225 kg and has a fuel tank capacity of 11.8 liters.
                                                The Harley-Davidson Sportster S sports the same brawny styling as before. It features a distinctive design that comprises a single-pod headlight, a compact fuel tank, a single-pod instrument cluster, a flat handlebar, a rider-only saddle, a twin-pod exhaust, and fat-profile tyres. The minimal body panels ensure that the Revolution Max 1250T engine is fully visible.
                                                This 1,252cc, V-twin, liquid-cooled engine is tuned to deliver a maximum output of 120.6bhp at 7,500rpm and a peak torque of 125Nm at 6,000rpm.
                                                Now, the motorcycle is offered in a single variant and four colours – Vivid Black, White Sand Pearl, Grey Haze, and Bright Billiard Blue. The comprehensive feature list of the 2023 Sportster S comprises full-LED lighting, a Bluetooth-enabled colour TFT display that works with a dedicated smartphone application, a USB charger, and a plethora of rider aids. These include ABS with a cornering function, lean-sensitive traction control system, cornering drag-torque slip control system, and wheel lift mitigation function. Meanwhile, the Bluetooth module brings access to phone calls, music, and navigation.

                                                As for hardware, the suspension tasks on the motorcycle are handled by 43mm upside-down front forks and a rear monoshock. The front forks and rear monoshock are adjustable for compression, rebound, and preload. The braking tasks are handled by a single disc with a four-piston calliper at the front and a single rotor with a single-piston calliper at the back.
                                            </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Suspension - Telescopic,43 mm inverted fork with compression</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension - Linkage-mounted, piggyback monoshock with compression, rebound and hydraulic spring preload adjustability</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - Dual Channel ABS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Brake Type -Disc</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty - 2 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty - Unlimited Km</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Tyre Type -Tubeless</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2">
                                                <tr>
                                                    <th class="py-2">Engine Capacity</th>
                                                    <td class="py-2">1,252 cc</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Max Power</th>
                                                    <td class="py-2">120.69 bhp @ 7500 rpm</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Mileage - ARAI</th>
                                                    <td class="py-2">20 kmpl</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">236 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">194 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission Type</th>
                                                    <td class="py-2">Belt Drive</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Tank Capacity</th>
                                                    <td class="py-2">11.8 litres</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Type</th>
                                                    <td class="py-2">Petrol</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Emission Standard</th>
                                                    <td class="py-2">BS6</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Clutch</th>
                                                    <td class="py-2">Assist And Slipper Clutch</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Cooling System</th>
                                                    <td class="py-2">Liquid Cooled</td>
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
                                                        Sportster S Standard

                                                    </a>
                                                    <strong class="text-dark">₹ 17,92,545</strong>
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
export default Fourthbike;