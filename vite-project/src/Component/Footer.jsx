import { useContext } from "react"

import style from "./style/Footer.module.css"
import logo from "./Assets/AAAAA.png"
import { currentTheme } from "../Contexts"

function Footer() {

  const theme= useContext(currentTheme) 
  return (
    <footer className= {style.footerWrapper} data_theme = {theme}> 
       <img className={style.logo} data_theme = {theme} src={logo}/> 
            <h2 className={style.title} data_theme = {theme}>
              выбрал молодец
            </h2> 
     </footer> 
  )
}

export default Footer