import { useState, createContext, Suspense } from "react";
import Button from "./Component/Button";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import style from"./App.module.css"
import { currentTheme } from "./Contexts";
import logo from "./Assets/Logo.jpg"

function Prom({card}) {
  const cashe = new Promise(() =>{
    setTimeout(() =>{return card}, 5000)
  })
  if (cashe instanceof Promise){
    throw cashe
    
  }
  return cashe
}


function App() {
  const [card1, setCard1] = useState(<></>)

 
      
      
    
   
  const [theme, setTheme] = useState("dark")

  function switchTheme () {
 
   if (theme == "light"){
    setTheme("dark")
    return null
   }
   if (theme == "dark"){
    setTheme("light")
    return null
   }
  
  }

  return (
    <currentTheme.Provider value={theme}>
      <div className={style.main}>
        <Header switchTheme={switchTheme}></Header>
        <div className={style.CCC}>
          <Suspense fallback={<p>jashgfiohusad</p>} >
            <Prom card= {<></>}></Prom>
          </Suspense>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Footer></Footer>
      </div>
    </currentTheme.Provider>
  )
}

export default App
