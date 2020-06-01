import React from 'react';
import 'styles/App.css';
import sara from "images/sara.jpeg";
import vic from "images/vic.jpeg";
import Card from "components/Card";


function About () {
  const Victoria = "Studies: \nJob: \nMail: \nLinkedin: \nSocial Media:";
  const Sara = "Studies: Telecom Engineering, Master in Computer Vision\nJob: Junior Sofware Engineer \nMail: saracelalfonso@gmail.com \nLinkedin: https://www.linkedin.com/in/sara-cela-alfonso-9a1001118/ \nSocial Media: https://github.com/sracela - https://twitter.com/SaraCela";

  return(
    
  <div className="container">
  <div className="header">
    <h1>About</h1>
  </div>
  <div className="item2">
    <h2>This project was carried out with a lot of love by Sara and Victoria. If you want to know something more about each of them, we leave you here their contact info.</h2>
  </div>
  <div className="item3">
        <Card key="loading"
          description={Victoria}
          image_url={vic}
          />
  </div>
  <div className="item4">
  </div>
  <div className="item5">
        <Card key="loading"
          description={Sara}
          image_url={sara}
          />
  </div>
</div>
  );
}

export default About;
