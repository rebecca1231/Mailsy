import React from "react";

const About = () => {
  return (
    <div className="ui container" style={{height:"70vh"}}>
      <h1>Opine</h1>
      <div style={{ marginLeft: "1rem" }}>
        <h4>Etymology</h4>
        <div className="ui list">
          <div className="item">
            Middle French opiner: "to express one's opinion"
          </div>
          <div className="item">
            Latin opinari: "to have an opinion or "to think"
          </div>
        </div>
      </div>
      <div style={{ marginTop: "2rem", fontSize: "1.15rem" }}>
        <p>This site is a work in progress.</p>
        <p>
          I created it as a fun poll taking method. You can ask a question of
          many people at once. The intention is that the respondents will have
          anonymity to answer honestly.
        </p>
        <p>
          I do ask that users login before using the site. Everyone begins with
          25 credits. Each poll sent is one credit, regardless of the number of
          recipients.
        </p>
        <p style={{fontSize:"0.9rem", marginTop:"2rem"}}>
          Note: This site is not setup to handle actual payment for services at
          the moment. The little add credits button in the footer is in test
          mode. If you want more credits simply enter 42 x4 as the
          card number.  You can make up the rest of the information.
        </p>
      </div>
    </div>
  );
};

export default About;
