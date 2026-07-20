

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Options = () => {

  const router = useRouter(); 
  const styles = {
    innerContainer: {
      backgroundColor: "#808080",
      borderRadius: "8px",
      padding: "10px"
    },
    inputStyle: {
      backgroundColor: "#fff",
      margin: "2px",
      width: "100%"

    },
    button: {
      backgroundColor: "#ff4d8d",
      color: "#fff",
      border: "none",
      padding: "5px",
      borderRadius: "5px",
      fontWeight: "600",
      width: "100%"

    },
    leftContainer1: {
      backgroundImage: "url('/images/Rectangle78.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginBottom: "16px",
      padding: "10px",
      borderRadius: "8px",
      color: "#000",
      marginTop: "15px",
      marginLeft: "25px",
      flex:2
    
      


    },
    leftContainer2: {
      backgroundImage: "url('/images/Rectangle78.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: "10px",
      borderRadius: "8px",
      color: "#000",
      marginLeft: "25px",
      flex:1
      


    },



    rowItem: {
      marginTop: "0"
    },
    img: {
      width: "30px"
    },
    titleText: {
      margin: 0
    },
    countText: {
      margin: 0
    },
    applyButton: {
      width: "50px",
      height: "20px",
      backgroundColor: "pink",
      color: "white",
      border: "none"

    },


    rightContainer: {
      backgroundImage: "url('/images/Rectangle78.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: "8px",
      padding: "10px",
      color: "#000",
      marginTop: "0",
      
    },
    rowItem: {
      marginTop: "8px"
    },

    titleText: {
      margin: 0
    },
    infoText: {
      margin: 0,
      fontSize: "14px"
    },


    jobImg: {
      width: "60px",
      height: "60px",
      borderRadius: "8px"
    },
    logoImg: {
      width: "30px",
      height: "30px"
    },
    infoIcon: {
      width: "16px",
      height: "16px"
    },


    applyButton: {
      backgroundColor: "#ff4d8d",
      color: "#fff",
      border: "none",
      padding: "6px 12px",
      borderRadius: "5px",
      fontWeight: 600,
      cursor: "pointer"
    }


  };


  const SquarePermanent = () => (
    <div
      style={{
        width: "20px",
        height: "20px",
        marginRight: "8px",
        marginTop: "2px",
        borderRadius: "4px",
        backgroundColor: "#F06292",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 6.5L4.8 9L10 3"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );




  const leftList = [
    {
      id: 1, img: 'RectangleS.png', title: "Analyst", count: 17, isTicked: false
    },
    {

      id: 2, img: 'RectangleS.png', title: "Backend Developer", count: 31, isTicked: false

    },

    {
      id: 3, img: 'RectangleS.png', title: "Business Development", count: 53, isTicked: true
    },
    {
      id: 4, img: 'RectangleS.png', title: "Customer Service", count: 27, isTicked: false
    },
    {
      id: 5, img: 'RectangleS.png', title: "Customer Sucess", count: 35, isTicked: false
    },

    {
      id: 6, img: 'RectangleS.png', title: "CxO", count: 5, isTicked: false
    },
    {
      id: 7, img: 'RectangleS.png', title: "Data Science", count: 10, isTicked: false
    },
    {
      id: 8, img: 'RectangleS.png', title: "Design", count: 35, isTicked: true
    },
    {
      id: 9, img: 'RectangleS.png', title: "DevOps", count: 4, isTicked: false
    },
    {
      id: 10, img: 'RectangleS.png', title: "Engineer", count: 35, isTicked: false
    },
    {
      id: 11, img: 'RectangleS.png', title: "Finance", count: 25, isTicked: false
    },
    {
      id: 12, img: 'RectangleS.png', title: "Frontend developer", count: 25, isTicked: false
    },
    {
      id: 13, img: 'RectangleS.png', title: "Full-Stack developer", count: 35, isTicked: false
    },
    {
      id: 14, img: 'RectangleS.png', title: "HR", count: 10, isTicked: false
    },
    {
      id: 15, img: 'RectangleS.png', title: "Legal", count: 8, isTicked: false
    },
    {
      id: 16, img: 'RectangleS.png', title: "Marketing & Communication", count: 154, isTicked: false
    },
    {
      id: 17, img: 'RectangleS.png', title: "Mobile Development", count: 9, isTicked: false
    },
    {
      id: 18, img: 'RectangleS.png', title: "Operations", count: 35, isTicked: false
    },

    {
      id: 19, img: 'RectangleS.png', title: "Product Management", count: 14, isTicked: false
    },
    {
      id: 20, img: 'RectangleS.png', title: "Project Management", count: 25, isTicked: false
    },
    {
      id: 21, img: 'RectangleS.png', title: "Qualiy Assurance", count: 4, isTicked: false
    },
    {
      id: 22, img: 'RectangleS.png', title: "UI/UX Designer", count: 33, isTicked: true
    },
    {
      id: 23, img: 'RectangleS.png', title: "Other", count: 55, isTicked: false
    }

  ];
  const leftList2 = [

    {
      id: 1, img: 'RectangleS.png', title: "Internship", count: 59, isTicked: false
    },
    {
      id: 2, img: 'RectangleS.png', title: "Advisory board", isTicked: false
    },
    {
      id: 3, img: 'RectangleS.png', title: "Student", count: 41, isTicked: false
    },
    {
      id: 4, img: 'RectangleS.png', title: "Full-time", count: 100, isTicked: false
    },
    {
      id: 5, img: 'RectangleS.png', title: "Internship", count: 42, isTicked: true
    },
    {
      id: 6, img: 'RectangleS.png', title: "Internship", count: 10, isTicked: false
    },



  ];
  const listRight = [

    {
      id: 1, img: 'Rectangle98.png', title: 'Business Developer', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 2, img: 'Rectangle99.png', title: 'Part-time Customer Support Specialist', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 3, img: 'Rectangle100.png', title: 'Blockchain Developer', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 4, img: 'Rectangle101.png', title: 'UX/UI Designer', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 5, img: 'Rectangle102.png', title: 'IT Manager', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },

    {
      id: 6, img: 'Rectangle103.png', title: 'Business Developer', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 7, img: 'Rectangle104.png', title: 'Sanitation Manager', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 8, img: 'Rectangle105.png', title: 'Head of Finance', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 9, img: 'Rectangle106.png', title: 'Business Developer', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 10, img: 'Rectangle99.png', title: 'Business Developer', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 11, img: 'RectangleB.png', title: 'IT Manager', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 12, img: 'RectangleC.png', title: 'Graphic Designer', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },
    {
      id: 13, img: 'RectangleD.png', title: 'Head of Finance', address: "Sector17", jobType: "Remote", city: "Chandigarh UT", date: "6 days ago"

    },







  ];




  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Find your dream job now</h1>
        <p>5Lakh+ jobs for you to explore</p>
      </div>
      <div className="filterContainer">
        <div className="container" style={styles.innerContainer}>
          <div className="row align-items-end">
            <div className="col-3">
              <div className="inputGroup">
                <label htmlFor="jobtitle">Keyword</label>
                <input style={styles.inputStyle} type="text" />

              </div>
            </div>


            <div className="col-3">
              <div className="inputGroup">
                <label htmlFor="jobtitle">Location</label>
                <input style={styles.inputStyle} type="text" />

              </div>
            </div>


            <div className="col-3">
              <div className="inputGroup">
                <label htmlFor="jobtitle">Expertise</label>
                <input style={styles.inputStyle} type="text" />

              </div>
            </div>
            <div className="col-3">
              <button style={styles.button}>
                Go
              </button>
            </div>




          </div>
        </div>
      </div>
      <div className="row align-items-stretch">
        <div className="col-4 d-flex flex-column ">
          <div style={styles.leftContainer1} className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/images/Vector4.png"
                alt="Icon"
                style={{ width: "30px", height: "24px", marginRight: "8px" }}
              />
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#000" }}>
                Categories
              </span>
            </div>
            <hr />

            {leftList.map((el, index) => (
              <div className="row" style={styles.rowItem} key={index}>
                <div className="col-7">
                  <div className="d-flex align-items-center gap-2">
                    {el.isTicked ? (
                      <SquarePermanent />
                    ) : (


                      <img src="/images/RectangleS.png" alt="" style={styles.img} />)}
                    <h6 style={styles.titleText}>{el.title}</h6>
                  </div>
                </div>
                <div className="col-5 d-flex align-items-center">
                  <p style={styles.countText}>{el.count}</p>
                </div>
              </div>
            ))}
          </div>



          <div style={styles.leftContainer2} className="d-flex flex-column gap-3">


            <div className="d-flex align-items-center mb-3">
              <img
                src="/images/Vector4.png"
                alt="Icon"
                style={{ width: "30px", height: "24px", marginRight: "8px" }}
              />
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#000" }}>
                Categories
              </span>
            </div>
            <hr />
            {leftList2.map((el, index) => (
              <div className="row" style={styles.rowItem} key={index}>
                <div className="col-7">
                  <div className="d-flex align-items-center gap-2">

                    {el.isTicked ? (
                      <SquarePermanent />
                    ) : (

                      <img src="/images/RectangleS.png" alt="" style={styles.img} />)}
                    <h6 style={styles.titleText}>{el.title}</h6>
                  </div>
                </div>
                <div className="col-5 d-flex align-items-center">
                  <p style={styles.countText}>{el.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-8">
          <div style={styles.rightContainer} className="d-flex flex-column gap-3">
            {listRight.map((job,index) => (
              <div className="row mb-3 align-items-center" key={job.id} style={{ padding: "10px", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>

                <div className="col-7" key={job.id} style={styles.rowItem}>
                  <div className="d-flex align-items-center mb-2">
                    <img src={`/images/${job.img}`} alt={job.title} style={styles.jobImg} />
                    <h6 className="ms-2" style={styles.titleText}>{job.title}</h6>
                  </div>
                  <div className="d-flex gap-3" style={{ fontSize: "14px", color: "#555" }}>
                    <div className="d-flex align-items-center gap-1">
                      <img src="/images/Vector7.png" alt="address" style={styles.infoIcon} />
                      <span style={styles.infoText}>{job.address}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <img src="/images/Vector8.png" alt="jobType" style={styles.infoIcon} />
                      <span style={styles.infoText}>{job.jobType}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <img src="/images/Vector9.png" alt="city" style={styles.infoIcon} />
                      <span style={styles.infoText}>{job.city}</span>
                    </div>
                  </div>
                </div>


                <div className="col-5 d-flex align-items-center justify-content-end gap-2">
                  <img src="/images/pin.png" alt="Date" style={{ width: "16px", height: "16px" }} />
                  <p style={styles.infoText}>{job.date}</p>
                  <button style={styles.applyButton} onClick={()=>{
                    if(index===1){
                      router.push("/customer");
                    }
                  }
                    
                  }>Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>




      <div className="d-flex justify-content-end  align-items-start">


      </div>
    </div>











  )

}
export default Options;
