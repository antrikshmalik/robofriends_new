import React from "react";
// test comment
const Scroll = (props) =>{
    return (
        <div style={{overflowY : 'scroll', border: '1px solid black', height: '70vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;