import bmw1 from "./bmwblackstorm.webp"
import bmw2 from "./bmwwhitesport.webp";

const Fifthbike = () => {
    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = bmw1;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = bmw2;
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
                                        <div className="tab-pane active" id="pic-1"><img src={bmw1} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={bmw2} /></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay} src={bmw1} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay1} src={bmw2} /></a></li>

                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">BMW M 1000 R</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>₹ 39,04,082</span></h4>

                                    <h5 class="colors">Colors:
                                        <button onClick={mydisplay1} className="color black" data-toggle="tooltip" title="Not In store"></button>
                                        <button onClick={mydisplay1} className="color white"></button>
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
                                                BMW M 1000 R price for its variant - M 1000 R Standard starts at Rs. 39,04,082. The price for the other variant - M 1000 R Competition is Rs. 44,89,418. The mentioned M 1000 R prices are the on-road price of Bhopal.

                                                BMW M 1000 R is a sports bike available in 2 variants and 2 colours. The BMW M 1000 R is powered by 999cc BS6 engine which develops a power of 206.5 bhp and a torque of 113 Nm. With both front and rear disc brakes, BMW M 1000 R comes up with anti-locking braking system.

                                                The BMW M 1000 R is a super naked motorcycle that’s priced at Rs. 37 lakh, on-road in Delhi. The bike is available in two colours.
                                                The M 1000 R is powered by a 999cc, liquid-cooled, inline-four engine that makes 210bhp at 13,750rpm and 113Nm at 11,000rpm. The engine is paired with a six-speed gearbox and has a quickshifter. The bike weighs 199kg only and BMW claims the M 1000 R can hit a top speed of 280kmph. The engine is also quite technologically advanced, featuring BMW’s ShiftCam technology and titanium valves.
                                                The bike employs a perimeter frame and has a USD fork and monoshock. Being a top-level BMW street naked, it gets full adjustment at both ends. The bike rides on 17-inch carbon wheels, wrapped with sticky tyres to lay down all that power effectively. Braking duties, meanwhile, are handled by twin discs at the front and a single disc at the rear.
                                                The BMW M 1000 R is available in one variant only. It competes with the Ducati Streetfighter V4S and the Kawasaki Z H2 and Z H2 SE.
                                            </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Engine Capacity -999 cc</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Mileage - ARAI 15.6 kmpl </li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - Dual Channel ABS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Transmission - 6 Speed Manual</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Fuel Tank Capacity - 16.5 litres</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Max Power - 206.5 bhp</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Tyre Type - Tubeless</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2">
                                                <tr>
                                                    <th class="py-2">Engine Capacity</th>
                                                    <td class="py-2">999 cc</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Max Power</th>
                                                    <td class="py-2">206.5 bhp @ 14500 rpm</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Mileage - ARAI</th>
                                                    <td class="py-2">15.6 kmpl</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">257.4 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">280 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission Type</th>
                                                    <td class="py-2">Chain Drive</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Tank Capacity</th>
                                                    <td class="py-2">16.5 litres</td>
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
                                                    <td class="py-2">Wet Multiplate</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Cooling System</th>
                                                    <td class="py-2">Water/Oil Cooled</td>
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
                                                        M 1000 R Standard


                                                    </a>
                                                    <strong class="text-dark">₹ 39,04,082</strong>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        M 1000 R Competition

                                                    </a>
                                                    <strong class="text-dark">₹ 44,89,418</strong>
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
export default Fifthbike;