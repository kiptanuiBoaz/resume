import React from "react";
import Details from "./details/Details";
import Propic from "./propic/Propic";
import Links from "./Links/Links";
import Skills  from "./skills/Skills";
import Languages from "./languages/Languages";
import "./Side.css"
import Hobbies from "./hobbies/Hobbies";

function Side(){
    return(
        <section className="side">
            <Propic/>
            <Details/>
            <Links/>
            <Skills/>
            <Languages/>
            <Hobbies/>
        </section>
    )
}

export default Side;