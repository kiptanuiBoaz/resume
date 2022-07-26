import React from "react";
import { ImLocation2} from 'react-icons/im';
import {IoMdCall} from "react-icons/io"
import {MdEmail} from "react-icons/md"


function Details (){
    return(
        <div>

            <h3>Details</h3>
            <p>
                <span><ImLocation2/></span>&nbsp;Eldoret, Kenya
            </p>
            <p>
                <span><IoMdCall/></span>&nbsp;+254743637613
            </p>
            <p>
                <span><MdEmail/></span>&nbsp;boaserem022@gmail.com
            </p>

            <hr/>
        </div>
    )
}

export default Details;