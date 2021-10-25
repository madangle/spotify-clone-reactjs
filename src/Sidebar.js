import React from 'react';
import spotifyLogo from './assets/images/spotify-logo.png';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {useDataLayerValue} from './DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img 
                src={spotifyLogo}
                alt="Spotify"
                className="sidebar__logo" 
            /> 
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {
                playlists?.items?.map(playlist => (
                    <SidebarOption key={playlist.name} title={playlist.name} Icon={MusicNoteIcon}/>
                ))
            }
        </div>
    )
}

export default Sidebar
