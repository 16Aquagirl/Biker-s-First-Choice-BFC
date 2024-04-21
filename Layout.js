import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import logo from "./logo MAIN.png";
import { FaBagShopping } from "react-icons/fa6";

import { useState ,useEffect } from "react";

const Layout = () => {
  const mycartData = useSelector((state) => state.addtocart.cart);
  const proCount = mycartData.length;


  const [scrolling, setScrolling] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Effect hook to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Document</title>
        <link rel="stylesheet" href="./static/css/app1/style.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Raleway&family=Rock+Salt&display=swap"
          rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="{% static 'style/style.css' %}"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <link href="https://www.flaticon.com/free-icons/bike"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>

      <body>
        <div>
          <div class={scrolling ? 'navbar scrolled' : 'navbar'} id="nav" >
          {/* // onScroll={() => {
            const header = document.querySelector('#nav');

            if (window.scrollY > 120) {
              header.classList.add('scrolled');
            }
            else {
              header.classList.remove('scrolled')
            }
        */}
            <div id="main">
              <a class="logo" onClick={() => {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
              }
              }  >&#9776; </a>

              <div className="icon">
                <img className="icon" src={logo} />
                <div className="logo-name">
                  <h5>Biker's </h5>
                  <h5>First</h5>
                  <h5>Choice</h5>
                </div>
              </div>
            </div>

            <button class="pushablelog"><Link to="login"><span class="front">Sign In</span></Link></button>

            <div id="cartbag">
              <ul>
                <li>
                  {proCount == 0 ? "" :
                    <span className="cartcount">
                      {proCount}
                    </span>
                  }

                  <Link to="shop" className="shopbag">
                    <FaBagShopping />
                  </Link>

                </li>
              </ul>
            </div>
          </div>

          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onClick={() => {
              document.getElementById("mySidenav").style.width = "0";
              document.getElementById("main").style.marginLeft = "0";
              document.body.style.backgroundColor = "white";
            }

            } >&times;</a>
            <Link to="home"> Home</Link>
            <Link to="about">About</Link>
            <Link to="login">LogIn</Link>
            <Link to="login">Bikes</Link>
            <Link to="electric">Specifications</Link>
            <Link to="reviews">Reviews</Link>
            <Link to="contact">Contact Us</Link>
          </div>
        </div>
        <Outlet />
      </body>
    </>
  )
}
export default Layout;