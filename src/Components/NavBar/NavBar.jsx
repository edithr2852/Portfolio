import React from "react";
import { VscGithubInverted  } from "react-icons/all"

export default function NavBar() {
  return (
    <div class="page">
      <nav class="page__menu menu">
        <ul class="menu__list r-list">
          <li  class="menu__group">
            <a href="/" class="menu__link r-link text-underlined">
              Home
            </a></li>
            &nbsp; | &nbsp;
            <li class="menu__group">
            <a href="/work" class="menu__link r-link text-underlined">
              Work
            </a>
            </li>
            &nbsp; | &nbsp;
            <li class="menu__group">
            <a href="/skills" class="menu__link r-link text-underlined">
              Skills
            </a>
            </li>
            &nbsp; | &nbsp;
            <li class="menu__group">
            <a href="/contact" class="menu__link r-link text-underlined">
              Contact
            </a>
            </li>
            &nbsp; | &nbsp;
            <li class="menu__group">
            <a href="Resume.pdf" download class="menu__link r-link text-underlined">
              Resume
            </a>
            </li>
            &nbsp; | &nbsp;
            <li class="menu__group">
            <a href="https://github.com/edithr2852" download class="menu__link r-link text-underlined" target="_blank">
            <VscGithubInverted />   GITHUB
            </a>
            </li>

        </ul>
      </nav>
    </div>
  );
}
