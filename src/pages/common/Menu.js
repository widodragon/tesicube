import React,{Component} from 'react'
import { Link } from "react-router-dom";

export default class Menu extends Component{
  render(){
    return(
      <div>
		  <aside className="main-sidebar" style={{marginTop:"20px"}}>
		    {/* sidebar: style can be found in sidebar.less */}
		    <section className="sidebar">
		      <ul className="sidebar-menu" data-widget="tree">
		        <li>
		        <Link to='/home'>
		            <i className="fa fa-home"></i> <span>Home</span>
		        </Link>
		        </li>
		        <li>
		          <Link to='/schedule'>
		            <i className="fa fa-calendar-check-o"></i> <span>Schedule</span>
		          </Link>
		        </li>
		        <li>
		          <Link to='/tracking'>
		            <i className="fa fa-paper-plane"></i> <span>Tracking</span>
		          </Link>
		        </li>
		        <li>
		          <Link to='/report'>
		            <i className="fa fa-bar-chart"></i> <span>Report</span>
		          </Link>
		        </li>
		      </ul>
		    </section>
		    {/* /.sidebar */}
		  </aside>
      </div>
    )
  }
}