
"use client";
import React from "react";
import { useEffect,useState } from "react";
import styles from "./pattern.module.css";
import Image from "next/image";
function Dummy(){
    const [usersData,setUsersData]=useState([]);
useEffect(()=>{
getUsersData();
},[])




async function getUsersData(){
    const url="https://dummyjson.com/users";

    try{
 let response= await fetch(url);
    response= await response.json()
    setUsersData(response.users)
    }
    catch(err){
console.log(err);
    }

    /*
    let response= await fetch(url);
    response= await response.json()
   
    setUsersData(response.users)
*/
 }


  console.log(usersData);
    return(
        <div>
            <h1> Fetch data from API</h1>
            {
                usersData && usersData.map((user)=>(
                    
                    <ul key={user.id} className={styles.userList}>
<li>
             <img
                src={user.image||  "https://via.placeholder.com/100"}  // user image from API
                alt={`${user.firstName} ${user.lastName}`}
                width={100}       // adjust width
                height={100}      // adjust height
              />
            </li>
                        
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                    </ul>


                ))
            }
        </div>
    )
}
export default Dummy;