import React from 'react'
import { FaAngleUp } from 'react-icons/fa';
import style from "./profile.module.css"
import ReactTypingEffect from 'react-typing-effect';

import profile from "../../images/profile.jpg"
import Form from '../form/Form';

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
            <div className={style.habitsText}> I Love
              <br />
              <span>
                <ReactTypingEffect
                  text={[" Music", " Programming"," Dogs", " Javascript"
                  ," Games"]}
                  eraseDelay={1100}
                  eraseSpeed={200}
                  typingDelay={200}
                />  
              </span>   
            </div>
          </div>
          <div className={style.aboutMeText}>
            <p>  
              I was a musician in my previous life, 
              It was a really special and fun time, 
              I started learning programming for making a game..
              After three months, I was already familiar 
              with the basics of web development 
              and then I created my first website.
              It was a pivotal moment in my life, so I realized 
              that it was a job that made me particularly happy.
            </p>
          </div>
      </div>
      <div className={style.rightContent}>
        <p className={style.quote}> 
          “There are three responses to a 
          piece of design - yes, no, 
          and WOW! Wow is the one to aim for” - Milton Glaser 
        </p>
        <p className={style.rightContentText}> Contact Form </p>

        <Form />

      </div>


    </div>
  )
}

export default Profile;