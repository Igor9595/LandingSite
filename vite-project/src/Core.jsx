import {Routes, Route, Link} from 'react-router'
import App from './App'


function Core(){
    return(
        <>
        <h1>Начало</h1>
        <Link to="/">На главную</Link>
        <Link to="/second">доп</Link>

        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/second" element={<h1>ogjhsoghsogihe</h1>}/>
        </Routes>
        <h1>Конец</h1>
        </>
    )
}



export default Core