import React from 'react'
import style from "./projects.module.css"
import { FaAngleUp } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className={style.projects}>
        <div className={style.upArrow}>
            <FaAngleUp onClick={ () => {  window.scrollTo( { top: 0 , behavior: "smooth" })}}/>
        </div>

    </div>
  )
}

export default Projects