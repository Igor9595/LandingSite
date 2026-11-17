import { useContext, useState } from "react"

import style from "./style/Card.module.css"
import baton from "./Assets/baton.jpg"
import { currentTheme } from "../Contexts"
import hleb from "./Assets/hleb.jpg"
import Button from "./Button"
function Card() {
const [likes, setlike] = useState(0)

const theme = useContext(currentTheme)
  return (
    <div className={style.AAA} data-theme={theme}>
      <img  src={baton} alt="" />
      <p>{likes}</p>
      <p>FFasfsa</p>
       <Button img={theme == "dark" ?
        hleb : hleb
        } action={()=>setlike(l => l + 1)}>

      </Button>
      
    </div>
  )
}

export default Card