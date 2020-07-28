import React,{useState} from 'react';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar= (props) => {

    const[search,setSearch]=useState(false);


    const submitSearch=(e)=>{
        e.preventDefault();
        alert('Searched')
    }

    const openSearch=()=>{
        
        search?setSearch(false):setSearch(true);


    }

    const searchClass=search?'searchInputactive':'searchInput';
        
    




  return(
   
   <div className="navbar">
       <ul className="navbarMenu">
           <li>
               <a href="#">Home</a>
           </li>
           <li>
               <a href="#">Blogs</a>
           </li>
           <li>
               <a href="#">Posts</a>
           </li>
           <li>
               <a href="#">Contact Us</a>
           </li>
       </ul>
       <div className="search">
           <form onSubmit={submitSearch} className="search">
           <input type="text" placeholder="Search" className={searchClass} />
           <img onClick ={openSearch} className="searchicon" src={require("../../assets/search.png")} alt="search"></img>

           </form>
           
       </div>
    
   </div>
   )

 }

export default Navbar