import React, {Component} from "react";
import CardList from "../components/CardList";
// import { robots } from "./robots";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
class App extends Component {
    constructor() {
        super()//why need this
        this.state ={
            robots: [],
            searchfield: ''
        }
        // console.log('a');        
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users=> this.setState({robots: users}));        
        // console.log('b');
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
    }
    render() {
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        // console.log('c');
        // console.log(filteredRobots);
            return !robots.length ?
             <h1>加載中</h1> :
             (
                 <div className="tc">
                        <h1 className='f1'>Robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots = {filteredRobots} />
                            </ErrorBoundry>
                        </Scroll>                    
                </div>
            )
    }

}

export default App;