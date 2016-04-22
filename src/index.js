import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    const API_KEY = 'AIzaSyD6h710E57zBn7e8oBEC8yrC4yLGugA8Sw';
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (videos) => {
      this.setState({
        videos
      })
      console.log(videos);
    });
  }
  render() {
    return ( <div>
      <SearchBar/>
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList videos={this.state.videos}/>
      </div>
    );
  };
}

ReactDOM.render( <App/> , document.querySelector('.container'));
