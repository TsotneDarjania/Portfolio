import React from 'react'
import { FaAngleUp } from 'react-icons/fa';
import style from "./profile.module.css"

import profile from "../../images/profile.jpg"

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.upArrow}>
        <FaAngleUp onClick={ () => {  window.scrollTo( { top: 0 , behavior: "smooth" })}}/>
      </div>
      <div className={style.leftContent}>
          <div className={style.profileImage}>
            <img src={profile} alt="" />

          </div>
          <div className={style.habits}>
            <p> I Love </p>
          </div>


      </div>


    </div>
  )
}

export default Profile;