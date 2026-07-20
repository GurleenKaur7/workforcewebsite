
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
import { useRouter } from "next/navigation";

function Partners(){
const router=useRouter();
    
const icons=[
{img:"/images/Zee.png"},
{img:"/images/tellius153x86 1 (1).png"},
{img:"/images/3-1 1 (2).png"},
{img:"/images/image 18 (2).png"},
{img:"/images/6 (1) 1 (1).png"},
{img:"/images/10 (1) 1 (1).png"},
{img:"/images/tredence-153x86-1 1 (1).png"},
{img:"/images/2-1 1 (1).png"},
{img:"/images/zens 1 (1).png"},
{img:"/images/tiger153x86 1 (1).png"},
{img:"/images/23 1 (1).png"}

];
const handleClick = () => {
    router.push("/client");
  };

return (
    <div className="container mt-5">
      <h2 className="pb-2 border-bottom">Some of the organisations that work with us</h2>

      <div className="feature-section d-flex gap-4">
        
        <div className="left-box">
          {Array.from({ length: 4 }).map((_, row) => (
            <div className="icons-row d-flex gap-3 mb-3" key={row}>
              {icons.slice(row * 3, row * 3 + 3).map((icon, i) => (
                <div className="icon" key={i}>
                  <Image src={icon.img} width={60} height={60} alt="logo" />
                </div>
              ))}
            </div>
          ))}
          <button className="icon-btn btn btn-primary mt-2" onClick={handleClick}>Click Me</button>
        </div>

        
        <div className="right-box ms-4">
          
          <br/>
          <h2>Testimonials</h2>
          <hr />
          <p style={{fontSize:"15px"}}>
            What sets Women in Workforce apart is their dedication to supporting and empowering women professionals.<br/><br/>

The platform's emphasis on mentorship, career growth, and providing valuable <br/>resources such as podcasts and webinars is truly commendable. It creates A<br/> Holistic ecosystem that Fosters professional development and ensures That<br/> Women thrive in their chosen fields.
          </p>
          <br/>
          <hr />
          <p>— John Doe (Web Developer)</p>
          <button className="btn btn-light mt-2">See All</button>
        </div>
      </div>
    </div>
  );
}


    
export default Partners;