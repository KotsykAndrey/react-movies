import React from "react";

export default class Search extends React.Component{
    state = {
        search: 'matrix',
        type: 'all'
    }

    search = () => {
        this.props.callback(this.state.search, this.state.type);
    }

    handleKey = (e) => {
        if(e.key === 'Enter'){
            this.search();
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.search();
        })
    }

    render() {
        return (
            <div className="input-field col s12">
                <input 
                    type="search"
                    className="validate" 
                    placeholder="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button 
                    className='btn search-btn' 
                    onClick={
                        () => this.search()
                    } 
                    >Search
                </button>

                <div className="radio-wrapper">
                    <label className='label-radio'>
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter} 
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>

                    <label className='label-radio'>
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio"  
                            data-type="movie" 
                            onChange={this.handleFilter} 
                            checked={this.state.type === 'movie'} 
                        />
                        <span>Movies</span>
                    </label>

                    <label className='label-radio'>
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            data-type="series" 
                            onChange={this.handleFilter} 
                            checked={this.state.type === 'series'} 
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        )
    }
}