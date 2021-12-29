import React from "react";
import coffeeConnect from '../../assets/Coffee-Connection-Start.png';

const Project = () => {
  return (
    <div className="container flex-box">
      <div className="card">
        <img
          src={coffeeConnect}
          alt="Cover from Coffee Connection project"
          className="card-img"
        />
        <h4 className="card-header">Coffee Connection</h4>
        <p className="card-text">
          A simple application for a user to find nearby coffee shops, <br /> based on their location.
        </p>
        <a
          href="https://doctormuch.github.io/fs-joe-java-journey/"
          target="_blank"
          rel="noreferrer"
        >See the project here ||
        </a>
        <a
          href="https://github.com/DoctorMuch/fs-joe-java-journey"
          target="_blank"
          rel="noreferrer"
        > Explore the GitHub repository</a>
      </div>
    </div>
  )
}

export default Project;