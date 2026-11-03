import style from "./style/Header.module.css"
import logo from "./Assets/AAAAA.png"

function Header() { 
  
  
  return ( 
  
  <span> 
  
      <img className={style.logo} src={logo}/> 
      <h1 className={style.title}>SAIT</h1> 
    
  </span> 
) 
}

export default Header