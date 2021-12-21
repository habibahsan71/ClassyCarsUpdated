import React from 'react';
import useReviews from '../../Hoocks/useReviews';
import Rating from 'react-rating';
import './review.css'
import Slide from 'react-reveal/Slide';
const ShowReview = () => {
    const [reviews] = useReviews();
    return (
        <Slide right>
            <div className='my-5 container'>
                <h3 className='text-center mt-3'>What Our Customer says About Us</h3>
                <div className="row row-cols-1 row-cols-md-6 g-4">
                    {
                        reviews.map(review => (
                            <div key={reviews._id} className="col service">
                                <div className="card">

                                    <div className="card-body text-center">

                                        <h5 className="card-title text-primary">{review.name}</h5>
                                        <Rating emptySymbol="far fa-star color"
                                            fullSymbol="fas fa-star color" initialRating={review.rating}
                                            fractions={2} readonly></Rating>
                                        <br />
                                        <p className="card-title text-muted"><small>{review.comments}</small></p>

                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Slide>
    );
};

export default ShowReview;

