import { useContext, useState } from "react"

import style from "./style/Card.module.css"
import baton from "./Assets/baton.jpg"
import { currentTheme } from "../Contexts"
import hleb from "./Assets/hleb.jpg"
function Card() {
const [likes, setlike] = useState(0)

const theme = useContext(currentTheme)
  return (
    <div className={style.AAA} data-theme={theme}>
      <img  src={baton} alt="" />
      <p>{likes}</p>
      <p>FFasfsa</p>
      
      <button  onClick={()=>setlike(l => l + 1)}>
        {theme == "dark" ?
        <img src={hleb} alt="" /> :
        <img src="" alt="" />}
      </button>
    </div>
  )
}

export default Card