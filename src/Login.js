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
        </div>
    )
}

export default Login
