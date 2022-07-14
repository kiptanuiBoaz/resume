import React from "react";
import Details from "./Details";
import Propic from "./Propic";
import Links from "./Links";
import Skills  from "./Skills";

function Side(){
    return(
        <section className="side">
            <Propic/>
            <Details/>
            <Links/>
            <Skills/>
        </section>
    )
}

export default Side;