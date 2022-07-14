import React from "react";
import Progressbar  from "./ProgressBar";

function Skills(){
    return(
        <div>
            <p>testing Skills</p>

            <Progressbar bgcolor="white"   height={30} />
            <Progressbar bgcolor="white" progress='60'  height={30} />
            <Progressbar bgcolor="white" progress='50'  height={30} />
            <Progressbar bgcolor="white" progress='85'  height={30} />
            <Progressbar bgcolor="white" progress='95'  height={30} />
        </div>
    )
}

export default Skills;