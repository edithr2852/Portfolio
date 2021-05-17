import React from "react";

function Home() {
  return (
    <>
      <h1>Hi, my name is Edith Rodriguez</h1>
      <div className="container">
        <div class="row justify-content-center">
          <div class="col-4 home-bor home" id="tv">
            I am a software engineer with a background in the legal field. I use
            my experience in  the legal field in combination with software
            engineering  to work with users/businesses to develop systems and
            softwares and determine their needs. My goal is to design, develop,
            test or maintain software and ensure that it is debugged and
            readable.
          </div>
          <div class="col-4" id="tv">
            <img src="IMG_5121.jpeg" className="img" id="tv" />
          </div>
        </div>
      </div>
      <a
        href="https://github.com/edithr2852"
        target="_blank"
        class="multi-button"
      >
        </a>  
    </>
  );
}

export default Home;
