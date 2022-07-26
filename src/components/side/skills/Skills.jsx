import React from "react";
import Progressbar  from "../ProgressBar";

function Skills(){
    return(
        <div>
            <h3>Skills</h3>

            <p>UI/UX Design</p>
            <Progressbar  progress="50"  height={8} />

            <p>Database Management (Mongo DB)</p>
            <Progressbar  progress='60'  height={8} />

            <p>Adaptability</p>
            <Progressbar  progress='55'  height={8} />

            <p>HTML & CSS</p>
            <Progressbar  progress='95'  height={8} />

            <p>Javascript</p>
            <Progressbar progress='85'  height={8} />

            <hr/>
        </div>
    )
}

export default Skills;