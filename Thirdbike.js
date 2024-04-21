import jawaperak from "./Jawa Perak black.webp"

const Thirdbike = () => {

    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = jawaperak;
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
                                        <div className="tab-pane active" id="pic-1"><img src={jawaperak} id="myimg" /></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay} src={jawaperak} /></a></li>
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">Jawa Perak</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>₹ 2,52,677</span></h4>

                                    <h5 class="colors">Colors:
                                        <button onClick={mydisplay} className="color black" data-toggle="tooltip" title="Not In store"></button>

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
                                                Jawa Perak price for its variant - Perak Standard starts at Rs. 2,52,677. The mentioned Perak price is the on-road price of Bhopal.

                                                Jawa Perak is a cruiser bike available in only 1 variant and 1 colour. The Jawa Perak is powered by 334cc BS6 engine which develops a power of 30.2 bhp and a torque of 32.74 Nm. With both front and rear disc brakes, Jawa Perak comes up with anti-locking braking system. This Perak bike weighs 185 kg and has a fuel tank capacity of 13.2 liters.
                                                The Perak is a historic brand for Jawa, and the name has been resurrected by the company for a factory-custom bobber. The motorcycle was showcased for the first time during the launch of the brand and after a year it has been now officially launched in the country.

                                                Being a factory-custom styled bobber, the Perak is one gorgeous looking motorcycle. It features a typical low-slung profile with a longer wheelbase as compared to the other Jawa models. It follows a blacked-out theme with a matte black-grey paint job and a black coloured theme for most of its mechanical parts. The design is accentuated with gold pinstriping on the fuel tank, side panels and fenders. The other biggest highlight of the motorcycle is the floating seat design with a tan-brown leather seat that gives the Perak the classic bobber stance.

                                                In terms of equipment, the Perak comes with conventional halogen lamp all around except for the tail lamp which is LED. The instrument cluster is a circular unit with a small digital unit for the odometer which has been lifted from the Jawa Standard. The motorcycle rides on telescopic forks up front and a monoshock mount below the seat for the rear. Braking is done by disc brakes at both ends, fortified by dual-channel ABS.

                                                As for the powertrain, the Perak gets a slightly larger 334cc engine compared to the Jawa Standard and Forty-Two. It continues to be a single-cylinder unit with liquid-cooling and is capable of churning out 30bhp and 31Nm in terms of power output figures. Transmission duties are handled by a six-speed gearbox.

                                                For its price and styling, the Jawa Perak competes against the likes of the Royal Enfield Classic 500 in the market.
                                            </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Suspension - Telescopic Hydraulic Fork</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension - Mono Shock Absorber, 7 Step Adjustable</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Transmission - 6 Speed Manual</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Kerb Weight - 185 kg</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Fuel Delivery System - Fuel Injection</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Reserve Fuel Capacity - 2.8Litres</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Speedometer - Analogue</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Storage Box - Yes</li>

                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - Dual Channel ABS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Brake Type - Disc</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty - 2 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty - 24000 Km</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Battery - 10A</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Odometer - Digital</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2" id="ex1-pills-2">
                                                <tr>
                                                    <th class="py-2">Engine Capacity</th>
                                                    <td class="py-2">334 cc</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Max Power</th>
                                                    <td class="py-2">30.2 bhp @ 7500 rpm</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Mileage </th>
                                                    <td class="py-2">30 kmpl</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">396 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">130 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission Type</th>
                                                    <td class="py-2">Chain Drive</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Tank Capacity</th>
                                                    <td class="py-2">13.2 litres</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Type</th>
                                                    <td class="py-2">Petrol</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Emission Standard</th>
                                                    <td class="py-2">BS6 Phase2</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Clutch</th>
                                                    <td class="py-2">Wet Multiplate</td>
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
                                                        Perak Standard

                                                    </a>
                                                    <strong class="text-dark">₹ 2,52,677</strong>
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
export default Thirdbike;