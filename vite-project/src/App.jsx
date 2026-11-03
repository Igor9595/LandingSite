import Button from "./Component/Button";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import style from"./App.module.css"



function App() {


  return (
    <>
      <div className={style.main}>
        <header></header>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <footer></footer>
      </div>
    </>
  )
}

export default App
