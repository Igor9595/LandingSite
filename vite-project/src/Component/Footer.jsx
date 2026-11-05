import { useContext } from "react"

import style from "./style/Footer.module.css"

import { currentTheme } from "../Contexts"

function Footer() {

  const theme= useContext(currentTheme) 
  return (
    <footer className= {style.footerWrapper} data_theme = {theme}> 
      
        <h3>Абра кадабра</h3>
         
     </footer> 
  )
}

export default Footer