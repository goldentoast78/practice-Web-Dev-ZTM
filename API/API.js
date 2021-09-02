import React from 'react';
// import './Card.css';

輸入資料 
加入api 
顯示

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='pa3'>
        <input 
        className='pa3 ba b--green bg-light=blue'
        type='search'
        placeholder='input from 1 to 100' 
        onChange={searchChange}
        />
        </div>
    );
}
const urls = "https://swapi.py4e.com/api/people/{searchfield}/";
  
const getData = async function () {
    try {
      const [users, posts, albums] = await Promise.all(
        urls.map(async function (url) {
          const response = await fetch(url);
          return response.json();
        }),
      );
      console.log("users", users);
      console.log("posta", posts);
      console.log("albums", albums);
    } catch (err) {
      console.log("ooooooops", err);
    }
};
