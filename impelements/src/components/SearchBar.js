import React from "react";


class SearchBar extends React.Component {
    state = {
        term : ""
    }
    onInputChange = (event) => {
        this.setState({term: event.target.value}) 
    }

    formHandel = (event) => {
        event.preventDefault();
        console.log(this.state.term)
        this.props.onSubmit(this.state.term);
    }

    render() {
        return( <div className="ui segment"> 
            <form onSubmit={this.formHandel} className="ui form">
                <div className="field">
                     <label >Image Search</label>
                    <input type="text"
                    // name="search"
                    onChange={this.onInputChange}
                    value={this.state.term}
                    />
                </div>
               
            </form>
        </div>);
    }   
}

export default SearchBar; 