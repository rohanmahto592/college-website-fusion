import React from 'react'
import { NavLink } from "react-router-dom";
import { navbar } from '../component_content';
import Fusion from '../Home_page/Fusion.png';
import light from '../Home_page/light.jpg';
import Gallery from '../gallery/Gallery';
import './navbar.css'
const NavBar = () => {
    return (
        <div style={{backgroundColor:'#151515'}}>
             <div className="container-fluid nav_bg">
        <div className="column">
          <div className="col-10 mx-auto">
             
            <nav className=" navbar sticky-top navbar-expand-lg navbar-dark ">
              <div className="container-fluid">
                <NavLink style={{color:'#03BFCB'}} className="navbar-brand head tran_color" to="/">
               Fusion Society
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  fontSize="large"
                   data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    {navbar.navbar_data.map((val, item) => {
                        if(val[1]!==null)
                        {
                      return (
                        <li  className="nav-item">
                          <NavLink
                            activeClassName="menu_active"
                            className="nav-link"
                            
                            exact
                            to={val[0]}
                          >
                              {
                    
                                      
                                          
                    
                                            val[1]==='Gallery'?
                                            <div class="dropdown2907">
                                               <button className="dropbtn2907">{val[1]}
                                                   <i className="fa fa-caret-down"></i>
                                                </button>
                                                 <div className="dropdown-content2907">
                                                     <NavLink className="sublink" exact to='/technical'>Technical</NavLink>
                                                     <NavLink className="sublink" exact to='/editorial'>Editorial</NavLink>
                                                     <NavLink className="sublink" exact to='/technical'>Photography</NavLink>
                                                     <NavLink className="sublink" exact to='/technical'>Sports</NavLink>
                                                     <NavLink className="sublink" exact to='/management'>Management</NavLink>
                                                     <NavLink className="sublink" exact to='/technical'>Cultural</NavLink>
                                                     <NavLink className="sublink" exact to='/technical'>Creative</NavLink>    
                                                 </div>
                                                 
                                                
                                             </div> : val[1]

                                          
                                        
                                      }
                                    
                    
                                
                    
                
                    
                                 
                                   
                                    
                          </NavLink>
                        </li>
                      );
                    }})}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
          </div>
          
          
          

      
     
            
       
    )

}

export default NavBar
