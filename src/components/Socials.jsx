import React from 'react'
import './Socials.css'

function Socials() {
  return (
    <div className="socials d-flex justify-content-center">
      <div className="icon">
        <a href='#'>
          <img src={require("../assets/images/slack.png")} alt="" />
        </a>
      </div>
      <div className="icon">
        <a href="https://github.com/Avatar_Able">
          <img src={require("../assets/images/Social icon.png")} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Socials