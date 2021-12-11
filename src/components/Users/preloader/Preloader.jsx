import React from "react";
import preloader from "./1491.gif";

const Preloader = () => {
    return (
        <div style={ {backgroundColor: "white"} }>
            <img src={preloader} alt="preloader!" />
        </div>
    )
}

export default Preloader;