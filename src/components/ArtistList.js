import React from 'react';
import ListThumb from './ListThumb';
import './styles.css';

const ArtistList = props => {

    let mappedArtists = props.artistArray.map(artist => {
        return(
            <ListThumb
            key={artist.id}
            artist={artist}
            onArtistClick={props.onArtistClick}
            />
        )
    });

    return (
        <div className="artists-results-list">
            <div>{mappedArtists}</div>
        </div>
    )
}

export default ArtistList;