"use client";
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Client(){
    return(

  <div>
    


<h2
  className="pb-2 border-bottom"
  style={{ marginRight: "20px" }}
>
  Our Customers
</h2>

<div className="container px-4 py-3" id="icon-grid">
  <div className="row justify-content-center py-5">
    <div className="col-12 text-center">

      {/* IMAGE WRAPPER */}
      <div className="img-box">
        <Image
          src="/images/logosg.png"
          alt="All Icons"
          width={800}
          height={400}
          className="main-img"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        {/* BOTTOM CENTER ICONS */}
        <div className="bottom-icons">
            <span className="line"></span>

          <Image src="/images/left.png" alt="Left" width={30} height={30} />
          <Image src="/images/right.png" alt="Right" width={30} height={30} />
        <span className="line"></span>

        </div>
      </div>

    </div>
  </div>
</div>


<h2
  className="pb-2 border-bottom"
  
>  Testimonials</h2>
  <div className="container marketing  mt-5">


    
      <div className="row justify-content-center">

        {/* Column 1 */}
        <div className="col-lg-4 text-center mb-5" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFEFFD",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "60px 15px 15px",
              overflow: "visible",
              height:"400px"

            }}
          >
            <div
              style={{
                width: "140px",
                height: "70px",
                backgroundColor: "#fff",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
                borderTopLeftRadius: "70px",
                borderTopRightRadius: "70px",
                zIndex: 1
              }}
            ></div>

            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
              }}
            >
              <Image
                src="/images/Ellipse.png"
                alt="Circle Image 1"
                width={140}
                height={140}
              />
            </div>

            
            <p style={{marginTop:"100px"}}>"I highly recommend Women in Workforce 
to any employer seeking to build a diverse 
and inclusive workforce. It is a game-changer 
for organizations committed to gender 
equality, and I am proud to be a part of this 
empowering community."<br/>
<strong style={{marginTop:"30px"}}>John Doe</strong> (Web developer)
</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-lg-4 text-center mb-5" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFEFFD",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "60px 15px 15px",
              overflow: "visible",
              height:"400px"
            }}
          >
            <div
              style={{
                width: "140px",
                height: "70px",
                backgroundColor: "#fff",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
                borderTopLeftRadius: "70px",
                borderTopRightRadius: "70px",
                zIndex: 1
              }}
            ></div>

            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2
              }}
            >
              <Image
                src="/images/Ellipse.png"
                alt="Circle Image 2"
                width={140}
                height={140}
              />
            </div>

            
            <p style={{marginTop:"100px"}}>"What sets Women in Workforce apart is 
their dedication to supporting and empowering 
women professionals. The platform's emphasis 
on mentorship, career growth, and providing 
valuable resources such as podcasts and 
webinars is truly commendable. It creates a 
holistic ecosystem that fosters professional 
development and ensures that women
 thrive in their chosen fields."<br/>

 <strong style={{marginTop:"30px"}}>John Doe</strong> (Web developer)
</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-lg-4 text-center mb-5" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFEFFD",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "60px 15px 15px",
              overflow: "visible",
              height:"400px"
            }}
          >
            <div
              style={{
                width: "140px",
                height: "70px",
                backgroundColor: "#fff",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
                borderTopLeftRadius: "70px",
                borderTopRightRadius: "70px",
                zIndex: 1
              }}
            ></div>

            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2
              }}
            >
              <Image
                src="/images/Ellipse.png"
                alt="Circle Image 3"
                width={140}
                height={140}
              />
            </div>

            
            <p style={{marginTop:"100px"}}>"Through Women in Workforce, we have 
been able to reach a broader pool of 
exceptional candidates who bring diverse 
perspectives and valuable skills to our 
team. The platform's user-friendly interface 
and comprehensive job listings have made 
our hiring process more efficient 
and streamlined."<br/>


<strong style={{marginTop:"30px"}}>John Doe</strong> (Web developer)
</p>
          </div>
        </div>

      </div>
</div>
      
    </div>
    
            )
}
export default Client;