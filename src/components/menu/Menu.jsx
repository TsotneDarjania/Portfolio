import React, { useEffect, useState } from 'react'
import {FaLayerGroup} from 'react-icons/fa'
import {RiProfileLine} from "react-icons/ri"
import Profile from '../review/Profile'
import style from "./menu.module.css"



const Menu = (props) => {
    const [leftMenuClass, setLeftMenuClass] = useState("left-hide")
    const [centerMenuClass, setCenterMenuClass] = useState("center-hide")
    const [rightMenuClass, setRightMenuClass] = useState("right-hide")

    useEffect(() => {
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
            <h2 className={style["menu-title"]}> Portfolio Projects </h2>
            <div className={style["menu-icon"]}>
                <FaLayerGroup />
            </div>
            <button className={style["menu-button"]}> Show me</button>
        </div>
        <div className={style["right-menu"] + " " + style[rightMenuClass]}>
            <h2 className={style["menu-title"]}> Profile </h2>
            <div className={style["menu-icon"]}>
                <RiProfileLine />
            </div>
            <button onClick={ () => {  window.scrollTo( { top: 1000 , behavior: "smooth" })}} className={style["menu-button"]}> Review </button>
        </div>

        <Profile />
    </div>
  )
}

export default Menu