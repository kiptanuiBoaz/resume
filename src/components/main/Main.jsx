import React from "react";
import "./main.css"
import Profile from "./profile/Profile";
import Employment from "./employment/Employment";
import Education from "./education/Education";
import Courses from "./courses/Courses";
import Footer from "./footer/Footer"

function Main(){
    return(
        <section className="main">
            <Profile/>     
            <Employment/>   
            <Education/>
            <Courses/> 
            <Footer/>   
        </section>
    )
}

export default Main;