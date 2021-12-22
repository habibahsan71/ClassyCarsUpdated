import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const AddService = () => {

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImg] = useState('');
    const [error, setError] = useState();

    const data = { name, details, price, image }

    const handleFormSubmit = e => {
        e.preventDefault();
        e.target.reset();

    }


    const handleName = e => {
        setName(e.target.value);

    }


    const handleDetails = e => {
        setDetails(e.target.value);
    }


    const handlePrice = e => {
        setPrice(e.target.value);
    }


    const handleUrl = e => {
        setImg(e.target.value);
    }


    const handleSubmitButton = () => {
        if (data.name === '') {
            setError(`you can't submit an empty from`)
        }
        else {
            axios.post('https://pacific-caverns-05949.herokuapp.com/services', data)
                .then(res => {
                    // console.log(res);
                    alert('Service added');
                })
            setError(``);
            setName('');
            setDetails('');
            setImg('');
            setPrice('');
        }
    }



    return (
        <div className='container'>
            <h1>Add New Service</h1>

            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Service Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter Service Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Service Details</Form.Label>
                    <Form.Control onBlur={handleDetails} as="textarea" placeholder="Enter Service Details" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Service Price</Form.Label>
                    <Form.Control onBlur={handlePrice} type="number" placeholder="Enter Service Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Service Image URL</Form.Label>
                    <Form.Control onBlur={handleUrl} type="text" placeholder="Enter Service Image URL" required />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmitButton}>
                    Submit
                </Button>
                <p className='mt-2 fs-5 text-danger'>{error}</p>
            </Form>

        </div>
    );
};

export default AddService;