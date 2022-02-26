import React from "react";
import './profileStyle.css'
import profileImg from '../../assets/img/profile_test.png'

const ProfileAndName = (props) => {
    return (
        <div className="profile-and-name">
            <img src={props.source}/>
            <h3>{props.text}</h3>
        </div>
    )
}

export default ProfileAndName;