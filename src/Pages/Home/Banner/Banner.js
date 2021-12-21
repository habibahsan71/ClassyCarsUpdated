import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.jpeg';
import banner2 from '../../../Images/Banner/banner2.jpeg';
import banner3 from '../../../Images/Banner/banner3.jpeg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block carousel-img "
                        src={banner1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block"
                        src={banner2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block  "
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;