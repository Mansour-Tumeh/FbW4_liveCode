import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchMovies} from '../../store/actions/MovieActions'

class Search extends Component {

    state = {
        searchInput: '',
        searched: false
    }

    handleInput = (e) =>{
        this.setState({
            searchInput: e.target.value
        })
    }

    handleSearch = () =>{
        this.props.searchMovies(this.state.searchInput)
        this.setState({
            searched: true
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" placeholder="Search a movie..." onChange={this.handleInput}/>
                <button onClick={this.handleSearch} > Search </button>
                <div>
                    <h1>List of movies</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movieList : state.movies.movieList,
    isLoading : state.movies.isLoading,
    error     : state.movies.error,
    errorMessage: state.movies.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query))
})

export default connect(mapStateToProps,mapDispatchToProps)(Search)