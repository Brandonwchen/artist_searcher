import React from 'react';
import { numberWithCommas } from './helpers/utils'
import './styles.css'

const ArtistDetail = ({ artistDetail }) => {

    return (
        <div className="artist">
            <div className="artist-background-container">
                <div className="artist-background" style={{backgroundImage: `url(${artistDetail.images[0].url})`}}></div>
                <div className="gradient"></div>
            </div>
            <div className="artist-portrait">
                <div className="artist-image" style={{backgroundImage: `url(${artistDetail.images[0].url})`}}></div>
            </div>
            <div className="artist-info-container">
                <p className="artist-tag noto">Artist</p>
                <h1 className="artist-name krona">{artistDetail.name}</h1>
                <p className="artist-followers noto">Fans: {numberWithCommas(artistDetail.followers.total)}</p>
                <div className="artist-genres-container">
                    <div className='genre noto'>Genre: Pop</div>
                </div>
            </div>

        </div>
    )
}

export default ArtistDetail;