import React, {useEffect} from 'react'
import './App.css';

import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Login';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
    
  }, [])

  console.log(user)
  console.log(token)
  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }     
    </div>
  );
}

export default App;
