import hunter from "./enfieldblue.webp";

const Checkout = () => {

    return (
        <>
            <body className="check-out-body">
                <div className="check-main">
                    <h1>ORDER DETAILS</h1>
                </div>

                <div className="check-box">
                    <div className="check-details">
                        <h3>Royal Enfield Hunter 350</h3>
                        <br></br>
                        <h4>Price : 1,49,000</h4>
                        <br></br>
                        <h4>Color : Black</h4>
                        <br></br>
                        <h3>On-Road Price : 1,49,000</h3>
                        <br></br><br></br><br></br>
                        <button><a href="./home">Checkout</a></button>
                    </div>
                    <div className="check-img">
                        <img src={hunter} />
                    </div>
                </div>
            </body>
        </>
    );
}
export default Checkout;