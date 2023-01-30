import React from "react";

const Square = (props) => {
    return(
        <div 
        onClick={props.onClick}
        style={{
            border: "1.5px solid",
            height: "150px",
            width:"150px",
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            fontSize : 50
        }} 
        className="square">
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;