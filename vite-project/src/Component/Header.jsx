import { useState, useContext } from "react"

import style from "./style/Header.module.css"
import logo from "./Assets/AAAAA.png"

import BBBBB from "./Assets/BBBBB.webp"
import CCCCC from "./Assets/CCCCC.webp"

import {currentTheme} from "../Contexts"

function Header({switchTheme}) { 
  
  const theme= useContext(currentTheme)
  return ( 
  
  <header className={style.headerclass} data_theme = {theme}> 
  
      <img className={style.logo} data_theme = {theme} src={logo}/> 
      <h1 className={style.title} data_theme = {theme}>Выбери свою сторону, чужой ты или хищный →</h1> 
      <button className={style.switchBtnTheme}
      data_theme={theme}
      onClick={switchTheme}>
        {
          theme == "dark" ? <img src={BBBBB}></img > : <img src={CCCCC}></img>
        }
        

      </button>
  </header> 
) 
}

export default Header