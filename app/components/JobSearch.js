"use client";
import React from "react";
import Image from "next/image";
import styles from "../components/styles/main.css";
function JobSearch(){
     return (
    <div className="container mt-0">
      <div className="p-3" style={{ border: "2px solid #ccc", borderRadius: "8px" }}>
        <div className="row align-items-end"> {/* Single row */}
          <div className="col-md-3">
            <label htmlFor="keywords"><strong>Keywords:</strong></label>
            <input type="text" className="form-control" id="keywords" placeholder="Enter job title" />
          </div>

          <div className="col-md-4">
           <label htmlFor="location" className="d-block"><strong>Location:</strong></label>
           
            
           
           
            <input type="text" className="form-control" id="location" placeholder="Location" />
           
          
          </div>

          <div className="col-md-4">
            <label htmlFor="expertise" className="d-block"><strong>Expertise:</strong></label>
            <input type="text" className="form-control" id="expertise" placeholder="Expertise" />
          </div>

          <div className="col-md-1 d-flex">
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#9c27b0", borderColor: "#9c27b0" }}
            >
              GO
            </button>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default JobSearch;