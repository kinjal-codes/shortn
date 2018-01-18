import React, { Component } from 'react';
import axios from 'axios';

export default class Shortened extends Component {
  constructor(props) {
    super(props);
    this.onCopy = this.onCopy.bind(this);
  }

  onCopy(){    
    navigator.clipboard.writeText(document.getElementById('shortUrl').value);
    alert("Copied!");
  }    
  
  render() {
    if(this.props.currentUrl.sourceUrl.length==0){
        return null;
    }

    return (      
       
        <div  className="input-group col-md-12" id="shortnedList"> 
            <input  id="sourceUrl" className="col-md-3" value={this.props.currentUrl.sourceUrl} readOnly/>
            <input  id="shortUrl" required className="col-md-3" value={this.props.currentUrl.shortUrl} readOnly/>
            <button value="copyShortUrl" className="btn btn-success" onClick={this.onCopy}>Copy</button>
        </div>      
    )
  }
}