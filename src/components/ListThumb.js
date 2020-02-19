import React from 'react';
// import './styles.css'

const ListThumb = props => {

    // show placeholder if no img is available
    let thumb = './images/placeholder.png';
    if(props.artist.images.length > 0){
        thumb = props.artist.images[2].url;
    }
    return (
        <div onClick={() => props.onArtistClick(props.artist.id)} className="result-container">
            <img className="result-thumbs" src={thumb} alt=''/>
            <div className="result-name noto">
                {props.artist.name}
            </div>

        </div>
    )
}
export default ListThumb;