import React from "react";
import facebook2 from "../imgs/facebookcolored.png"
import instagram2 from "../imgs/Instagram_icon.png"
function FlowMedia(){


    
    return(
        <div className="flow-media">
            <a href="https://instagram.com/tripolistudio?igshid=YmMyMTA2M2Y="><img src={instagram2} alt="insta"></img></a>
            <a href="https://www.facebook.com/profile.php?id=100090567190162&mibextid=ZbWKwL"><img src={facebook2} alt="facebook"></img></a>
        </div>
    )
}

export default FlowMedia;