
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
function Footer(){

return(

<div className="footer-wrapper mt-5">
  <Image
    src="/images/footer.png"
    alt="Footer"
    width={1200}       
    height={120}       
    style={{ display: "block", width: "100%", height: "auto" }}
  />
</div>


)


}

export default Footer;