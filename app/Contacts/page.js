
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../styles/styles.css";
function Contacts() {
  return (
    <div>
      

      <div className="position-relative w-100" style={{ height: "400px" }}>
        {/* Image */}
        <Image
          src="/images/Group13.png"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Text overlay */}
        <div
          className="position-absolute d-flex flex-column justify-content-center"
          style={{
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "left",
          }}>
        
          <h2
            className="pb-2 border-bottom"
            style={{ color: "black", borderBottom: "2px solid pink" }}
          >
            Contact Us
          </h2>
          <p>If you would like to make an inquiry, please use the form below</p>
          <p>and our team will get back to you within one business day</p>
        </div>
      </div>

      <div className="container mt-5">
        <h3 style={{ textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and
        </h3>
        <p style={{ textAlign: "center" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old.
        </p>
      </div>

      <div className="container mt-5">
        <h2 className="pb-2 border-bottom">Contact Us On</h2>
        <p className="phone-number">+91 998898898</p>
        <br />

        <p>
          If you would like to make an enquiry, please use the form below
          <br />
          our team will catch up
        </p>
 <div className="form-feature-section">

        <div className="form-column">

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">1. First Name*</label>
              <input type="text" id="firstName" placeholder="Enter your first name" />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">2. Last Name*</label>
              <input type="text" id="lastName" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">3. Email*</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">4. Subject*</label>
              <input type="text" id="subject" placeholder="Enter subject" />
            </div>
          </div>

          <div className="form-row full-width">
            <div className="form-group">
              <label htmlFor="message">5. Message*</label>
              <textarea id="message" rows="5" placeholder="Type your message"></textarea>
              <button className="send-btn mt-5">Send</button>
            </div>
          </div>

        </div>

<div className="feature-column">

          <div className="feature-grid">
            <div className="feature-ikon">
              <Image src="/images/enquiriesicon-1.png" width={50} height={50} alt="Enquiries" />
            </div>
            <div className="feature-text">
              <h2>Enquiries</h2>wmeninworkforce.com
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-ikon">
              <Image src="/images/navicon-1.png" width={50} height={50} alt="Icon 2" />
            </div>
            <div className="feature-text">
              <h2>Office location</h2>
              Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-ikon">
              <Image src="/images/callicon-1.png" width={50} height={50} alt="Icon 3" />
            </div>
            <div className="feature-text">
              <h2>Phone</h2>+91 99889988998
            </div>
          </div>


       </div>

 </div>
 </div>

      
    </div>
  );
}

export default Contacts;