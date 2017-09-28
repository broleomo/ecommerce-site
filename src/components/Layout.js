import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';



export default class BaseLayout extends Component {
  render(){
    return(
      <div>
        <h1 className="site-header"> E-Commerce Site</h1>
        <nav className="navbar">
          <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="" className="nav-link" to="/contact">Contact</NavLink>
      </nav>
    </div>
    )
  }
}
