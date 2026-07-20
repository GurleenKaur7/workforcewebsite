
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../styles/styles.css";
import Link from "next/link";
function wow(){
    return(
 <div>
      {/* Hero / Top Background Image */}
      <div
        className="overflow-hidden position-relative"
        style={{ height: "30vh" }}
      >
        <Image
          src="/images/Group39.png"
          alt="Hero Image"
          fill
          priority
          className="rounded-3 shadow-lg border"
          style={{ objectFit: "cover" }}
        />

        {/* Left Logo */}
       
        {/* Right Nav + Button */}
       
      </div>

      {/* Rectangle66 Base Image */}
      <div
        className="overflow-hidden position-relative"
        style={{ height: "30vh", marginTop: "40px" ,height:"600px", width:"1000px",  marginLeft:"60px"}}
      >
        <Image
          src="/images/Rectangle66.png"
          alt="Rectangle 66"
          fill
          priority
          className="rounded-3 shadow-lg border"
          style={{ objectFit: "cover", backgroundColor: "#f0f0f0" }}
        />

        {/* Rectangle67 Image (Tilted) */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "0px",
            zIndex: 10,
            transform: "rotate(-10deg)",
          }}
        >
          <Image
            src="/images/Rectangle67.png"
            alt="Rectangle 67"
            width={150}
            height={150}
            priority
          />
        </div>

        {/* Benefits Image on top of Rectangle67, same tilt */}
        <div
          style={{
            position: "absolute",
            top: "45px", // centered on Rectangle67
            left: "15px",
            zIndex: 20,
            transform: "rotate(-10deg)",
            
          }}
        >
          <Image
            src="/images/benefits.png"
            alt="Benefits"
            width={80}
            height={75}
            priority
          />
        </div>

 <div
    style={{
      position: "absolute",
      top: "50%",
      left: "60%",
      transform: "translate(-50%, -50%)",
      width: "80%",       // adjust size to fit Rectangle66
      height: "auto",
      zIndex: 30,
    }}
  >
    {/* Group113 Image */}
    <Image
      src="/images/Group113.png"
      alt="Group113"
      width={30}        // adjust width to fit container nicely
      height={40}       // adjust height
      priority
    />

    {/* Text in front of bullets */}
    <span
      style={{
        position: "absolute",
        top: "2%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
      }}
    >
      Simple Registration
    </span>


        <span
      style={{
        position: "absolute",
        top: "22%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
      }}
    >
      Post Jobs In Just A Few Clicks
    </span>


    <span
      style={{
        position: "absolute",
        top: "46%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
      }}
    >
      Payment Through PayPal And Stripe
    </span>

    <span
      style={{
        position: "absolute",
        top: "69%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
      }}
    >
      Easy-To-Use Interface And Application Tracking System
    </span>

     <span
      style={{
        position: "absolute",
        top: "92%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
      }}
    >
      Multiple Membership Plans To Fit Your Need
    </span>



     <button
    style={{
      position: "absolute",
      top: "45%",           // align vertically with 3rd bullet
      left: "65%",          // slightly right of 3rd bullet text
      padding: "8px 16px",
      backgroundColor: "#ff4da6",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    Register as Employer
  </button>
</div>

      </div>


      <div className="container mt-5">

        <div
  className="pb-2 border-bottom"
  style={{ display: "inline-block" }} // ensures border matches image width
>
  <Image
    src="/images/Employer.png" // put your image in /public folder
    alt="About Us"
    width={400}   // adjust width as needed
    height={50}   // adjust height as needed
    priority
  />
</div>


<div className="d-flex justify-content-between">
  {/* Card 1 */}
  <div className="card" style={{ width: "30%",backgroundColor:"#ff4da6" }}>
   
    <div className="card-body">
      
    </div>
  </div>

  {/* Card 2 */}
  <div className="card" style={{ width: "30%" ,backgroundColor:"#ff4da6"}}>
   
    <div className="card-body"></div>
  </div>

  {/* Card 3 */}
  <div className="card" style={{ width: "30%" ,backgroundColor:"#ff4da6"}}>
   
    <div className="card-body"></div>
  </div>
</div>


      </div>
    </div>

    


    )
}
export default wow;