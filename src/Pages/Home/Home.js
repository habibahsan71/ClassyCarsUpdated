import React from 'react';
import { useHistory } from 'react-router';
import useServices from '../../Hoocks/useServices';
import ShowReview from '../Review/ShowReview';
import Service from '../Service/Service';
import Specialist from '../Specialist/Specialist';


import Banner from './Banner/Banner';

const Home = () => {
    const history = useHistory();
    const [services] = useServices();
    const featuredServices = services.slice(0, 6);
    function GoServices() {
        history.push("/services");
    }
    return (
        <div>
            <Banner></Banner>
            {/* <Services></Services> */}
            <div className='container services-container'>
                <h2>Have A Look At Our cars</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        featuredServices.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>
                        )

                    }
                </div>
                <button onClick={GoServices} className='btn btn-outline-warning my-2'>Explore More</button>
            </div>
            <Specialist></Specialist>
            <ShowReview ></ShowReview>

        </div>
    );
};

export default Home;