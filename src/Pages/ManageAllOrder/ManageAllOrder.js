import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ManageAllOrder.css';
import doneImg from '../../Images/done.gif';
import useOrders from '../../Hoocks/useOrders';



const ManageAllOrder = () => {
    const [orders, setOrders] = useOrders();
    const [status, setStatus] = useState('Active');
    const [orderId, setOrdersId] = useState('');
    const [updateStatus, setUpdateStatus] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (_uid) => {
        setShow(true);
        setOrdersId(_uid);
    };
    const [modalShow, setModalShow] = useState(false);






    // useEffect(() => {
    //     fetch(`http://localhost:5000/AllOrder`)
    //         .then((res) => res.json())
    //         .then((data) => setAllOrder(data));

    // }, []);



    //Delete User 
    const handleDeleteOrder = () => {
        const url = `http://localhost:5000/AllOrder/${orderId}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setModalShow(true)
                }

            })
        handleClose();

    }

    const handleUpdateStatus = (id) => {
        const url = `http://localhost:5000/AllOrder/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                }
            })




    }


    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Deleted Successfully
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto'>
                    <img src={doneImg} className='w-50' alt="" srcSet="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Done</Button>
                </Modal.Footer>
            </Modal>
        );
    }





    // key = { orders._id }

    const handleUpdateData = () => {
        const remainingOrder = orders.filter(order => order._id !== orderId);
        setOrders(remainingOrder);

    }






    const handleStatusActivity = (handleStatus, id) => {
        if (handleStatus === 'Pending') {
            setUpdateStatus(true);
        }
        // else {
        //     console.log('zim');
        // }
        console.log(updateStatus)
    }




    return (
        <div className='container services-container' >
            <h1>Manage All Order {orders.length}</h1>
            {
                orders.map(order => (
                    <div className='all-order-div' key={order._id}>
                        <div className='all-order-img'>
                            <img src={order.img} alt="" />
                        </div>

                        <div className="card-body text-start">
                            <h5 className="card-title">{order.name}</h5>
                            <p className="card-text">{order.details}</p>
                            <h6>{order.userEmail}</h6>
                            <h6>{order.number}</h6>

                            {
                                updateStatus === false ?
                                    <h6>{order.status}</h6> : <h6>Active</h6>
                            }



                            <Button variant="danger" onClick={() => { handleShow(order._id) }} className="btn btn-primary my-3 mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete Order
                            </Button>


                            <Button variant="btn btn-primary" onClick={() => { handleUpdateStatus(order._id); setStatus('Active'); setUpdateStatus(true); handleStatusActivity(order.status, order._id) }} className="btn btn-primary my-3 mx-3">Active Order
                            </Button>



                            <Modal show={show} onHide={handleClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm Delete ?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Do You really want to delete these records? This process cannot be undone. </Modal.Body>
                                <Modal.Footer>


                                    <Button variant="secondary" onClick={() => handleClose()} >
                                        Close
                                    </Button>
                                    <Button variant="danger" onClick={() => { handleDeleteOrder(); }} >
                                        Delete
                                    </Button>
                                </Modal.Footer>
                            </Modal>



                            <>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => { setModalShow(false); handleUpdateData() }}
                                />
                            </>



                        </div>

                    </div>
                ))
            }
        </div >
    );
};

export default ManageAllOrder;