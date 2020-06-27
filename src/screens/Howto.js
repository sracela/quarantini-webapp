import React from 'react';
import 'styles/App.css';
import Card from "components/Card";
import ihowto from "images/1howto.jpg";
import iihowto from "images/2howto.jpg";
import iiihowto from "images/3howto.jpg";


function Howto() {
  const howto1 = "If you’re playing in person, take turns reading the cards or have one person read all.";
  const howto2 = "If you’re playing online (recommended social distancing) screen share using Zoom / Facetime / Hangout or any video chatting app.";
  const howto3 = "If you lose, you drink!.";

  return (
    <div>
    <section>
        <h1>How to play</h1>
        {/* <h2>Together we will get through this, so we might as well get drunk.</h2> */}
    </section>

    <div className="container">
      <div className="item1">
        <Card key="loading"
          description={howto1}
          image_url={iihowto}
        />
      </div>
      <div className="item2">
        <Card key="loading"
          description={howto2}
          image_url={ihowto}
        />
      </div>
      <div className="item3">
        <Card key="loading"
          description={howto3}
          image_url={iiihowto}
        />
      </div>
    </div>
    </div>
  );
}

export default Howto;
