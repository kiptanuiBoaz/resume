import React from "react";
import Progressbar  from "../ProgressBar";

function Languages(){
    return(
        <div>
            <h3>Languages</h3>

            <p>English</p>
            <Progressbar bgcolor="#223b4d" progress="80"  height={8} />

            <p>Kiswahili</p>
            <Progressbar bgcolor="#223b4d" progress='70'  height={8} />

            <hr/>
        </div>
    )
}

export default Languages;