import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer d-flex justify-content-between mt-5">
        <div className="zuri__logo">
            <img src={require("../assets/images/Vector.png")} alt="" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div className="i4g__logo">
        <img src={require("../assets/images/I4G.png")} alt="" />
        </div>
    </div>
  )
}

export default Footer