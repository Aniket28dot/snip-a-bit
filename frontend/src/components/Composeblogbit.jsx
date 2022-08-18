import React, { useState } from "react";
import { useNavigate } from "react-router";
import BlackN from "./blackNav";

function ComposeBlog() {

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
        fetch("http://localhost:9000/composeblogbit", {
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
        navigate('/blogbits');
    }

    return(
        <div>
            <BlackN></BlackN>
            <h1 id="blbitheading">Compose a blogBit</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label>Title */}
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Bit Title"
                            name="title"
                            value={inputs.title}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <div className="form-group">
                    {/* <label>Post */}
                        <textarea 
                            className="form-control"
                            cols="40" rows="10"
                            placeholder="Bit Content"
                            maxLength={3000}
                            name="content"
                            value={inputs.content}
                            onChange={handleChange}
                            required
                        />
                    {/* </label> */}
                </div>
                <div className="form-group">
                    {/* <label>Title */}
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Bit Category"
                            name="category"
                            value={inputs.category}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <div id="publishbtn">
                    <button type="submit" className="btn btn-md" name="button">Insert Blog Bit</button>
                </div>
            </form>
        </div>
    )
}

export default ComposeBlog;