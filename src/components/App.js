import React from 'react';
import Autocomplete from './Autocomplete';
import { getData } from '../apis/axiosrequest'
import { debounce } from './helpers/utils';
import { sampleDetail, sampleTracks } from './helpers/harddata';
import ArtistDetail from './ArtistDetail'
import TopTracks from './TopTracks';

class App extends React.Component {

    state = {
        searchTerm: '',
        accessToken: '',
        artistArr: [],
        artistDetail: sampleDetail,
        topTracks: sampleTracks
    }

    onInputChange = debounce( async term => { 
        if(term){
            await getData(`http://localhost:3001/search`, {
                q: term,
                type: 'artist',
                limit: 6
            }).then(response => {
            console.log(response);
                this.setState({
                    searchTerm: term,
                    artistArr: response.artists.items
                })
        }).catch((error)=>{
              console.log(error);
            })
        } else {
            this.setState({
                searchTerm: '',
                artistArr: []
            })
        }
    }, 1000)


    onArtistClick = async artistId => {
        // get artist details
        const responseArtistDetail = await getData(`http://localhost:3001/artist`, {
                id: artistId,
        })
        .catch((error)=>{
              console.log(error);
        })
        console.log(responseArtistDetail);
        // get top tracks
        const responseTopTracks = await getData(`http://localhost:3001/top-tracks`, {
                id: artistId,
                country: 'US'
        })
        .catch((error)=>{
              console.log(error);
        })
        console.log(responseTopTracks);
        // get albums
        const responseAlbums = await getData(`http://localhost:3001/albums`, {
            id: artistId,
            country: 'US',
            include_groups: "album"
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(responseAlbums);
        this.setState({
            artistArr: [],
            artistDetail: responseArtistDetail,
            topTracks: responseTopTracks
        })
    }

    render(){
        return (
            <div className="top-container">
                
                <ArtistDetail
                artistDetail={this.state.artistDetail}
                />
                <Autocomplete 
                onSubmitHandler={this.onSubmitHandler}
                onInputChange={this.onInputChange}
                artistArray={this.state.artistArr}
                onArtistClick={this.onArtistClick}
                />
                <TopTracks
                topTracks={this.state.topTracks}
                />
            </div>
        )
    }
}

export default App;