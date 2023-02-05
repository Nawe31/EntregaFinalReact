import"./Button.css";
import React from "react";



export default function Button(props){
    
    let [colorState]= React.useState("orange");
  

    let styleButton = {
        padding: props.padding,
        backgroundColor: colorState,
    };
    
    
    return (<button onClick={props.onClick} style={styleButton} className="btn">{props.children}{props.text}</button>);
}
