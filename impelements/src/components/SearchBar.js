import React from "react";


class SearchBar extends React.Component {
    state = {
        term : ""
    }
    onInputChange(event) {
      const term=event.target.value
        console.log(term);
    }

    render() {
        return( <div className="ui segment"> 
            <form className="ui form">
                <div className="field">
                     <label >Image Search</label>
                    <input type="text"
                    name="search"
                    onChange={this.onInputChange}
                    value={this.state.search}
                    ></input>
                </div>
               
            </form>
        </div>);
    }
}

export default SearchBar; 