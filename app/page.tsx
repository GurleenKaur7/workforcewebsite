
"use client";

import Header from "./components/Header";
import Banner from "./components/Banner";
import JobSearch from "./components/JobSearch"
import Feature from "./components/Feature";
import Browse from "./components/Browse";
import Jobs from "./components/Jobs";
import Organisation from "./components/Organisation"
import Partners from "./components/Partners"
import Contaact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      
      <Banner/>
      <JobSearch/>
      <Feature/>
      <Browse/>
      <Jobs/>
      <Organisation/>
      <Partners/>
      <Contaact/>
      
    </div>
  );
}