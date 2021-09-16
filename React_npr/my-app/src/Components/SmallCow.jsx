//import React from "react";
//import SmallCow from './SmallCow';

function SmallCow(props) {
    return (<div className="small-circle" style={{backgroundColor: props.color}}>{props.color}</div>);
}      

export default SmallCow;