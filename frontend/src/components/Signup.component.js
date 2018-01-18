import React, { Component } from 'react';
import axios from 'axios';

export default class SignupUrl extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          firstname: '',
          lastname: '',
          email: '', 
          password: '',       
          users: []
        }
      }
    
      onChangeFirstname(e) {
        this.setState({
          firstname: e.target.value
        })
      }
    
      onChangeLastname(e) {
        this.setState({
          lastname: e.target.value
        })
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const signUp = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
        }
    
        console.log(signUp);

        axios.post('http://localhost:5000/signUp',signUp)
        .then(res=> console.log(res.data));
        
        this.setState({
            firstname: '',
            lastname: '',
            email: '', 
            password: '',       
            users: []
        })
      }
   
   
    render() {
        return (
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>First Name: </label>
                <input  type="text" name="firstname"
                    required
                    className="form-control"
                    value={this.state.firstname}
                    onChange={this.onChangeFirstname}
                    />
              </div>
              <div className="form-group"> 
                <label>Last Name: </label>
                <input  type="text" name="lastname"
                    required
                    className="form-control"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}
                    />
              </div>
              <div className="form-group"> 
                <label>E-mail id: </label>
                <input  type="email" name="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
              </div>
              <div className="form-group"> 
                <label>Password: </label>
                <input  type="password" name="password"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
              </div>
              <div className="form-group">
                <input type="submit"  className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
    }
    