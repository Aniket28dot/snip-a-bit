import React from "react";
import { useLocation } from "react-router-dom";

function Postbook() {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className="card postcard">
        <div className="card-body">
            <h1>{state.bookName}</h1>
            <h4>{state.chapter}</h4>
            <p>{state.bitTitle}</p>
            <p>{state.bitContent}</p>
            <p>Genre: {state.genre}</p>
        </div>
        </div>
    );
};

export default Postbook;