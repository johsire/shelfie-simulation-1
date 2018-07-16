import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        imageUrl: '',
        productName: '',
        priceInput: '',
      }
      // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    console.log(e.target.value, 'change event being fired');
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCancel = (e) => {
    console.log(e.target, 'cancel event being fired');
    e.preventDefault();
    this.setState({
      imageUrl: '',
      productName: '',
      priceInput: '',
    })
  }

  handleSubmit = (e) => {
    console.log(e.target, 'submit event being fired');
    e.preventDefault();
    const data = {
      imageUrl: this.state.imageUrl,
      productName: this.state.productName,
      priceInput: this.state.priceInput,
    }
    axios.post('api/product', data)
  }


  render() {
    return(
      <div>
      Image URL: {this.state.imageUrl}<br />
      Product Name: {this.state.productName}<br />
      Price: {this.state.priceInput} <br />
      <img src={this.state.imageUrl} />
      <form>
        <br />
        <input
          name="imageUrl" 
          placeholder='Image Url' 
          value={this.state.imageUrl} 
          onChange={e => this.handleChange(e)} 
        />

        <br />
        <br />

        <input 
          name="productName" 
          placeholder='Product Name' 
          value={this.state.productName} 
          onChange={e => this.handleChange(e)}/>

        <br />
        <br />

        <input 
        name="priceInput"
        placeholder='Price' 
        value={this.state.priceInput} 
        onChange={e => this.handleChange(e)}/>

        <br />
        <br />
        <button onSubmit={e => this.handleSubmit(e)}>Add to inventory</button> 
        <br />
        <br /> 
        <button onClick={e => this.handleCancel(e)}>Cancel</button>

      </form>
      </div>
    )}
  }

export default Form;
