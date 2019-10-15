import React,{Component} from 'react'

export default class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onLogout(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = '/';
  }
  render(){
    return(
      <div>
		  <header className="main-header" style={{backgroundColor:"#FAFAFA"}}>
		    {/* Logo */}
		    <a href="index2.html" className="logo">
		      {/* mini logo for sidebar mini 50x50 pixels */}
		      <span className="logo-mini"><b>A</b>LT</span>
		      {/* logo for regular state and mobile devices */}
		      <span className="logo-lg">
		      	<img src="images/logo.png" style={{width:100,height:50}} className="user-image" alt="User" />
		      </span>
		    </a>
		    {/* Header Navbar: style can be found in header.less */}
		    <nav className="navbar navbar-static-top">
		      {/* Sidebar toggle button*/}
		      <a href="test" className="sidebar-toggle" data-toggle="push-menu" role="button">
		        <span className="sr-only">Toggle navigation</span>
		      </a>
		      {/* Navbar Right Menu */}
		      <div className="navbar-custom-menu" style={{marginRight:"25px"}}>
		        <ul className="nav navbar-nav">
		          {/* Notifications: style can be found in dropdown.less */}
		          <li className="dropdown notifications-menu">
		            <a href="test" className="dropdown-toggle" data-toggle="dropdown">
		              <i className="fa fa-bell-o"></i>
		              <span className="label label-warning">10</span>
		            </a>
		            <ul className="dropdown-menu">
		              <li className="header">You have 10 notifications</li>
		              <li>
		                {/* inner menu: contains the actual data */}
		                <ul className="menu">
		                  <li>
		                    <a href="test">
		                      <i className="fa fa-users text-aqua"></i> 5 new members joined today
		                    </a>
		                  </li>
		                  <li>
		                    <a href="test">
		                      <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
		                      page and may cause design problems
		                    </a>
		                  </li>
		                  <li>
		                    <a href="test">
		                      <i className="fa fa-users text-red"></i> 5 new members joined
		                    </a>
		                  </li>
		                  <li>
		                    <a href="test">
		                      <i className="fa fa-shopping-cart text-green"></i> 25 sales made
		                    </a>
		                  </li>
		                  <li>
		                    <a href="test">
		                      <i className="fa fa-user text-red"></i> You changed your username
		                    </a>
		                  </li>
		                </ul>
		              </li>
		              <li className="footer"><a href="test">View all</a></li>
		            </ul>
		          </li>
		          {/* Tasks: style can be found in dropdown.less */}
		          <li className="dropdown tasks-menu">
		            <a href="test" className="dropdown-toggle" data-toggle="dropdown">
		              <i className="fa fa-flag-o"></i>
		              <span className="label label-danger">9</span>
		            </a>
		            <ul className="dropdown-menu">
		              <li className="header">You have 9 tasks</li>
		              <li>
		                {/* inner menu: contains the actual data */}
		                <ul className="menu">
		                  <li>{/* Task item */}
		                    <a href="test">
		                      <h3>
		                        Design some buttons
		                        <small className="pull-right">20%</small>
		                      </h3>
		                      <div className="progress xs">
		                        <div className="progress-bar progress-bar-aqua" style={{width: "20%"}} role="progressbar"
		                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
		                          <span className="sr-only">20% Complete</span>
		                        </div>
		                      </div>
		                    </a>
		                  </li>
		                  {/* end task item */}
		                  <li>{/* Task item */}
		                    <a href="test">
		                      <h3>
		                        Create a nice theme
		                        <small className="pull-right">40%</small>
		                      </h3>
		                      <div className="progress xs">
		                        <div className="progress-bar progress-bar-green" style={{width: "40%"}} role="progressbar"
		                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
		                          <span className="sr-only">40% Complete</span>
		                        </div>
		                      </div>
		                    </a>
		                  </li>
		                  {/* end task item */}
		                  <li>{/* Task item */}
		                    <a href="test">
		                      <h3>
		                        Some task I need to do
		                        <small className="pull-right">60%</small>
		                      </h3>
		                      <div className="progress xs">
		                        <div className="progress-bar progress-bar-red" style={{width: "60%"}} role="progressbar"
		                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
		                          <span className="sr-only">60% Complete</span>
		                        </div>
		                      </div>
		                    </a>
		                  </li>
		                  {/* end task item */}
		                  <li>{/* Task item */}
		                    <a href="test">
		                      <h3>
		                        Make beautiful transitions
		                        <small className="pull-right">80%</small>
		                      </h3>
		                      <div className="progress xs">
		                        <div className="progress-bar progress-bar-yellow" style={{width: "80%"}} role="progressbar"
		                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
		                          <span className="sr-only">80% Complete</span>
		                        </div>
		                      </div>
		                    </a>
		                  </li>
		                  {/* end task item */}
		                </ul>
		              </li>
		              <li className="footer">
		                <a href="test">View all tasks</a>
		              </li>
		            </ul>
		          </li>
		          {/* User Account: style can be found in dropdown.less */}
		          <li className="dropdown user user-menu">
		            <a href="test" className="dropdown-toggle" data-toggle="dropdown">
		              <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User" />
		              <span className="hidden-xs">{this.props.name}</span>
		            </a>
		            <ul className="dropdown-menu" style={{marginTop:"10px", borderRadius:"5px"}}>
		              {/* Menu Footer*/}
                  		<li>
		                   <a href="test">
		                     <i className="fa fa-key text-aqua"></i> Change Password
		                   </a>
		                </li>
                  		<li>
		                   <a href="logout" onClick={this.onLogout}>
		                     <i className="fa fa-sign-out text-aqua"></i> Log Out
		                   </a>
		                </li>
		            </ul>
		          </li>
		        </ul>
		      </div>
		    </nav>
		  </header>
      </div>
    )
  }
}