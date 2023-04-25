import React from 'react'
import { NavLink } from 'react-router-dom'
import './adminnav.css'

export const AdminNav = () => {
  return (
    <div>
       <div class="area"></div><nav class="main-menu">
        <h3 style={{color:"white"}}>EVENTS</h3>
            <ul>
                <li>
                    <NavLink to="/home">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                          Admin Dashboard
                        </span>
                    </NavLink>
                  
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                           Add Decorators
                        </span>
                    </a>
                </li>
                <li>
                
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                            Reviews
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                            Display bookings
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-film fa-2x"></i>
                        <span class="nav-text">
                            Surveying Tutorials
                        </span>
                    </a>
                </li>
                
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Location
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Info
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </div>
  )
}
