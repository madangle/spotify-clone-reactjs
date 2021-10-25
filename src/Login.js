import React from 'react'
import "./Login.css";
import {loginUrl} from './spotify';
import spotifyLogo from './assets/images/spotify-logo.png';

function Login() {
    return (
        <div className="login">
            <img
                src={spotifyLogo}
                alt="Spotify Logo"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            {/* <div className="login-wrapper">
                <h1>Looking for music?</h1>
                <h2>Start listening to the best new releases.</h2>
                <a href={loginUrl}>Open Web Player</a>
            </div> */}
        </div>
        
    )
}

export default Login
