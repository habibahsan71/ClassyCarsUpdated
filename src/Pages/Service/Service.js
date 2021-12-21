import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import Zoom from 'react-reveal/Zoom';
const Service = ({ service }) => {


    const { _id, name, image, details, price } = service;

    return (


        <Zoom left>
            <div className="col service">
                <div className="card ">
                    <img src={image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Price: ${price}</h5>
                        <p className="card-title">{details}</p>
                    </div>
                    <div>
                        <Link to={`/placeorder/${_id}`}>
                            <button className='btn btn-outline-warning'>Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>



        </Zoom>


    );
};

export default Service;