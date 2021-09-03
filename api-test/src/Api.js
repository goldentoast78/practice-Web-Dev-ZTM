import React from 'react';
// import './Card.css';

// 輸入資料 
// 加入api 
// 顯示

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
export default Api;