import kawasaki1 from "./kawasaki green.webp"
import kawasaki2 from "./kawasakiblack.webp"
import kawasaki3 from "./kawasakigreendark.webp"

const Sixthbike = () => {
    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kawasaki1;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kawasaki2;
    }
    const mydisplay2 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kawasaki3;
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
                                        <div className="tab-pane active" id="pic-1"><img src={kawasaki1} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={kawasaki2} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={kawasaki3} /></div>

                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay} src={kawasaki1} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay1} src={kawasaki2} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img onMouseEnter={mydisplay2} src={kawasaki3} /></a></li>
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">Kawasaki Ninja 300</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>₹ 3,86,822</span></h4>

                                    <h5 class="colors">Colors:
                                        <button onClick={mydisplay} className="color lime" data-toggle="tooltip" title="Not In store"></button>
                                        <button onClick={mydisplay1} className="color black"></button>
                                        <button onClick={mydisplay2} className="color green"></button>

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
                                                Kawasaki Ninja 300 price for its variant - Ninja 300 Standard starts at Rs. 3,86,822. The mentioned Ninja 300 price is the on-road price of Bhopal.

                                                Kawasaki Ninja 300 is a sports bike available in only 1 variant and 3 colours. The Kawasaki Ninja 300 is powered by 296cc BS6 engine which develops a power of 38.88 bhp and a torque of 26.1 Nm. With both front and rear disc brakes, Kawasaki Ninja 300 comes up with anti-locking braking system. This Ninja 300 bike weighs 179 kg and has a fuel tank capacity of 17 liters.

                                                Kawasaki has launched the 2023 Ninja 300 in India. The new motorcycle features styling upgrades in the form of new colours. Thus, it is now available in three colours – Lime Green, Candy Lime Green, and Metallic Moondust Grey. While the two green shades get edgy graphics, the grey paint scheme looks a bit understated.

                                                Meanwhile, the design of the 2023 Ninja 300 remains unchanged and it receives a full fairing, a twin-pod headlight, a sporty windscreen, a muscular fuel tank, and split-style seats. The motorcycle also features a side-slung exhaust and Y-shaped alloy wheels. Then, the feature list includes a halogen headlight, a semi-digital instrument cluster, an LED taillight, and dual-channel ABS.

                                                Mechanically, the 2023 Kawasaki Ninja 300 continues to use a 296cc, parallel-twin engine. The OBD-2-compliant, liquid-cooled motor produces 38.4bhp and 26.1Nm of peak torque. It is linked with a six-speed gearbox, which gets an assist and slipper clutch as standard.                                            </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Suspension - 37 mm Telescopic Fork / 120 mm  </li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension - Bottom-Link Uni-Trak with gas-charged shock</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Transmission - 6 Speed Manual</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Kerb Weight - 179 kg</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Brake Type - Disc</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - Dual Channel ABS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Tyre Type -Tubed</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2">
                                                <tr>
                                                    <th class="py-2">Engine Capacity</th>
                                                    <td class="py-2">296 cc</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Max Power</th>
                                                    <td class="py-2">38.88 bhp @ 11000 rpm</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Mileage - Owner Reported</th>
                                                    <td class="py-2">29 kmpl</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">493 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">160 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission Type</th>
                                                    <td class="py-2">Chain Drive</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Tank Capacity</th>
                                                    <td class="py-2">17 litres</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Type</th>
                                                    <td class="py-2">Petrol</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Emission Standard</th>
                                                    <td class="py-2">BS6 Phase 2</td>
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
                                                        Ninja 300 Standard

                                                    </a>
                                                    <strong class="text-dark">₹ 3,86,822</strong>
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
export default Sixthbike;