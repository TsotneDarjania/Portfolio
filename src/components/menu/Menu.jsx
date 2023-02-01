import React from 'react'
import Face from '../../gameObjects/Face'
import style from "./menu.module.css"

const Menu = () => {
  return (
    <div className={style.menu}>
        <Face />
    </div>
  )
}

export default Menu