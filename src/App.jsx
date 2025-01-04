import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//import ComponentA from './components/ComponentA'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Explore from './components/Explore';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
  // const names = ["ab","cd","ef","gh"]

  // function addition(a,b){
  //   return a+b
  // }
  //  const secret ='hello js'
// const [email,setEmail]= useState("")
// const [password,setPassword]=useState("")



// const sendData = (e)=>{
//   e.preventDefault()
//   console.log(email,password)
// }

  return (
    <BrowserRouter>
    <>
      {/* <ComponentA data={secret} />  */}
      {/* <form onSubmit={sendData} style={{width:'30%',margin:'auto',height:'12rem',marginTop:'2rem'}}>
        <label>Email:</label>
        <input id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/>
      <br/>
        <label > Password:</label>
        <input id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type='submit' value={'Login'} />
      </form> */}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/about_us' element={<About />}/>
        <Route path='/contact_us' element={<Contact/>}/>


      </Routes>
      <Navbar/>
      

      
    </>
    </BrowserRouter>
    
  )
}

export default App
