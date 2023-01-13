import React from 'react';
import {useEffect, useState} from 'react';

import Options from '../secrets/Options';

import musicData from '../interfaces/MusicData';






function MusicSearch() {

  useEffect(()=>{const options = Options;
  
  fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
    .then(response => response.json())
    .then(response => handleData(response.data))
    .catch(err => console.error(err));},[]);


    return (
      <div>
        Search Land
      </div>
    );
  }


  function handleData(data:musicData){
    console.log(data);
  }
  
  export default MusicSearch;
  