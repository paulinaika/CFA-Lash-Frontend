import React, { Component } from 'react';
import axios from 'axios';
import { Button, ButtonGroup } from 'react-bootstrap';

class LashDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      orderQuantity: 0,
      orderType: "add"
    }
  }

  componentDidMount() {
    console.log('props', this.props);
    this.getLash();
  }

  getLash() {
    const URL = `https://fave-lash.herokuapp.com/api/${this.props.match.params.id}?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxpbmFAZ21haWwuY29tIiwiaWF0IjoxNDk2NzQ0MTEyfQ.H6BMLWx7oFL7s0IUZXgqWDGjTYAICcf3Sdn5frEYMos`
    axios.get(URL)
      .then((response) => {
        this.setState({
          product: response.data,
        });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateQuantity() {
    const URL_UPDATE = `https://fave-lash.herokuapp.com/api/${this.props.match.params.id}?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxpbmFAZ21haWwuY29tIiwiaWF0IjoxNDk2NzQ0MTEyfQ.H6BMLWx7oFL7s0IUZXgqWDGjTYAICcf3Sdn5frEYMos`;
    let quantity = Math.abs(this.state.orderQuantity);
    if (this.state.orderType === 'remove') {
      quantity = -(this.state.orderQuantity)
    } else {
      quantity = this.state.orderQuantity
    };
    console.log(quantity);
    // axios.post(URL_UPDATE, {
    //   orderQuantity: quantity,
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  handleOrderChange(e) {
    // console.log(e.target.value)
    this.setState({
      orderQuantity: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.product.name}</p>
        <p>Price: ${this.state.product.price}</p>
        <p>Quantity: {this.state.product.quantity}</p>
        <ButtonGroup>
           <Button
             onClick={() => this.setState({ orderType: "add" })}
             active={this.state.orderType === 'add'}
           >
             Add
           </Button>
           <Button
             onClick={() => this.setState({ orderType: "remove" })}
             active={this.state.orderType === 'remove'}
           >
             Remove
           </Button>
        </ButtonGroup>
        <p><input type="number" onChange={(e) => this.handleOrderChange(e)} /></p>
        <p>Total Price: ${this.state.orderQuantity * this.state.product.price}</p>
        <Button onClick={() => this.updateQuantity()}>Submit</Button>
      </div>

    )
  }
}

export default LashDetail;
