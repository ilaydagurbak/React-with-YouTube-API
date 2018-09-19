import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

//most parent component should fetch the data
const API_KEY = 'AIzaSyB-gjN0ImLaAez19QcbCHmnt7wc208Ijhs'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null
         }

        YTSearch({key: API_KEY , term: 'bulldog puppies'}, (videos) => {
           this.setState({ 
               videos: videos,
               selectedVideo: videos[0]
             })
        })
    }

    render() {
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))