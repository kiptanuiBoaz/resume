import React from "react";
import { GrFacebook } from 'react-icons/gr';
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {GrTwitter} from "react-icons/gr";


function Links(){
    return(
        <div className="links">
            <h3>Links</h3>

            <p> 
             <span><GrFacebook/></span>&nbsp; <a  rel="noreferrer"  target="_blank" href="https://www.facebook.com/boaz.serem.90"  >Facebook</a>
            </p>
            <p>
             <span><BsGithub/></span>&nbsp; <a  rel="noreferrer"  target="_blank" href="https://github.com/kiptanuiBoaz" >GitHub</a>
            </p>
            <p>
                <span><BsLinkedin/></span>&nbsp; <a  rel="noreferrer"  target="_blank" href="https://www.linkedin.com/in/kiptanui-boaz-466154217/" >LinkedIn</a>
            </p>
            <p> 
                <span><GrTwitter/></span>&nbsp; <a  rel="noreferrer"  target="_blank" href="https://twitter.com/CleverFreak254?t=SuN-RDa9t8eXnzm-a2kpUw&s=09">Twitter</a>
            </p>
            
        </div>
    )
}

export default Links;