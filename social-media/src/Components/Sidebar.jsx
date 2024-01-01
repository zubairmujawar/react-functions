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
        <span className="fs-4">Social Media</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={()=>setActivTab("Home")}>
          <a href="#" className={`nav-link text-white ${aciveTab === "Home" && "active"}`} aria-current="page">
            Home
          </a>
        </li>
        <li onClick={()=>setActivTab("Create Post")}>
          <a href="#" className={`nav-link text-white ${aciveTab === "Create Post" && "active"}`}>
            Create Post
          </a>
        </li>
        <li onClick={()=>setActivTab("Trending Post")}>
          <a href="#" className={`nav-link text-white ${aciveTab === "Trending Post" && "active"}`}>
          Trending Post
          </a>
        </li>
        <li onClick={()=>setActivTab("Settings")}>
          <a href="#" className={`nav-link text-white ${aciveTab === "Settings" && "active"}`}>
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
