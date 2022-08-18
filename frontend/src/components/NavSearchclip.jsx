import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Form, FormControl, Button } from "react-bootstrap";

function NavSearch() {

    const navigate = useNavigate();
    const [search,setSearch] = useState("")

    function handleChange(e){
      e.preventDefault();
      var q = e.target.value;
      setSearch(q);
    }
    function handleClick()
    {
      if(search!="")
      {
        navigate("/clipbits/" + search)
      }
      else{
          navigate("/clipbits")
      }
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-none">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                Snipabit
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/blogbits">blogBits</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/bookbits">bookBits</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/clipbits">clipbits</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://dry-fortress-58643.herokuapp.com/" target="_blank">newsletter</a>
                </li>
                </ul>
            </div>
            <Form className="d-flex search-nav">
                <FormControl
                    type="search"
                    placeholder="Search Snippets"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={handleChange}
                />
                <Button variant="outline-success" onClick={handleClick}>Search</Button>
            </Form>
            </div>
        </nav>
    );
}

export default NavSearch;