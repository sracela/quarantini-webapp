import React from 'react';
import 'styles/App.css';
import sara from "images/sara.jpeg";
import vic from "images/vic.jpeg";
import Card from "components/Card";


function About () {
  const Victoria = "Studies: BS in marketing and management \nJob: Student";
  const Sara = "Studies: Telecom Engineering, Master in Computer Vision\nJob: Junior Sofware Engineer \nSocial Media: https://twitter.com/SaraCela";

  return(

    <div>
      <section>
        <h1>About</h1>
        <h2>This project was carried out with a lot of love by Sara and Victoria. If you want to know something more about each of them, we leave you here their contact info.</h2>
      </section>

      <div className="container">
        <div className="item1">
          <Card key="loading"
            description={Victoria}
            image_url={vic}
          />
        </div>
        <div className="item2">
          <Card key="loading"
            description={Sara}
            image_url={sara}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
