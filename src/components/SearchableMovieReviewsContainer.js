import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = e => {
        this.setState({ searchTerm: e.target.value } )
    }

    submitHandler = e => {
        e.preventDefault() 
        fetch(URL.concat(this.state.searchTerm))
        .then(r => r.json())
        .then(data => this.setState({ reviews: data.results}))
    }

    render() {
        return (
            <div className="review-search-form">
                <h3>Find a Review</h3>
                <form onSubmit={this.submitHandler}>
                    <input type='text' onChange={this.handleChange} />
                    <button type='submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />   
                <br />
            </div>
        )
    }
}