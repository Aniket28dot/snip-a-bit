import React from "react";
import { useLocation } from "react-router-dom";

function Postblog() {
    const { state } = useLocation();
    return (
        <div className="card postcard">
        <div className="card-body">
            <h1>{state.title}</h1>
            <p>{state.content}</p>
            <p>Category: {state.category}</p>
        </div>
        </div>
    );
};

export default Postblog;