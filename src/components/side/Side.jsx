import React from "react";
import Details from "./Details";
import Propic from "./Propic";
import Links from "./Links"

function Side(){
    return(
        <section className="side">
            <Propic/>
            <Details/>
            <Links/>
        </section>
    )
}

export default Side;