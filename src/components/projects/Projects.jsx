import React, { useState } from 'react'
import style from "./projects.module.css"
import { FaAngleUp } from 'react-icons/fa';

import projectImage_1 from "../../images/projectsImage/restaurant-image.jpg";
import projectImage_2 from "../../images/projectsImage/bootstrap-page.jpg";

const Projects = () => {

    const skills = {
        0 : ["HTML5", "CSS", "Javascript", "React", "Responsive Designe"],
        1 : ["HTML5", "CSS", "Javascript", "Bootstrap", "HTML Standart Structure"],
    }

    const projectImages = [projectImage_1,projectImage_2];

    const descriptionTexts = ["It is one of the first projects" +
    " that I made in React, I followed the tutorial, but I've actually"+
    " learned a lot about components, hooks and File Structure. Here you will"+ 
    " find a simple and elegant design for a restaurant homepage",
    " I did this project to improve my understanding of bootstrap, all the stuff done"+
    " on my own without tutorials. i used basic rules of Grid and followed HTML standards,"+
    " The site's design is simple and appropriate for all device sizes."]

    const projectNames = [
        "Restaurant website",
        "Bootstrap Landing Page"
    ]

    const [links, setLinks] = useState([
        "https://github.com/TsotneDarjania/restaurant-landing-page",
        "https://tsotnedarjania.github.io/restaurant-landing-page/"
    ])

    const [projectIndex, setProjectIndex ] = useState(0)

    const [mainContainerClass, setMaintContainerClass] = useState("")

    const getSkills = () => {

        let skillItems = [];

        for (let index = 0; index < skills[projectIndex].length; index++) {
            let skill = <div key={"skill_"+index} className={style.technologiesBox}>  {skills[projectIndex][index]} </div>
            skillItems.push(skill)
        }

        return skillItems;
    }

    function changeProjectIndex(index){
        setMaintContainerClass("hide");
        setTimeout(() => {
            setProjectIndex(index); 
            setMaintContainerClass("show");
        }, 500);
    }

  return (
    <div className={style.projects}>
        <div className={style.upArrow}>
            <FaAngleUp onClick={ () => {  window.scrollTo( { top: 0 , behavior: "smooth" })}}/>
        </div>
        <div className={style.mainContainer + " "+style[mainContainerClass]}>
            <div className={style.container}>
                <div className={style.containerBox}>
                    <div className={style.textContainer}>
                        <h2> {projectNames[projectIndex]} </h2>
                    </div>
                    <div className={style.textContainer}>
                        <p> {descriptionTexts[projectIndex]} </p>
                    </div>
                    <div className={style.textContainer + " "+style.links}>
                        <p onClick={ () => {window.open(links[0])}} className={style.link}> open GitHub Repository </p>
                        <p onClick={ () => {window.open(links[1])}} className={style.link}> open Live site</p>
                    </div>
                    <div className={style.textContainer}>
                        <p> SKILLS </p>
                    </div>
                    <div className={style.technologiesContainer}>
                        {getSkills()}
                    </div>
                </div>
                <div style={{backgroundImage : "url(" + projectImages[projectIndex]+")"}} className={style.containerBox+ " " + style.rightContainer}> </div>
            </div>
        </div>
        <div className={style.buttons}>
            <button onClick={ () => { 
                if(projectIndex !== 0){
                    changeProjectIndex(0)
                }
                setLinks(["https://github.com/TsotneDarjania/restaurant-landing-page",
                "https://tsotnedarjania.github.io/restaurant-landing-page/"])
            }} className={style.button} > 1 </button>
            <button onClick={ () => { 
                if(projectIndex !== 1){
                    changeProjectIndex(1)
                }
                setLinks(["https://github.com/TsotneDarjania/BootstrapLandingpage",
                "https://tsotnedarjania.github.io/BootstrapLandingpage/"])
            }} className={style.button} > 2 </button>
        </div>
    </div>
  )
}

export default Projects