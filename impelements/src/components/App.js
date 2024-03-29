import React from "react";

// import axios
import Unsplash from "./../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    
    const response = await Unsplash.get('/search/photos', {
      params: {query: term},
    });
    
    this.setState({images: response.data.results });
  }
  render() {
    return ( 
      <div className="ui container" style={{marginTop : 10}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images

          <ImageList images={this.state.images} />
        </div>
    );
  }
} 

export default App;