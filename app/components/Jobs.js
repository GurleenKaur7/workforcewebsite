
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
function Jobs(){
const cards=[
    {img:"/images/cards12.png"},
    {img:"/images/cards13.png"},
    {img:"/images/cards14.png"},
    {img:"/images/cards15.png"},
    {img:"/images/cards16.png"},
    {img:"/images/cards17.png"},
    {img:"/images/cards18.png"},
    {img:"/images/cards19.png"},

];


    return(
<div className="container mt-5">
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-0 ">
       {cards.slice(0, 4).map((card, i) => (
  <div className="col" key={i}>
    <Image 
      src={card.img} 
      width={300} 
      height={300} 
      style={{ objectFit: "cover", display: "block" }} 
      alt="card"
    />
  </div>
))}

</div>
<div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-0 mt-3">
  {cards.slice(4, 8).map((card, i) => (
    <div className="col" key={i + 4}>
      <Image
        src={card.img}
        width={300}
        height={300}
        style={{ objectFit: "cover", display: "block" }}
        alt={`card-${i + 4}`}
      />
    </div>
  ))}
</div>

    </div>
  );
}


export default Jobs;