import React from 'react';
import{FaUser,
       FaEdit} from 'react-icons/fa';
       
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <FaUser size={0}/>
                    <a className="navbar-brand"> Expanse Tracker</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div className="d-flex">
                            <ul className="navbar-nav">
                            <li class="nav-item">
                                  <a class="nav-link" href="/">Dashboard</a>
                            </li>

                            <li class="nav-item">
                                  <a class="nav-link" href="/budget">Add Budget</a>
                            </li>

                            <li class="nav-item">
                                  <a class="nav-link" href="/expanse">Add Expanse</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
