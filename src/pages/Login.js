import React,{Component} from 'react'
import {Helmet} from "react-helmet";
// import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {addCustomer} from './../redux/actions/indihomes';
import { Card, Button, InputGroup, FormControl, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
	  checked: ''
    }
  }

  componentDidMount(){
  	this.setState({data:this.props.indihomes.customer})
  	// alert(JSON.stringify(this.props.indihomes.customer))
  }

  // onLogin = async (event) =>{
  // 	event.preventDefault();
  // 	const body={
  // 		"email":this.state.email,
  // 		"password":this.state.password
  // 	}
  // 	console.log(JSON.stringify(body));
  // 	try{
		// await this.props.dispatch(getLogin(body));
		// let token = this.props.indihomes.login.token;
		// let detail = this.props.indihomes.login.user.witel;
		// localStorage.setItem('token', token);
		// if(this.props.indihomes.login.level===1){
		// 	localStorage.setItem('detail', detail);
		// 	this.props.history.push({
		// 	  pathname: '/home',
		// 	  // state: { detail: this.props.indihomes.login.user }
		// 	});
		// }else if(this.props.indihomes.login.level===2){
		// 	alert("waiting for admin 2");
		// }
  // 	}catch(e){
		// console.log(e);
  // 	} 	
  // }
  // handleChange = (e,type) => {
  // 	if(type==='email'){
	 //  	let email = e.target.value
	 //  	this.setState({
	 //  		email : email
	 //  	})  		
	 //  }else{
	 //  	let password = e.target.value
	 //  	this.setState({
	 //  		password : password
	 //  	})
	 //  }
  // }
  render(){
  	//this css file for this page at public/dist/css/main
    return(
		<div>
		{this.state.data.map((item) => {
			return(
			 <Form>
			  <Form.Group as={Row} controlId="formPlaintextEmail">
			    <Form.Label column sm="2">
			      Email
			    </Form.Label>
			    <Col sm="8">
			      <Form.Control plaintext readOnly defaultValue={item.email} />
			    </Col>
			    <Link to={{
			    	pathname:"/home",
			    	aboutProps:item
			    }}>Lihat Detail</Link>
			  </Form.Group>
			 </Form>
			)
		})}
		</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    indihomes: state.indihomes
  }
}


export default connect(mapStateToProps)(Login)