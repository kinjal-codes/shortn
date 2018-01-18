import React, { Component } from 'react';
import Moment from 'react-moment';

export default class ListUrl extends Component {
  constructor(props) {
    super(props);
   this.handleRowCopy = this.handleRowCopy.bind(this);
  }

 

  handleRowCopy(e){
    const url = e.target.getAttribute('data-item');
    navigator.clipboard.writeText(url);
    alert("Copied!");
  }

  render() {
    var displayList = this.props.urlList.map((url) => {
      return (
        <tr key={url.shortUrl}>          
          <td width="300"><div className="sourceUrl"><a target="_blank" href={url.sourceUrl}>{url.sourceUrl}</a></div></td>     
          <td  width="300"><a target="_blank" href={url.shortUrl}>{url.shortUrl}</a></td>          
          <td  width="100"><Moment fromNow>{url.createdAt}</Moment></td>               
          <td  width="50"><button data-item={url.shortUrl} className="btn btn-primary" onClick={this.handleRowCopy}>Copy</button></td>   
        </tr>
      );
    });
    return (
      <div id="urlList">
        <h5>Recently Shortned</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Source Url</th>
              <th>Short Url</th>   
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayList}          
          </tbody>
        </table>
      </div>
    );
  }
}
