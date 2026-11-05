import { useState, createContext } from "react";
import Button from "./Component/Button";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import style from"./App.module.css"
import { currentTheme } from "./Contexts";


function App() {

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
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Footer></Footer>
      </div>
    </currentTheme.Provider>
  )
}

export default App
