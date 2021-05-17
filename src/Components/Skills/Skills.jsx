import React from "react";
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiBootstrap, SiReact, SiGithub, FaServer, SiMongodb, FaColumns, DiStreamline, FaAsterisk, SiHeroku, SiPython, SiDjango, IoLogoNodejs } from "react-icons/all"

function Skills() {
    return (
        <>
        <h1>Skills</h1>
        <br />
        <div class="container skills" id="tv1">
          <div class="row align-items-start">
          <div class="col">
              <p classname="icon"><SiPython /></p>
              <p>Python</p>
          </div>
            <div class="col">
              <p classname="icon"> <SiHtml5 /> </p>
              <p>HTML</p>
            </div>
            <div class="col">
              <p classname="icon"> <SiCss3 /> </p>
              <p>CSS</p>
            </div>
            <div class="col">
            <p classname="icon"> <SiSass /> </p>
              <p>Sass</p>
            </div>
          </div>
          <div class="row align-items-center">
          <div class="col">
              <p classname="icon"><SiDjango /></p>
              <p>Django</p>
          </div>
            <div class="col">
              <p classname="icon"><SiJavascript /></p>
              <p>JavaScript</p>
            </div>
            <div class="col">
            <p classname="icon"> <SiBootstrap /> </p>
              <p>Bootstrap</p>
            </div>
            <div class="col">
            <p classname="icon"> <SiReact /> </p>
              <p>React</p>
            </div>
          </div>
          <div class="row align-items-end">
            <div class="col">
              <p classname="icon"><IoLogoNodejs /></p>
              <p>Nodejs</p>
            </div>
            <div class="col">
            <p classname="icon"> <SiGithub /> </p>
              <p>GitHub</p>
            </div>
            <div class="col">
            <p classname="icon"> <FaServer/> </p>
              <p>Express</p>
            </div>
            <div class="col">
            <p classname="icon"> <SiMongodb /> </p>
              <p>MongoDB</p>
            </div>
          </div>
          <div class="row align-items-start">
            <div class="col">
            <p classname="icon"> <FaColumns /> </p>
              <p>Mongoose</p>
            </div>
            <div class="col">
            <p classname="icon"> <DiStreamline /> </p>
              <p>Postgres</p>
            </div>
            <div class="col">
            <p classname="icon"> <FaAsterisk /> </p>
              <p>SQL</p>
            </div>
            <div class="col">
            <p classname="icon"> <SiHeroku /> </p>
              <p>Heroku</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Skills;