
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../styles/styles.css";
import Link from "next/link";
import { useRouter } from "next/router";
function Customer(){
return(

 <div style={{ position: "relative", minHeight: "100vh" }}>

      {/* LOGO TOP LEFT */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "15%"
        }}
      >
        <Image
          src="/images/logo5.png"   // make sure logo is in public/images
          alt="Logo"
          width={120}
          height={40}
          priority
        />
      </div>

<div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#e0e0e0", // only nav area
            padding: "8px 12px",

            
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "16px",
              margin: 0,
              padding: 0,
              listStyle: "none"
            }}
          >
            <li>
              <span style={{ cursor: "pointer", color: "#000" }}>Home</span>
            </li>
            <li>
              <span style={{ cursor: "pointer", color: "#000" }}>About</span>
            </li>
            <li>
              <span style={{ cursor: "pointer", color: "#000" }}>Jobs</span>
            </li>
            <li>
              <span style={{ cursor: "pointer", color: "#000" }}>WOW</span>
            </li>
            <li>
              <span style={{ cursor: "pointer", color: "#000" }}>Contact</span>
            </li>
          </ul>

          {/* SIGNUP BUTTON */}
          <button
            type="button"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <Image
              src="/images/button.png"
              alt="Sign-up"
              width={80}
              height={50}
            />
          </button>
          </div>




<div
  style={{
    position: "relative",
    top: "90px", // position below first section
    left: "20px",
    right: "16px",
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    marginTop:"20px"
  }}
>
  {/* Top Row: Left Icon + Content + Right Corner */}
  <div className="d-flex justify-content-between align-items-center mt-2">
    {/* Left Icon + Content */}
    <div className="d-flex align-items-center">
      <img
        src="/images/Rectangle99.png"
        alt="Left Icon"
        style={{ width: "40px", height: "40px", marginRight: "8px" }}
      />
      <div>
        <h6 className="mb-0">Part-time Customer Support Specialist</h6>
        
      </div>
    </div>

    {/* Right Corner: Small Icon + Text + Apply Button */}
    <div className="d-flex align-items-center gap-2">
      
      
      <button
        className="btn btn-primary btn-sm"
        style={{ backgroundColor: "#9c27b0", borderColor: "#9c27b0", borderRadius:"20px",width:"100px"}}
     >
        Apply
      </button>
    </div>
  </div>

  {/* Bottom Row: 3 Horizontal List Items */}
  <div className="mt-1 d-flex gap-3 justify-content-start">
    <div className="d-flex align-items-center gap-1">
      <img
        src="/images/Vector2.png"
        alt="List Icon 1"
        style={{ width: "16px", height: "16px" }}
      />
      <span style={{ fontSize: "12px" }}>Sector-17</span>
    </div>
    <div className="d-flex align-items-center gap-1">
      <img
        src="/images/regular.png"
        alt="List Icon 2"
        style={{ width: "16px", height: "16px" }}
      />
      <span style={{ fontSize: "12px" }}>Remote</span>
    </div>
    <div className="d-flex align-items-center gap-1">
      <img
        src="/images/location6.png"
        alt="List Icon 3"
        style={{ width: "16px", height: "16px" }}
      />
      <span style={{ fontSize: "12px" }}>Chandigarh UT</span>
    </div>
  </div>
<hr style={{
    marginTop: "16px", borderColor: "#ccc" }} />
   <p style={{marginLeft:"5%", color:"black"}}> Salary :      15,500  -     19000</p>
<hr style={{
    marginTop: "16px", borderColor: "#ccc" }} />
</div>




<div className="container mt-22">
    <h6 className="pb-2 ">Hi there!</h6>
    <p style={{fontSize:"10px"}}>  


We’re Driversnote, a fast-growing SaaS company based in Copenhagen, Denmark.<br/><br/>

We take pride in helping more than 1,500,000 users worldwide keep a mileage logbook. No one likes to do mileage documentation - so we try to remove this tedious work<br/>
 and make our customer’s life easier by saving them both time and money.<br/><br/>

Our primary markets are English-speaking; US, Canada, Australia and the UK - while around 5% of our users are from Denmark. So we have built an international team to <br/>
serve our customers from around the world.</p>
    </div>

<div className="container mt-5">
    <h6 className="pb-2  border-bottom">The Role</h6>
    <p style={{fontSize:"10px"}}>  


We’re full speed ahead in keeping our response time rapid and our service outstanding across all time zones, and are therefore in need of a friendly and passionate self-<br/>
driven individual to join our Customers Team as our new part-time Customer Support Specialist working from Copenhagen.<br/><br/>

Sound interesting?

