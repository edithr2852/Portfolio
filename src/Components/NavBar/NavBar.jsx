import React from "react";
import { IoHome } from "react-icons/all"

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <div class="navbar-nav">
            <a href="/" class="nav-link icon">
              Home
            </a>
            &nbsp; | &nbsp;
            <a href="/work" class="nav-link">
              Work
            </a>
            &nbsp; | &nbsp;
            <a href="/skills" class="nav-link">
              Skills
            </a>
            &nbsp; | &nbsp;
            <a href="/contact" class="nav-link">
              Contact
            </a>
          </div>
        </div>
    </nav>
  );
}
