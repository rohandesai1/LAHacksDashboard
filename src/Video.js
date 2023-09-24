import React from 'react'
import { useState} from 'react'



export default function Video() {

    const [autoplayValue, setAutoplayValue] = useState(false) 
    const [introVidValue, setIntroVid] = useState(true)

    setTimeout(function(){
        setIntroVid(false)
    }, 5500)
   
    setTimeout(function () {
        setAutoplayValue(true)
    }, 4000);



    return (
        <div>

        <div className="introVideo">

          {introVidValue && <video autoPlay muted>
                <source type="video/mp4" src="./la_hacks_intro_video.mp4" />
            </video>}

        </div>
        
        <div className="rollThroughVideo">
                
            {autoplayValue && <video autoPlay muted>
                <source type="video/mp4" src="./lahacksanimation.mp4" />
            </video>}

        </div>

        </div>


    )
}


