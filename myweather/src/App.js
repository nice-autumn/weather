
import './App.css'
import 'antd/dist/antd.css'
import {useState, useEffect} from 'react'
import Header from './components/Header/Header'

function App() {
  let [list,setList]=useState({})
  useEffect(()=>{
     getData()
 },[])
 function getData(){
     fetch('https://devapi.qweather.com/v7/weather/now?location=101010100&key=08008624879942229175c4362afb8f98').then(response=> {
         return response.json()
     }).then(res=> {
         console.log(res.now)
         setList(res.now)
     }).catch(err=> {
         console.log(err)  
     })
 }
  return (
    <div className="App">
      <Header detail={list}/>
    </div>
  );
}

export default App;
