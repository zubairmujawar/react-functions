import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const Hearder = () => {
  return (
    <nav>
      <h2><Link to="/">Lgo Here</Link></h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FaShoppingCart />
          <p>{"0"}</p>
        </Link>
      </div>
    </nav>
  );
};
