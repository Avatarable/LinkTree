import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile d-flex flex-column">
        <div className="img__div">
            <img src={require("../assets/images/profile__img.png")} alt="" id="profile__img" />
        </div>
        <p className="username" id="twitter">Avatar_Able</p>
        <p id='slack' hidden>Avatarable</p>
    </div>
  )
}

export default Profile