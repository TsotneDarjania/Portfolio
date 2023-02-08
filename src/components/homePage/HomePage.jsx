import Face from '../../gameObjects/Face'
import style from "./homePage.module.css"
import {FaAngleUp, FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"
import Menu from '../menu/Menu'
import { useState } from 'react'

const HomePage = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [menuZetIndex, setMenuZetIndex] = useState(0)


  return (
    <div className={style.homePage}>
        <Face />
        <div className={style.myContent}>
            <h2> <em> Hi, I am Tsotne Darjania </em> <br /> <span> Front-End Developer </span> <strong> from <br />  Tbilisi </strong></h2>
            <button onClick={ () => { 
                 setShowMenu(true); 
                 setMenuZetIndex(100) 
            }}> MORE </button>
        </div>

        <div onClick={ () => window.open("https://github.com/TsotneDarjania")} className={style.icon + " "+ style.github}>
            <FaGithub />
        </div>
        <div onClick={ () => window.open("https://twitter.com/tsotne_darjania")} className={style.icon + " "+ style.twitter}>
            <FaTwitter />
        </div>
        <div onClick={ () => window.open("https://www.linkedin.com/in/tsotne-darjania-58380b231/")} className={style.icon + " "+ style.linkedin}>
            <FaLinkedin />
        </div>
        <div onClick={ () => window.open("https://www.facebook.com/tsotne.darjania")} className={style.icon + " "+ style.facebook}>
            <FaFacebook />
        </div>
        <Menu zIndex = {menuZetIndex} show={showMenu} />

        {
            showMenu && 
            <div onClick={ () => { 
                setShowMenu(false); 
                setMenuZetIndex(0) 
            }} className={style.closeMenu}>
                <FaAngleUp />
            </div>
        }
    </div>
  )
}

export default HomePage