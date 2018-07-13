import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('api/inventory').then((results) => {
      this.setState({ products: results.data })

    })
  }




  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
