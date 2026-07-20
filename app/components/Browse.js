
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
function Browse(){
    return(

<div className="container mt-3"> 
    <div className="container px-4 py-5" id="featured-3">
         <h2 className="pb-2">Brows Jobs By</h2> </div> 
         <div className="row mt-1">
         <div className="col-lg-10 offset-lg-1"> 
            <div className="p-3 shadow-sm" style={{border:"1px solid #ccc", borderRadius:"8px"}}>
                 <div className="row g-3 align-items-start">
             <div className="col-lg-3">
                 <input type="text" className="form-control profession-input" placeholder="Professions"/> </div>
                   <div className="col-lg-3"> 
                    <input type="text" className="form-control " placeholder="Recommended For You"/>
                     </div> 
                      <div className="col-lg-3">
                         <input type="text" className="form-control" placeholder="Featured Jobs"/> </div>
                          <div className="col-lg-3">
                             <input type="text" className="form-control" placeholder="Location"/> </div>
                              </div>
                               </div> 
                               </div>
                                </div>
                                 </div>




    )
}
export default Browse;