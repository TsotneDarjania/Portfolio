import React, { useEffect, useState } from 'react'
import {FaLayerGroup} from 'react-icons/fa'
import {RiProfileLine} from "react-icons/ri"
import Projects from '../projects/Projects'
import Profile from '../review/Profile'
import style from "./menu.module.css"



const Menu = (props) => {
    const [leftMenuClass, setLeftMenuClass] = useState("left-hide")
    const [centerMenuClass, setCenterMenuClass] = useState("center-hide")
    const [rightMenuClass, setRightMenuClass] = useState("right-hide")



    const [showProfile, setShoeProfile] = useState(false)
    const [menuButtonTexts, setMenuButtonTexts] = useState( [
        "Show me",
        "Shoe me"
    ])

    useEffect(() => {

        if(window.innerWidth > 620){
            setMenuButtonTexts(["Show me", "Review"])
        } else {
            setMenuButtonTexts(["Portfolio", "Contact"])
        }

        if(props.show === false){
            setLeftMenuClass("left-hide")
            setCenterMenuClass("center-hide")
            setRightMenuClass("right-hide")
        } else  {
            setLeftMenuClass("")
            setCenterMenuClass("")
            setRightMenuClass("")
        }
    }, [props])

  return (
    <div style={{zIndex: props.zIndex}} className={style.menu}>
        <div className={style["left-menu"] + " " + style[leftMenuClass]}>
            <h2 className={style["menu-title"]}> Skills </h2>
            <div className={style["menu-items"]} >
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-html5-plain"}></i>
                    <p> HTML5 </p>
                </div>     
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-css3-plain"}></i>
                    <p> CSS </p>
                </div>        
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-javascript-plain"}></i>
                    <p> JAVASCRIPT + ES6 </p>
                </div>     
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-sass-original"}></i>
                    <p> SASS </p>
                </div> 
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-react-original"}></i>
                    <p> REACT </p>
                </div>    
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-typescript-plain"}></i>
                    <p> TYPESCRIPT </p>
                </div>  
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-npm-original-wordmark"}></i>
                    <p> NPM </p>
                </div>  
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-git-plain"}></i>
                    <p> GIT </p>
                </div>  
                <div className={style["menu-item"]}>
                    <i className={style["language-icon"]  +  " devicon-github-original"}></i>
                    <p> GITHUB </p>
                </div>  
            </div>
        </div>
        <div className={style["center-menu"] + " " + style[centerMenuClass]}>
            <h2 className={style["menu-title"]+" "+style["projects-title"]}> Portfolio Projects </h2>
            <div className={style["menu-icon"]}>
                <FaLayerGroup />
            </div>
            <button onClick={ () => {  setShoeProfile(false); window.scrollTo( { top: 1000 , behavior: "smooth" })}} className={style["menu-button"]}> 
                { menuButtonTexts[0] }
            </button>
        </div>
        <div className={style["right-menu"] + " " + style[rightMenuClass]}>
            <h2 className={style["menu-title"]+" "+style["profile-title"]}> Profile </h2>
            <div className={style["menu-icon"]}>
                <RiProfileLine />
            </div>
            <button onClick={ () => { setShoeProfile(true);  window.scrollTo( { top: 1000 , behavior: "smooth" })}} className={style["menu-button"]}>
                { menuButtonTexts[1] }
            </button>
        </div>
        
        {
            showProfile ? <Profile /> : <Projects />
        }
    </div>
  )
}

export default Menu