
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";

export default function AboutSection() {
  return (
    <div className="mt-5">
      <div className="container">
        <h2 className="pb-2 border-bottom">About WomenInForcement</h2>
      </div>

      <div className="carousel-box d-flex align-items-center gap-4 mt-3">
        {/* Text Section */}
        <div>
          <p style={{ lineHeight: "1.6" }}>
            Welcome to Women in Workforce, the premier platform dedicated to empowering and promoting women in the workplace. 
            Our platform is designed to connect talented and ambitious women with diverse employment opportunities across the United Kingdom, Europe, and India.
            <br /><br />
            At Women in Workforce, we understand the unique challenges and opportunities that women face in their professional lives. 
            Our mission is to bridge the gender gap in various industries by providing a supportive and inclusive space for women to thrive. 
            Whether you are a recent graduate, a mid-career professional, or a seasoned expert, we are here to assist you in advancing your career and reaching new heights.
          </p>
          <button className="more-btn btn btn-primary">More About Us</button>
        </div>

        {/* Image Section */}
        <div className="carousel-image">
          <Image
            src="/images/videoslider-1.png"
            alt="Empowerment Image"
            width={500}
            height={400}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      
    </div>
  );
}