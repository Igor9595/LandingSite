import { useState, useContext } from "react"
import Button from "./Button"
import style from "./style/Header.module.css"
import logo from "./Assets/AAAAA.png"
import {Routes, Route, Link} from 'react-router'
import BBBBB from "./Assets/BBBBB.webp"
import CCCCC from './Assets/CCCCC.webp'
import {currentTheme} from "../Contexts"

function Header({switchTheme}) { 
  
  const theme= useContext(currentTheme)
  return ( 
  
  <header className={style.headerclass} data_theme = {theme}> 
  
      <img className={style.logo} data_theme = {theme} src={logo}/> 
      <h1 className={style.title} data_theme = {theme}>Выбери свою сторону, чужой ты или хищный →</h1> 
      
      
      <Button img={ theme == "dark" ? BBBBB : CCCCC} action={switchTheme}>

      </Button>
      
  </header> 
) 
}

export default Header