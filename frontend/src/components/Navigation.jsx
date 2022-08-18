import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-none">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                {/* <!-- Image can be inserted as well, check in documentation. --> */}
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
            </div>
        </nav>
    );
}

export default Navigation;