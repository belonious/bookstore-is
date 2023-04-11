import React from 'react';
import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link to={"/"} className="nav-link">
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"book/create"} className="nav-link">
                  Add Book
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="p-2 text-center bg-light">
          <h1 className="mb-2">Bookstore</h1>
        </div>
      </header>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
