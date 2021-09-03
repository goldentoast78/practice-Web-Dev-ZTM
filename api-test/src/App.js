import React from 'react';
import './App.css';
import Api from './Api';
import SearchBox from "./SearchBox";
import { Component } from 'react';

class App extends Component {
  constructor() {
      super()//why need this
      this.state ={
          starwarer: [],
          searchfield: ''
      }
  }

  componentDidMount() {
      fetch('https://swapi.py4e.com/api/people/{searchfield}/')
      .then(Response=> Response.json())
      .then(users=> this.setState({starwarer: users}));
  }

  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
      console.log(event.target.value);
  }
  render() {
      const {starwarer,searchfield} = this.state;
      return !starwarer.length ?
          <h1>加載中</h1> :
           (
          <div className="tc">
              <h1 className='f1'>startwar_friends</h1>
              <SearchBox searchChange={this.onSearchChange}/>                          
              <Api starwarer = {filteredswer} />                                                <CardList robots = {filteredRobots} />                                      
          </div>
          )
  }

}

export default App;
