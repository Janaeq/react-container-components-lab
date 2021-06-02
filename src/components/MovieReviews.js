// Code MovieReviews Here
import React from 'react'

function MovieReviews({reviews}) {
    // console.log(reviews)
    return (
        <div className='review-list'>
            {reviews.map((review, i) => (
                <div className='review' key={i}>
                    <h3><a href={review.link.url}>{review.headline}</a> - {review.byline}</h3>
                    <p>{review.summary_short}</p>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default MovieReviews