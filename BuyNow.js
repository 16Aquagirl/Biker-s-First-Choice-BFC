import { useState } from "react";
import method from "./paymentmethod.png"
// import CreditCard from "../paymentcomponent/CreditCard";
// import Upi from "../paymentcomponent/Upi";
// import PhonePe from "../paymentcomponent/Phonpe";
// import Cod from "../paymentcomponent/Cod";

const BuyNow = () => {
  var myans = "";
  const [pmethod, setPmethod] = useState("");
  const myPaymentMethod = (e) => {
    let myval = e.target.value;
    setPmethod(myval);
  }
  // switch(pmethod)
  // {
  //   case "card":
  //        myans=<CreditCard/>
  //        break;
  //   case "upi":
  //         myans=<Upi/>
  //         break;
  //   case "phonepe":
  //         myans=<PhonePe/>
  //         break;
  //   case "cod":
  //         myans=<Cod/>  
  //         break;               
  // }
  return (
    <>
      <div className="paymentpage">
        <h1>Complete Your Order Details</h1>
        <br></br>
      </div>

      <div id="paymentForm">
        <div className="shippingForm">
          <form action="/action_page.php">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name" required />
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name" required/>
            <label for="lname">Address</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter Your Address" required/>
            <label for="lname">City</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter city" required/>
            <label for="lname">Contact no</label>
            <input type="text" id="lname" name="lastname" placeholder="Your Contact no" required/>
            <label for="lname">Email</label>
            <input type="text" id="lname" name="lastname" placeholder="Your Email" required/>
            <label for="lname">Landmark</label>
            <input type="text" id="lname" name="lastname" placeholder="Your Land Mark" required/>
            <label for="lname">State</label>
            <input type="text" id="lname" name="lastname" placeholder="Your State" required/>
            <br></br><br></br>
            <center>     <button className="final-submit"><a href="./thankyou">Submit</a></button> </center>
          </form>
        </div>
        
        <div id="paymentMethod">
          <img id="imgg" src={method} />
          <div className="selectt">
            <h1> Select Your Payment Method</h1>

            <div className="pay">
              <input type="radio" name="r1" value="card" onClick={myPaymentMethod} />
              <span>Credit/Debit Card</span>
              <br />
              <input type="radio" name="r1" value="upi" onClick={myPaymentMethod} />
              <span>UPI</span>
              <br />
              <input type="radio" name="r1" value="phonepe" onClick={myPaymentMethod} />
              <span>Phone Pe/ PayTM</span>
              <br />
              <input type="radio" name="r1" value="cod" onClick={myPaymentMethod} />
              <span> Cash On Delivery</span>
              {myans}
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
export default BuyNow;