import Face from '../../gameObjects/Face'
import style from "./menu.module.css"
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

const Menu = () => {
  return (
    <div className={style.menu}>
        <Face />
        <div className={style.myContent}>
            <h2> <em> Hi, I am Tsotne Darjania </em> <br /> <span> Front-End Developer </span> <strong> from  Tbilisi </strong></h2>
            <button> MORE </button>
        </div>

        <div className={style.icon + " "+ style.github}>
            <FaGithub />
        </div>
        <div className={style.icon + " "+ style.twitter}>
            <FaTwitter />
        </div>
        <div className={style.icon + " "+ style.linkedin}>
            <FaLinkedin />
        </div>
        <div className={style.icon + " "+ style.facebook}>
            <FaFacebook />
        </div>
        
    </div>
  )
}

export default Menu