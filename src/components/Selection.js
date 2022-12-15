import React,{ useState } from "react";
import "../styles/Child.css";


const Selection=(props)=>{
    const [data, updateSelectionStyle] = useState({background:""});
    return(
        <div className="fix-box" style={data} onClick={()=>props.applyColor(updateSelectionStyle)}>
        <h2 className="subheading">Selection</h2>
        </div>
    )
}
export default Selection;