import React from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import Search from "../components/Search"

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true,
        }
        this.searchMovies = this.searchMovies.bind(this);
    }

    searchMovies = (str, type='all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=31bb6e5c&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
        .then(res => res.json())
        .then(data => {this.setState({movies: data.Search, loading:false})})
        .catch((err) => {
            console.error(err);
            this.setState({loading: false})
        })
    }

    componentDidMount() {
        this.searchMovies('matrix')
    }

    render (){
        const {movies, loading} = this.state;

        return(
            <main className="main container">
                <Search callback={this.searchMovies} />
                {loading ? (
                    <Preloader />
                ) : (
                    <Movies movies={movies} />
                )}
            </main>
        )
    }
}
export {Main}