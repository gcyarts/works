import React from 'react'
import "./pages/Home/Home.css"
import Home from './pages/Home/Home'
import Idiom from './pages/idiom/idiom'
import News from './pages/news/news'
import Phone from './pages/phone/phone'
import Weather from './pages/weather/weather'
import {BrowserRouter as Router,Route} from "react-router-dom"
export default class App extends React.Component{
  render(){
    return (
      <div>
        <Router>
          <Route  path='/' component={Home}></Route>
          <Route  path='/news' component={News}></Route>
          <Route  path='/weather' component={Weather}></Route>
          <Route  path='/phone' component={Phone}></Route>
          <Route  path='/idiom' component={Idiom}></Route>
        </Router>
      </div>
  )
}
} 
