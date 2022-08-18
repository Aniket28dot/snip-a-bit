import React from "react";
import { useLocation } from "react-router-dom";

function Postbook() {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className="card postcard">
        <div className="card-body">
            <h1>{state.ClipTitle}</h1>
            <iframe className="postclipframe" src={state.ClipLink + "?start="+ state.startTime +"&end=" + state.endTime} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullScreen></iframe>
            <h4>{state.ClipDesc}</h4>
            <p>Clip Tag: {state.ClipTag}</p>
        </div>
        </div>
    );
};

export default Postbook;