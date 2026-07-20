
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
function Feature(){


    const items = [ 
        { img: "/images/Group22-5.png", title: "Women Webinars" },
 { img: "/images/Group22-6.png", title: "Women Tech" }, 
 { img: "/images/Group22-7.png", title: "Women Networking" },
  { img: "/images/Group22-8.png", title: "Women Podcast" },
 ];
    return(
<div className="container mt-4">
 <h2 className="pb-2">What we offer</h2> 
 <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
 {items.map((items,i)=>
<div className="col" key={i}>
    <div className="feature-box">
         <div className="feature-icon"> 
            <Image src={items.img} width={120} height={120} alt={items.title} />
             </div>
              <h3>{items.title}</h3>
               <p>Lorem ipsum text placeholder describing the feature.</p> </div>
                </div>



)}
 </div>
 </div>

    );





}
export default Feature;