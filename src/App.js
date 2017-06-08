import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import LashListing from './LashListing';


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    name: '',
    productListing: []
  }
}

componentDidMount(){
   this.getData();
};

getData(){
  const URL = 'https://fave-lash.herokuapp.com/api?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxpbmFAZ21haWwuY29tIiwiaWF0IjoxNDk2NzQ0MTEyfQ.H6BMLWx7oFL7s0IUZXgqWDGjTYAICcf3Sdn5frEYMos'
  axios.get(URL)
    .then((response) => {
      this.setState({
        productListing: response.data,
      });
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  render() {
    return (
    <div>
      {this.state.productListing.map((listing, i) =>
        <LashListing
          listing={listing}
          key={i}
        />
      )}
    </div>
    );
  }
}

export default App;
