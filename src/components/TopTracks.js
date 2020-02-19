import React from 'react';
import './styles.css';
import { milsToMins } from './helpers/utils'

const TopTracks = ({ topTracks }) => {

    
    const tracks = topTracks.tracks.map((track,index) => {
        const audio = new Audio(track.preview_url);
        if(track.preview_url){
            return (
                <div  className="track noto" key={track.id}>
                    <span>{("0" + (index + 1)).slice(-2)}</span>
                    <img className="track-thumb" src={track.album.images[2].url} alt=''/>
                    <a target="_blank" rel="noopener noreferrer" href={`${track.external_urls.spotify}`}> {track.name} </a>
                    <div className="push-right">                   
                        <span className="preview" onMouseEnter={() => {
                            audio.play()
                        }}
                        onMouseLeave={() => {
                            audio.pause()
                            audio.currentTime = 0;
                        }}>preview</span>
                        <span className="song-length">{milsToMins(track.duration_ms)}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="track noto" key={track.id}>
                    <span>{("0" + (index + 1)).slice(-2)}</span>
                    <img className="track-thumb" src={track.album.images[2].url} alt=''/>
                    <a target="_blank" rel="noopener noreferrer" href={`${track.external_urls.spotify}`}>  {track.name} </a>
                    <div className="push-right">
                        <span className="song-length">{milsToMins(track.duration_ms)}</span>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="tracks-container">
        <h1 className="krona popular-tracks-tag">Popular Tracks</h1>
            {tracks}
        </div>
    )
}

export default TopTracks;