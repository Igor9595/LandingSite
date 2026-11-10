import { useContext, useState } from "react"

import style from "./style/Card.module.css"
import baton from "./Assets/baton.jpg"
import { currentTheme } from "../Contexts"
import hleb from "./Assets/hleb.jpg"
function Card() {
const [likes, setlike] = useState(0)

const theme = useContext(currentTheme)
  return (
    <>
      <img className={style.bat} src={baton} alt="" />
      <p>FFasfsa</p>
      <p>{likes}</p>
      <button onClick={()=>setlike(l => l + 1)}>
        {theme == "dark" ?
        <img src={hleb} alt="" /> :
        <img src="" alt="" />}
      </button>
    </>
  )
}

export default Card