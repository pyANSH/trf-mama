import React from "react";
import "./App.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="logo">mama.</h1>
        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Why Mama
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                The Zone
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Pricing
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="login">
          <button className="btn__login">Login</button>
          <button className="btn__signup">Sign Up</button>
        </div>
      </header>
      <div className="hero">
        <div></div>
        <div className="hero__heading">
          <h1>Personalised</h1>
          <h1>learning for you</h1>
        </div>
        <button className="hero__btn btn__signup">Sign Up for free</button>
      </div>
    </div>
  );
}

export default Dashboard;
