import React, { useState } from "react";
import { useNavigate } from "react-router";
import BlackN from "./blackNav";

function ComposeClip() {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (value.length >= 2000) {
            window.alert("Content field cannot contain more than 2000 characters.")
        }
        else setInputs(values => ({...values, [name]: value}))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/composeclipbit", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            const resJson = res.json();
            if (res.status === 200) {
                setInputs({});
            }
        }).catch((err) => {
            console.log(err);
        });
        navigate('/clipbits');
    }

    return(
        <div>
            <BlackN></BlackN>
            <h1 id="bkbitheading">Compose a ClipBit</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label>Title */}
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Clip Title"
                            name="ClipTitle"
                            value={inputs.ClipTitle}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <div className="form-group">
                    {/* <label>Title */}
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Clip Link"
                            name="ClipLink"
                            value={inputs.ClipLink}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <div className="form-group">
                <input
                            className="form-control" 
                            type="number"
                            placeholder="Start Time (in sec)"
                            name="startTime"
                            value={inputs.startTime}
                            onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <input
                            className="form-control" 
                            type="number"
                            placeholder="End Time (in sec)"
                            name="endTime"
                            value={inputs.endTime}
                            onChange={handleChange}
                />
                </div>
                <div className="form-group">
                        <textarea 
                            className="form-control"
                            cols="40" rows="10"
                            placeholder="Clip Description"
                            maxLength={3000}
                            name="ClipDesc"
                            value={inputs.ClipDesc}
                            onChange={handleChange}
                        />
                </div>
                <div className="form-group">
                <input
                            className="form-control" 
                            type="text"
                            placeholder="Clip Tag"
                            name="ClipTag"
                            value={inputs.ClipTag}
                            onChange={handleChange}
                />
                </div>
                <div id="insertbtn">
                    <button type="submit" className="btn btn-dark btn-md" name="button">Insert ClipBit</button>
                </div>
            </form>
        </div>
    )
}

export default ComposeClip;