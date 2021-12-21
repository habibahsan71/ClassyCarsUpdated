import React from 'react';
import useServices from '../../Hoocks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();

    return (
        <div className='container services-container'>
            <h1>Our Cult Classic Cars</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>
                    )

                }
            </div>
        </div>
    );
};

export default Services;