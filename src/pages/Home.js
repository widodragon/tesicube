import React,{Component} from 'react'
import Menu from './common/Menu'
import {connect} from "react-redux";
// import {getUser} from './../redux/actions/indihomes';
import { Card, Button, InputGroup, FormControl, Form, Col, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      detail:{}
    }
  }
  componentDidMount(){
    this.setState({detail:this.props.location.aboutProps})
  }
  // async componentDidMount(){
  //   try{
  //     await this.props.dispatch(getUser(localStorage.getItem('token')));
  //     this.setState({user:localStorage.getItem('detail')});
  //     // const user = this.props.history.location.state.detail;
  //     // this.props.dispatch(saveUser(user));
  //   }catch(e){
  //     alert(e);
  //   }
  // }
  render(){
    return(
      <div>
           <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="8">
                  <Form.Control plaintext readOnly defaultValue={this.state.detail.email} />
                </Col>
              </Form.Group>
            </Form>
           <Form>
           <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue={this.state.detail.name} />
              </Col>
           </Form.Group>
           </Form>
           <Form>
           <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Nomor
              </Form.Label>
              <Col sm="">
                <Form.Control plaintext readOnly defaultValue={this.state.detail.no} />
              </Col>
           </Form.Group>
           </Form>
           <Form>
           <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="">
                <Form.Control plaintext readOnly defaultValue={this.state.detail.address} />
              </Col>
           </Form.Group>
           </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    indihomes: state.indihomes
  }
}


export default connect(mapStateToProps)(Home)