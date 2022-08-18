import React, { useState } from "react";
import { useNavigate } from "react-router";
import BlackN from "./blackNav";

function ComposeBook() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (value.length >= 2000) {
            window.alert("Content field cannot contain more than 2000 characters.")
        }
        else setInputs(values => ({ ...values, [name]: value }))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/composebookbit", {
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
        navigate('/bookbits');
    }

    return (
        <div>
            <BlackN></BlackN>
            <h1 id="bkbitheading">Compose a bookBit</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label>Title */}
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Book Name"
                        name="bookName"
                        value={inputs.bookName}
                        onChange={handleChange}
                    />
                    {/* </label> */}
                </div>
                <div className="form-group">
                    {/* <label>Title */}
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Chapter"
                        name="chapter"
                        value={inputs.chapter}
                        onChange={handleChange}
                    />
                    {/* </label> */}
                </div>
                <div className="form-group">
                    {/* <label>Title */}
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Bit Title"
                        name="bitTitle"
                        value={inputs.bitTitle}
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
                        name="bitContent"
                        value={inputs.bitContent}
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
                        placeholder="Bit Genre"
                        name="genre"
                        value={inputs.genre}
                        onChange={handleChange}
                    />
                    {/* </label> */}
                </div>
                <div id="insertbtn">
                    <button type="submit" className="btn btn-md" name="button">Insert Book Bit</button>
                </div>
            </form>
        </div>
    )
}

export default ComposeBook;