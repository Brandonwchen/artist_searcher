import React from 'react';
import ArtistList from './ArtistList';
import './styles.css';

class Autocomplete extends React.Component{

    state = {
        searchTerm: ''
    }

    onInputChange = event => {
        this.props.onInputChange(event.target.value);
        this.setState({searchTerm: event.target.value})
    }

    render(){
        return(
            <div className="autocomplete">
                <input 
                className="search-bar noto"
                onChange={this.onInputChange} 
                onClick={this.onInputChange}
                type="text" value={this.state.searchTerm} 
                placeholder="Search Artists">
                </input>
                <ArtistList
                artistArray={this.props.artistArray}
                onArtistClick={this.props.onArtistClick}
                />
            </div>
        )
    }
}

export default Autocomplete;