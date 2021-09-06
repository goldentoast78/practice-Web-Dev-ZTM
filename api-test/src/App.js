import React from 'react';
import './App.css';
import Api from './Api';
import SearchBox from "./SearchBox";
import { Component } from 'react';

class App extends Component {
  constructor() {
      super()//why need this
      this.state ={
          starwarers: [],
          searchfield: ''
      }
  }

  componentDidMount() {
      fetch('http://swapi.py4e.com/api/people/1/')
      .then(Response=> Response.json())
      .then(users=> this.setState({starwarers: users}));
  }

  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
      console.log(event.target.value);
  }
  render() {
      const {starwarers,searchfield} = this.state;
      const filteredswer= starwarers.filter(starwarer =>{
        return starwarer.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    })
      return !starwarers.length ?
          <h1>加載中</h1> :
           (
          <div className="tc">
              <h1 className='f1'>startwar_friends</h1>
              <SearchBox searchChange={this.onSearchChange}/>                          
              <Api starwarer = {filteredswer} />                                   
          </div>
          )
  }

}

export default App;
