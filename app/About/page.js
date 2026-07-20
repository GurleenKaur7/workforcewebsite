"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../styles/styles.css";

export default function About() {
  return (
    <div>
      

      <div className="about-container">
        <h2 className="pb-2 border-bottom">About Us</h2>

        <div className="hero-container">
          <div className="hero-row">

            {/* LEFT SIDE TEXT */}
            <div className="hero-text">
              <p className="lead">
                Welcome to Women in Workforce, the premier platform dedicated to empowering and promoting women in the
                workplace. Our platform is designed to connect talented and ambitious women with diverse employment opportunities 
                across the United Kingdom, Europe, and India.
              </p>

              <p className="lead">
                At Women in Workforce, we understand the unique challenges and opportunities that women face in their professional
                lives. Our mission is to bridge the gender gap in various industries by providing a supportive and inclusive space for 
                women to thrive. Whether you are a recent graduate, a mid-career professional, or a seasoned expert, we are here to 
                assist you in advancing your career and reaching new heights.
              </p>

              <p className="lead">
                One of the core features of Women in Workforce is our exclusive job board, where employers from a wide range of 
                sectors actively seek to hire talented women. By curating job listings from esteemed companies, both large and 
                small, we provide a curated platform that prioritizes equal opportunity and gender diversity. Whether you are seeking 
                full-time positions, part-time work, freelance opportunities, or even remote roles, our platform caters to a diverse 
                array of professional aspirations.
              </p>

              <p className="lead">
                In addition to connecting women with employment opportunities, we believe in fostering personal and professional 
                growth. Through our engaging podcasts and insightful webinars, we bring you inspiring stories, expert advice, and 
                valuable insights from successful women leaders across various fields. These resources serve as a source of inspiration, 
                education, and mentorship, helping you navigate the challenges and make informed decisions as you progress in your 
                career.
              </p>

              <p className="lead">
                Women in Workforce is not just a platform; it is a community of like-minded individuals who share a common goal of 
                empowering women in the workforce. We encourage networking, mentorship, and collaboration among our members, 
                fostering a supportive environment where you can connect with peers, seek guidance, and build meaningful 
                relationships.
              </p>

              <p className="lead">
                Whether you are an employer committed to gender diversity in your organization or a talented woman seeking 
                professional growth, Women in Workforce is here to support you every step of the way. Join our platform today and 
                embark on a journey of empowerment, inspiration, and career advancement. Together, let's shape a more inclusive and 
                equal future for women in the workforce.
              </p>

              <p className="lead copyright">
                ©2023 WomenInForcement. All rights reserved.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="hero-image">
              <Image
                src="/images/Group22.png"
                alt="Hero"
                width={450}
                height={450}
                style={{ maxWidth: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>

       <div className="about-container" style={{ marginTop: "4rem" }}>
        <div className="hero-container">
          <div className="hero-row reverse-row">

            {/* LEFT SIDE IMAGE */}
            <div className="hero-image">
              <Image
                src="/images/Group75.png" // Add your second image here
                alt="Second Hero"
                width={450}
                height={450}
                style={{ maxWidth: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>

            {/* RIGHT SIDE TEXT */}
            <div className="hero-text">
              <p className="lead">
                In addition to connecting women with employment opportunities, we believe in fostering personal and professional 
                growth. Through our engaging podcasts and insightful webinars, we bring you inspiring stories, expert advice, and 
                valuable insights from successful women leaders across various fields.
              </p>

              <p className="lead">
                Women in Workforce is not just a platform; it is a community of like-minded individuals who share a common goal of 
                empowering women in the workforce. We encourage networking, mentorship, and collaboration among our members, 
                fostering a supportive environment where you can connect with peers, seek guidance, and build meaningful 
                relationships.
              </p>
              <p className="lead">
                Whether you are an employer committed to gender diversity in your organization or a talented woman seeking 
professional growth, Women in Workforce is here to support you every step of the way. Join our platform today and 
embark on a journey of empowerment, inspiration, and career advancement. Together, let's shape a more inclusive and 
equal future for women in the workforce.
              </p>

              <p className="lead copyright">
                ©2023 WomenInForcement. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>

      
    </div>
  );
}

     