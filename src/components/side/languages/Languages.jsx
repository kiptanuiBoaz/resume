import React from "react";
import Progressbar  from "../ProgressBar";

function Languages(){
    return(
        <div>
            <h3>Languages</h3>

            <p>English</p>
            <Progressbar  progress="80"  height={8} />

            <p>Kiswahili</p>
            <Progressbar  progress='70'  height={8} />

            <hr/>
        </div>
    )
}

export default Languages;