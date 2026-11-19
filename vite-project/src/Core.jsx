import {Routes, Route, Link} from 'react-router'
import App from './App'
import Header from './Component/Header'
import About from './About'
import Footer from './Component/Footer'
import style from './Component/style/Core.module.css'

function Core(){
    return(
        <>
        <Header>fasf</Header>
        <Link className={style.lin} to="/">На главную</Link>
        <Link className={style.lin} to="/second">доп</Link>
        <Link className={style.lin} to="about">dsagfa</Link>

        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/about" element={<About testText = {"AAAAA"}/>}/>
            <Route path="/second" element={<h1>ogjhsoghsogihe</h1>}/>
        </Routes>
        <Footer>wqrepoytu</Footer>
        </>
    )
}



export default Core