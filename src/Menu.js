import React from 'react'
import { NavLink } from 'react-router-dom';
import Make from '../src/wmh.png';
import {BsPencilSquare} from "react-icons/bs";
import "react-alice-carousel/lib/alice-carousel.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Menu.css';

  class Menu extends React.Component{
               render(){ 
                   return(
                  <div>
                  

                    <div className="container-fluid ">

                    <div className="row">
                    <div className="col-3">
                    <img src={Make} alt="make" />
                    </div>
                   
                  
                    <div className="col-6 mx-auto ">
          <nav className="navbar navbar-expand-lg navbar-light">
        
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink activeClassName="menu_active" className="nav-link" to="/">HOME
               </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  activeClassName="menu_active"className="nav-link" to="/about">ABOUT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  activeClassName="menu_active"className="nav-link" to="/about">SERVICES</NavLink>
              </li>
              
         
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">BLOG</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">CONTACT US</NavLink>
              </li>
             
            </ul>
          </div>
        </nav>
                  </div>
                  <div className="col-2 raq">
                   < BsPencilSquare/>
                   <span className="Quote">Request A Quote</span>
                    </div>
                  </div>
                  </div>
                <hr style={{borderBottom:"1px solid #fff"}}/>
               
              
              
                </div>
                 
                 
                   )
               }

  } 
  export default Menu
 