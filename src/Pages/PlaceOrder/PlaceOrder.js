import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hoocks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {



    const { user } = useAuth();


    const { id } = useParams();
    const [service, setService] = useState([]);
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = '/' || location?.state?.from;





    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));

    }, []);


    const exactService = service.filter(item => item._id === id);



    const name = exactService[0]?.name;
    const details = exactService[0]?.details;
    const price = exactService[0]?.price;
    const img = exactService[0]?.img;
    const userEmail = user.email;
    const status = 'Pending';

    const orderData = { name, details, price, img, userEmail, address, number, status }

    const handlePlaceOrder = () => {
        if (address === '') {
            setError(`Address Please`);
        }
        else if (number === '') {
            setError(`Number Please`);
        }
        else {
            axios.post('http://localhost:5000/AllOrder', orderData)
                .then(res => {
                    console.log(res);
                    alert('Order Placed')
                })
            history.push(redirect_uri);

        }
    }




    const handleAddress = e => {
        setAddress(e.target.value);
    }

    const handleNumber = e => {
        setNumber(e.target.value);
    }


    // console.log(orderData);

    return (
        <div className='service-details'>


            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={exactService[0]?.img} />
                <Card.Body>
                    <Card.Title>{exactService[0]?.name}</Card.Title>
                    <Card.Text>
                        {exactService[0]?.details}
                    </Card.Text>
                    <Card.Title>Price: ${exactService[0]?.price}</Card.Title>

                    <Form.Group className="mb-3 mt-5">
                        <Form.Control placeholder={userEmail} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleAddress} type="text" placeholder="Enter Your Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleNumber} type="text" placeholder="Enter Your Phone Number" required />
                    </Form.Group>

                    <p className='mt-2 fs-5 text-danger'>{error}</p>

                    <div className='details-button'>
                        <Button variant="secondary" ><Link className='go-service' to='/services'>Go Back</Link></Button>
                        <Button variant="primary" onClick={handlePlaceOrder}><Link className='go-service' to='/myorder'>Review Order</Link></Button>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlaceOrder;



