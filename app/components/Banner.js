import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
function Banner(){
    return(
        <div> 
        <Image src="/images/banner1-1.png" className="d-block w-100" alt="First slide" height={500} width={1200} style={{objectFit: "cover"}}/>
        </div>
    )
}
export default Banner;