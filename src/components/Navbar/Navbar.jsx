import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <section className="head-section bg-warning">
        <header className="container">
          <nav className="navbar navbar-expand-lg navbar-light penguin-nabbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
              <img
                  src={'./src/assets/prosap.jpg'}
                  alt="shopify"
                  className="logo img-fluid"
                /> Prosap
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"
                    ><i class="bi bi-house-door-fill"></i> Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/products"><i class="bi bi-bookmark-fill"></i> Productos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </>
  )
}