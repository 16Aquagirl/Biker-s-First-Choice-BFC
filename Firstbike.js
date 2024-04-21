import hunter from "./enfieldblue.webp";
import hunter2 from "./enfieldgreen.webp"
import hunter3 from "./enfieldred.webp"
import hunter4 from "./enfieldgrey.webp"
import hunter5 from "./enfieldblack.webp"
import hunter6 from "./enfieldsilver.webp"
import hunter7 from "./enfieldmarron.webp"
import hunter8 from "./enfieldcream.webp"

const Firstbike = () => {
    const mydisplay0 =()=>{
        let myobj= document.getElementById("myimg");
        myobj.src = hunter;
    }

    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = hunter2;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = hunter3;
    }
    const mydisplay2 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = hunter4;
    }
    const mydisplay3 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = hunter5;
    }
    const mydisplay4 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = hunter6;
    }
    const mydisplay5 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = hunter7;
    }
    const mydisplay6 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = hunter8;
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
                                        <div className="tab-pane active" id="pic-1"><img src={hunter} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={hunter2} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={hunter3} /></div>
                                        <div className="tab-pane" id="pic-4"><img src={hunter4} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={hunter5} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={hunter6} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={hunter7} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={hunter8} /></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a id="pic1" data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay}  src={hunter} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay} src={hunter2} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img onMouseEnter={mydisplay1} src={hunter3} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay2} src={hunter4} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay3} src={hunter5} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay4} src={hunter6} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay5} src={hunter7} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay6} src={hunter8} /></a></li>
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">Royal Enfield Hunter 350</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>1,49,900</span></h4>

                                    <h5 class="colors">Colors:
                                        <button onClick={mydisplay0} className="color blue" data-toggle="tooltip" title="Not In store"></button>
                                        <button onClick={mydisplay1} className="color green"></button>
                                        <button onClick={mydisplay2} className="color red"></button>
                                        <button onClick={mydisplay3} className="color grey"></button>
                                        <button onClick={mydisplay4} className="color black"></button>
                                        <button onClick={mydisplay5} className="color offwhite"></button>
                                        <button onClick={mydisplay6} className="color marron"></button>
                                        <button onClick={mydisplay6} className="color cream"></button>
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
                                                Royal Enfield Hunter 350 price for its variant - Hunter 350 Retro Factory is estimated at Rs. 1,49,900. The price for the other variants - Hunter 350 Metro Dapper and Hunter 350 Metro Rebel are Rs. 1,69,434 and Rs. 1,74,430. The mentioned Hunter 350 prices are the average ex-showroom.

                                                Royal Enfield Hunter 350 is a street bike available in 3 variants and 10 colours. The Royal Enfield Hunter 350 is powered by 349.34cc BS6 engine which develops a power of 20.2 bhp and a torque of 27 Nm. With both front and rear disc brakes, Royal Enfield Hunter 350 comes up with anti-locking braking system. This Hunter 350 bike weighs 181 kg and has a fuel tank capacity of 13 liters.

                                                The Royal Enfield Hunter has been launched in India, and it rivals the likes of the TVS Ronin and Jawa 42 in our market. The new Hunter 350 shares Royal Enfield’s J-Platform with the Meteor 350 and the Classic 350. Thus, it comes with the same chassis, cycle parts, and engine. The 349cc, air/oil-cooled engine comes linked to a five-speed gearbox and produces a maximum output of 20.2bhp and a peak torque of 27Nm.
                                                The motorcycle is available in two variants – Retro and Metro. The Metro variant is further divided into the Dapper and Rebel series, with the latter offering the snazziest of paint schemes. The styling cues across the range comprise a neo-retro roadster design that is reminiscent of the Triumph Street Twin motorcycles. Thus, this Royal Enfield comes with a single-piece seat, a teardrop-shaped fuel tank, and a round shape for the headlamp, tail lamp, turn signals, and mirrors.
                                            </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Suspension -Telescopic, 41mm forks, 130mm travel</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension -Twin tube emulsion shock absorbers with 6-step adjustable preload</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System -Single Channel ABS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Brake Type -Disc</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty -30000 Km</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty -3 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Tyre Type -Tubed</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table id="ex1-pills-2" class="table border mt-3 mb-2">
                                                <tr>
                                                    <th class="py-2">Engine Capacity</th>
                                                    <td class="py-2">349.34 cc</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Max Power</th>
                                                    <td class="py-2">20.2 bhp @ 6100 rpm</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Mileage - ARAI</th>
                                                    <td class="py-2">736 kmpl</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">455 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">114 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission Type</th>
                                                    <td class="py-2">Chain Drive</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Tank Capacity</th>
                                                    <td class="py-2">13 litres</td>
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
                                                    <td class="py-2">Wet Multiplate</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Cooling System</th>
                                                    <td class="py-2">Air/Oil Cooled</td>
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
                                                        Hunter 350 Retro Factory

                                                    </a>
                                                    <strong class="text-dark">   ₹ 1,49,900</strong>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        Hunter 350 Metro Dapper

                                                    </a>
                                                    <strong class="text-dark">₹ 1,69,434</strong>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        Hunter 350 Metro Rebel
                                                    </a>
                                                    <strong class="text-dark">₹ 1,74,430</strong>
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
export default Firstbike;