import React from "react";
import Progressbar  from "./ProgressBar";

function Skills(){
    return(
        <div>
            <p>testing Skills</p>

            <Progressbar bgcolor="white" progress="30"  height={15} />
            <Progressbar bgcolor="white" progress='60'  height={15} />
            <Progressbar bgcolor="white" progress='50'  height={15} />
            <Progressbar bgcolor="white" progress='85'  height={15} />
            <Progressbar bgcolor="white" progress='95'  height={15} />
        </div>
    )
}

export default Skills;