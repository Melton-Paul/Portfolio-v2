import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">Melton</Link>
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
