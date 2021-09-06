import React from 'react';
import Character from './Character';

// 輸入資料 
// 加入api 
// 顯示

  
const Api = ({starwarers}) =>{    
  if (false){
      throw  new Error('Nooooo!');
  }
  return (
      <div >
      {
          starwarers.map((user,i) =>{
          return (
          <Character           
          key = {i }
          name = {starwarers[i].name} 
          height = {starwarers[i].height} 
          brith_year = {starwarers[i].brith_year}
          />                       
      );
      })
      }
      </div>
  );
}

export default Api;