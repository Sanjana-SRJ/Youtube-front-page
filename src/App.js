import React, { Component } from 'react';
import SearchBar from './Searchbar';
import VideoList from './Videolist';
import VideoDetails from './Videodetails';
import api from './API/api';


class App extends React.Component {
   state = {
        videos:[],
        selectedVideo:null
    }
    handleSubmit = async(termFromSearchBar) => {
        const response = await api.get('/search', {
            params: {
                q: termFromSearchBar,
            }
        })
        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",this.state.videos);
      
    };
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                  {/* {this.state.videos} */}
                <VideoList vid={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                <VideoDetails video={this.state.selectedVideo}/>
                    
                </div>
            </div>
        )
    }
}

export default App;