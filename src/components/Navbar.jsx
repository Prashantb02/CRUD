import React from 'react'
import { Link } from "react-router-dom"
const Navbar = ()=>{
    return(
        <div style={{background:'black',height:'2rem',}}>
            <ul style={{color:'whitesmoke',display:'flex',flexDirection:'row',justifyContent:'space-between',paddingRight:'2rem',paddingLeft:'2rem',listStyle:'none'}}>
              <Link style={{textDecoration:'none',color:'whitesmoke'}} to={'/'}> <li>Home</li> </Link>
              <Link style={{textDecoration:'none',color:'whitesmoke'}} to={'/explore'}> <li>Explore</li>      </Link>      
              <Link style={{textDecoration:'none',color:'whitesmoke'}} to={'/about_us'}>  <li>About Us</li>    </Link>  
              <Link style={{textDecoration:'none',color:'whitesmoke'}} to={'/contact_us'}>  <li>Contact Us</li>  </Link>    
            </ul>
        </div>
    )
}

export default Navbar