import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './App.css';
class App extends Component {
    constructor() {
        super()//why need this
        this.state ={
            robots: [],
            searchfield: ''
        }
        console.log('a');        
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users=> this.setState({robots: users}));        
        console.log('b');
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        console.log('c');
        console.log(filteredRobots);
        if (this.state.robots.length === 0) {
            return <h1>加載中</h1>
        } else{
            return (
                <div className="tc">
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots = {filteredRobots} />
                </div>
            );
        }

    }
}

export default App;