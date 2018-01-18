import React, { Component } from 'react';
import axios from 'axios';
import Shortened from './Shortened.component';
import ListUrl from './ListUrl.component';

export default class CreateUrl extends Component {
   
  constructor(props) {
    super(props);
    
    //Move later to config
    this.API_URL = 'http://localhost:5000';
    this.state = {
      sourceUrl: '',
      urlList:[],
      currentUrl:{sourceUrl:"",shortUrl:""}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLoadData= this.onLoadData.bind(this);
  }

  componentDidMount() {
    this.onLoadData();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const newUrl = {
      sourceUrl : this.state.sourceUrl
    };
    console.log("newUrl:",newUrl);
    axios.post(`${this.API_URL}/shorturl`, newUrl)
    .then(res => {  
      this.setState({...this.state,currentUrl:res.data,sourceUrl:''}); 
      this.onLoadData();      
    });
  }

  onLoadData(){
    axios.get(`${this.API_URL}/shorturl`)
    .then(res => {        
      this.setState({...this.state,urlList:res.data});
      console.log("after get:",this.state);
    });
  }

  render() {
    return (
      <div>
        <div id="topContainer">
          <form onSubmit={this.onSubmit}>
            <div className="input-group"> 
              <input  type="text" name="sourceUrl" id="sourceUrl" placeholder="Paste your long URL"
                  required className="form-control col-md-8 sourceUrlText"
                  value={this.state.sourceUrl} onChange={this.handleInputChange}/>
              <input type="submit" value="Shorten" className="btn btn-primary" />
            </div>
            
          </form>
          <Shortened currentUrl={this.state.currentUrl}></Shortened> 
        </div>
        <ListUrl urlList={this.state.urlList}></ListUrl>     
      </div>
    )
  }
}