</p>
    </div>


   <div  className="container mt-5">
    <h6 className="pb-2  border-bottom">We Imagine That You:</h6>
    

    <div style={{ marginTop: "16px", width: "80%", height: "auto",position:"relative" }}>
    <Image
      src="/images/Group114.png"
      alt="Group114"
      width={10}   // adjust width as needed
      height={10}   // adjust height as needed
      priority
    />


 <span
      style={{
        position: "absolute",
        top: "1%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
      Are located in or near Copenhagen.
    </span>
    <span
      style={{
        position: "absolute",
        top: "16%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
      Have relevant work experience in customer support or community management.
    </span>
 <span
      style={{
        position: "absolute",
        top: "30%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
     Are the type who cannot refrain from helping other people - you have a friendly and positive attitude and love engaging with and learning about others!
    </span>
    <span
      style={{
        position: "absolute",
        top: "45%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
     Are quite tech-savvy, curious, and motivated to gain a deep understanding of how our product works - inside and out.
    </span>

     <span
      style={{
        position: "absolute",
        top: "60%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >

        Are critical thinking and have problem-solving skills and high attention to detail.
    </span>

    <span
      style={{
        position: "absolute",
        top: "75%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >

      Are self-motivated and self-managing with excellent time management skills.
    </span>
     <span
      style={{
        position: "absolute",
        top: "92%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >

     Have strong spoken and written English and Danish skills to perform the responsibilities below.
    </span>


  </div>
    
</div>



<div  className="container mt-5">
    <h6 className="pb-2  border-bottom">Your Responsibilities:</h6>

 <div style={{ marginTop: "16px", width: "80%", height: "auto",position:"relative" }}>
    <Image
      src="/images/Group113.png"
      alt="Group114"
      width={15}   // adjust width as needed
      height={15}   // adjust height as needed
      priority
    />


 <span
      style={{
        position: "absolute",
        top: "1%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
      Clear and concise written communication with our users; you get a message across in just a few sentences.
    </span>
    <span
      style={{
        position: "absolute",
        top: "22%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
    Answering questions and advising current and potential customers on how best to use our product with a friendly tone primarily via mail but also via phone.
    </span>
 <span
      style={{
        position: "absolute",
        top: "46%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
    Collecting and synthesizing customer insights; being the voice of the customer to help your teammates become better marketers, designers, and builders.
    </span>
    <span
      style={{
        position: "absolute",
        top: "68%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
     Replying to product reviews across platforms.
    </span>

     <span
      style={{
        position: "absolute",
        top: "92%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >

       Help with internal shipping and logistics.
    </span>

   
  </div>
    
</div>



<div  className="container mt-5">
    <h6 className="pb-2  border-bottom">It Would Be Nice If You</h6>
   
   
<div style={{ marginTop: "16px", width: "80%", height: "auto",position:"relative" }}>
    <Image
      src="/images/Group113.png"
      alt="Group114"
      width={15}   // adjust width as needed
      height={15}   // adjust height as needed
      priority
    />


 <span
      style={{
        position: "absolute",
        top: "1%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
      Have experience in support software, onboarding customers, or collecting customer feedback.
    </span>
    <span
      style={{
        position: "absolute",
        top: "22%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
 Have communication skills in additional languages
    </span>
 <span
      style={{
        position: "absolute",
        top: "46%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >

        Have an interest in accounting or similar.
        </span>
    <span
      style={{
        position: "absolute",
        top: "68%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
     Have experience with mileage reimbursement
    </span>

     <span
      style={{
        position: "absolute",
        top: "92%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >

      Have read and enjoyed “Zappos: Delivering Happiness”.
    </span>

   
  </div>


   
    </div>

<div  className="container mt-5">
    <h6 className="pb-2  border-bottom">The Important Details:</h6>
  
  
  <div style={{ marginTop: "16px", width: "80%", height: "auto",position:"relative" }}>
    <Image
      src="/images/Group115.png"
      alt="Group114"
      width={15}   // adjust width as needed
      height={15}   // adjust height as needed
      priority
    />


 <span
      style={{
        position: "absolute",
        top: "1%",     // adjust to match first bullet
        left: "5%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
     Minimum 21 hours per week.
    </span>
    <span
      style={{
        position: "absolute",
        top: "28%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
It is expected that you can work 5 days a week: 4 weekdays and Saturday or Sunday.
    </span>
 <span
      style={{
        position: "absolute",
        top: "60%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >

      Danish work permit.
        </span>
    <span
      style={{
        position: "absolute",
        top: "88%",     // adjust to match first bullet
        left: "4%",
        color: "#000",
        fontWeight: "500",
        fontSize:"10px"
      }}
    >
   165 DKK /hour paid monthly
    </span>
    </div>
  
  
  
   </div>

<div  className="container mt-5">
    <h6 className="pb-2  border-bottom">Our Team</h6>


    <div style={{ width:"100%", height: "300px",maxWidth:"1400px",margin:"0 auto",position:"relative" }}>
  <img
    src="/images/Frame117.png" // replace with your image
    alt="Single Frame"
    style={{ width: "100%", height: "100%", objectFit: "contain" }}
  />




  <img
    src="/images/Group2000.png" // replace with your left arrow image
    alt="Left Arrow"
    style={{
      position: "absolute",
      top: "50%",
      left: "-20px",
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 10,
    }}
  />



  <img
    src="/images/Group3000.png" 
    alt="Right Arrow"
    style={{
      position: "absolute",
      top: "50%",
      right: "-20px", // moved outside
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 10,
    }}
  />



   
</div>
    </div>




<div style={{ display: "flex", justifyContent: "flex-end", maxWidth: "1400px", margin: "10px auto 0 auto" }}>
  <button
    style={{
      padding: "10px 20px",
      backgroundColor: "#BF49B3",
      color: "#000",
      border: "none",
      borderRadius: "20px",
      cursor: "default",
      color:"white",
      marginRight:"10%",
      width:"120px"

    }}
  >
    Apply
  </button>
</div>

<Footer/>


    </div>



    

    

)

}
export default Customer;