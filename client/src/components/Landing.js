import React from "react";

const Landing = () => {
  return (
    <div>

      <div style={{color:"#24a19c", fontFamily:"Lobster Two", fontSize: "5em"}} className="ui huge header center aligned ">Opine!</div>
      <div className="ui huge header center aligned">
        Have a question?
        </div>
        <div className="ui large header center aligned">
        Want to know what people think?
        </div>
        <div className="ui large header center aligned">
        It's easy!
      </div>
      <ol className="ui huge list" style={{margin:"0 4rem", padding: "1rem"}}>
          <li className="item">
            <div className="">Login with Google account.</div>
            </li>
          <li className="item">Add credits.</li>
          <li className="item">Compose a question.</li>
          <li className="item">Send it to everyone you know!</li>
          <li className="item">Check your dashboard to see all your surveys and replies.</li>
      </ol>
    </div>
  );
};

export default Landing;
