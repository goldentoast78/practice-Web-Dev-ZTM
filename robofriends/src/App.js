import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const state = {
    robots:robots,
    Searchfield: ''
}
const App =() =>{
    return (
        <div className="tc f3">
            <h1 >Robofariends</h1>
            <SearchBox/>
            <CardList robots = {robots} />
        </div>
    );
}

export default App;