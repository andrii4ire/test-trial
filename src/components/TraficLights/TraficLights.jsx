import { useState } from "react";
import "./styles.scss";
const TraficLights=()=>{
    const [color, setColor]= useState();
    return(
        <div>
            <div className={`green-yellow ${color}`}>Green or Yellow</div>
            <div className='wrapp-color'>

                <div className='butt-green' onClick ={()=>{
                    setColor('green')
                }}>Green</div>
                <div className='butt-yellow' onClick={()=>{
                    setColor('yellow')
                }}>Yellow</div>
            </div>

        </div>
    )
}

export default TraficLights;