import React from "react";
import Links from "./Links"

function About(props) {
  const bio = props.bio
  
  function checkBio() {
    if (bio) { 
      return <p>{bio}</p>
    } else {
      return null
    }
  }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links {...props} />
    </div>
  );
}

export default About;
