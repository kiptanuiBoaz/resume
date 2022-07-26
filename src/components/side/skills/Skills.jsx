import React from "react";
import Progressbar  from "../ProgressBar";

function Skills(){
    return(
        <div>
            <h3>Skills</h3>

            <p>UI/UX Design</p>
            <Progressbar bgcolor="#223b4d" progress="50"  height={8} />

            <p>Database Management (Mongo DB)</p>
            <Progressbar bgcolor="#223b4d" progress='60'  height={8} />

            <p>Adaptability</p>
            <Progressbar bgcolor="#223b4d" progress='55'  height={8} />

            <p>HTML & CSS</p>
            <Progressbar bgcolor="#223b4d" progress='95'  height={8} />

            <p>Javascript</p>
            <Progressbar bgcolor="#223b4d" progress='85'  height={8} />

            <hr/>
        </div>
    )
}

export default Skills;