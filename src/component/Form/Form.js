import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        imageUrl: '',
        productName: '',
        priceInput: '',
      }
      this.handleChange = this.handleChange.bind(this)
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.onSubmit()
    console.log(this.state);
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.onClick();
    console.log(this.state);
  }


  render() {
    return(
      <form>
        <br />
        <input
        name="imageUrl" 
        placeholder='Image Url' 
        value={this.state.imageUrl} 
        onChange={e => this.change(e)} />

        <br />
        <br />

        <input 
        name="productName" 
        placeholder='Product Name' 
        value={this.state.productName} 
        onChange={e => this.change(e)}/>

        <br />
        <br />

        <input 
        name="priceInput"
        placeholder='Price' 
        value={this.state.priceInput} 
        onChange={e => this.change(e)}/>

        <br />
        <br />

        <button onClick={e => this.onSubmit(e)}>Cancel</button>

        <br />
        <br /> 

         <button onSubmit={e => this.onClick(e)}>Add to inventory</button> 
      </form>
    )}
  }

export default Form;
