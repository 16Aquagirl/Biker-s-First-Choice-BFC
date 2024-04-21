import tick from "./green_double.jpg";

const Thankyou = () => {
    return (
        <>
            <div>
                <div className="confirm">
                    <img className="tick" src={tick}></img>

                </div>
                <center>
                    <h2>ORDER CONFIRMED !!!</h2>
                    <p>We have received your order.</p>

                </center>
            </div>
        </>
    );
}
export default Thankyou;