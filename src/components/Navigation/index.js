import React from "react";
import './index.css';

const Navigation = () => {
  return (
    <section className="flex-row">
      <div className="col-4">
        <h3>Check Me:</h3>
      </div>
      <div className="col-6">
        <nav>
          <ul className="flex-row justify-space-between">
            <li className="card">
              <a href="#about">
                About David
              </a>
            </li>
            <li className="card">
              Portfolio
            </li>
            <li className="card">
              Contact
            </li>
            <li className="card">
              Resume
            </li>
          </ul>
        </nav>
      </div>
    </section>



  )
};

export default Navigation;