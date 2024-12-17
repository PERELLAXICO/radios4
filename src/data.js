import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import ReactPlayer from 'react-player';

function Player() {
  const song = {




name: "PRUEBA",
artist: "Christian Music Industrial",
cover: "https://cdn.pixabay.com/photo/2015/06/20/00/11/bible-815432_1280.png",
id: uuidv4(),
color: ["#FFFFFF", "#FF0000"],
audio: "http://164.68.122.137:8061/;", 
active: false,


  };

  return (
    <div>
      <ReactPlayer
        url="https://cors-anywhere.herokuapp.com/http://164.68.122.137:8061/" // Verifica si esta URL es válida
        playing={true}
        controls={true}
      />

      <div>
        <h2>{song.name}</h2>
        <p>{song.artist}</p>
        <img src={song.cover} alt={song.name} />
      </div>
    </div>
  );
}

export default Player;


