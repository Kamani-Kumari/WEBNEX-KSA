import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <nav className='navbar'>
        <span>NAME</span>
        <li id='navbar_items'>
        <ul id='navbar_ul'><a href="#" > Home</a> </ul>
            <ul id='navbar_ul'><a>Products</a></ul>
            <ul id='navbar_ul'><a >Cart</a></ul>
            <ul id='navbar_ul'><a>About</a></ul>
            <ul id='navbar_ul'><a >Login</a></ul>
            
            
        </li>
      </nav>
    </div>
  )
}

export default Home
