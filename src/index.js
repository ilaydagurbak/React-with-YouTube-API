import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

//most parent component should fetch the data
const API_KEY = 'AIzaSyB-gjN0ImLaAez19QcbCHmnt7wc208Ijhs'

YTSearch({key: API_KEY , term: 'bulldogs'}, function(data) {
    console.log(data)
})

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'))