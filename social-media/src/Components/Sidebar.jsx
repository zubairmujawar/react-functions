import React from "react";

const Sidebar = ({aciveTab, setActivTab}) => {
  return (
    <div
      className="d-flex flex-column sidebar flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span className="fs-4">Social Media</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Create Post
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
          Trending Post
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Settings
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Profile</strong>
        </a>
        
      </div>
    </div>
  );
};

export default Sidebar;
