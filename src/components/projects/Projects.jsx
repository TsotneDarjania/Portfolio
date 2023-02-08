import React, { useRef, useState } from 'react'
import style from "./projects.module.css"
import { FaAngleUp } from 'react-icons/fa';

import projectImage_1 from "../../images/projectsImage/restaurant-image.jpg";
import projectImage_2 from "../../images/projectsImage/bootstrap-page.jpg";
import projectImage_3 from "../../images/projectsImage/cats-website.jpg";
import projectImage_4 from "../../images/projectsImage/calculator.jpg";

const Projects = () => {

    const skills = {
        0 : ["HTML5", "CSS", "Javascript", "React", "Responsive Designe"],
        1 : ["HTML5", "CSS", "Javascript", "Bootstrap", "HTML Standart Structure"],
        2 : ["HTML5", "CSS", "Javascript", "React", "CSS Grid Layout"],
        3 : ["HTML5", "CSS", "Javascript", "object-oriented programming"]
    }

    const projectImages = [projectImage_1,projectImage_2,projectImage_3,projectImage_4];

    const descriptionTexts = ["It is one of the first projects" +
    " that I made in React, I followed the tutorial, but I've actually"+
    " learned a lot about components, hooks and File Structure. Here you will"+ 
    " find a simple and elegant design for a restaurant homepage",

    " I did this project to improve my understanding of bootstrap, all the stuff done"+
    " on my own without tutorials. i used basic rules of Grid and followed HTML standards,"+
    " The site's design is simple and appropriate for all device sizes.",

    "I created this website to check and improve my React,"+
    " JavaScript, and CSS skills. It is a company website that"+
    " provides information about the company in a clear and simple manner"+
    " , with a user-friendly UI design. The entire code structure was written by me"+
    " , and I did not use any libraries, such as a slider library, to challenge and"+
    " develop my coding abilities",

    " During this project, I honed my skills in object-oriented programming"+
    " and gained a deeper understanding of the principles behind it."+
    " My primary focus was on JavaScript, but I also gained experience in CSS"+
    " , utilizing a grid system and following clean code practices."]

    const projectNames = [
        "Restaurant website",
        "Bootstrap Landing Page",
        "Compnay Landing Page",
        "Web Calculator"
    ]

    const [links, setLinks] = useState([
        "https://github.com/TsotneDarjania/restaurant-landing-page",
        "https://tsotnedarjania.github.io/restaurant-landing-page/"
    ])

    const buttonsRef = useRef();
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

    const handleButtonClick = (index, links) => {
        buttonsRef.current.childNodes.forEach(button => {
            button.style = "background-color:rgb(255, 168, 91)";
        });
        buttonsRef.current.childNodes[index].style = "background-color:black";
        if (projectIndex !== index) {
          changeProjectIndex(index);
        }
        setLinks(links);
    };

    const changeProjectIndex = (index) => {
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
        <div ref={buttonsRef} className={style.buttons}>
            <button
                onClick={() => handleButtonClick(0, [
                    "https://github.com/TsotneDarjania/restaurant-landing-page",
                    "https://tsotnedarjania.github.io/restaurant-landing-page/",
                ])}
                className={style.button}
                >
                1
            </button>
            <button
                onClick={() => handleButtonClick(1, [
                    "https://github.com/TsotneDarjania/BootstrapLandingpage",
                    "https://tsotnedarjania.github.io/BootstrapLandingpage/",
                ])}
                className={style.button}
                >
                2
            </button>
            <button
                onClick={() => handleButtonClick(2, [
                    "https://github.com/TsotneDarjania/company-website",
                    "https://tsotnedarjania.github.io/company-website/",
                ])}
                className={style.button}
                >
                3
            </button>
            <button
                onClick={() => handleButtonClick(3, [
                    "https://github.com/TsotneDarjania/WebCalculator",
                    "https://tsotnedarjania.github.io/WebCalculator/",
                ])}
                className={style.button}
                >
                4
            </button>
        </div>
    </div>
  )
}

export default Projects