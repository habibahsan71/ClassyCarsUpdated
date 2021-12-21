import React from "react";


const Footer = () => {
    return (
        <div className='bg-dark text-white '>


            <footer className="bg-dark text-center text-lg-start text-white">
                <div className="container p-4">

                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">See other Services</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Our Services</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Facilities</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Our Packages</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Extra Services</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-backspace fa-fw fa-sm me-2"></i>Parts</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Engine Services</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Our Location</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white">HBK Super Cars</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">123 Street</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">05765 NY</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Send us a feedback</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Write to us</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-at fa-fw fa-sm me-2"></i>Help in Purchasing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the Car availability</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-envelope fa-fw fa-sm me-2"></i>Join the newsletter</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>



                <p className="text-center m-0 py-3 copyright">
                    Copyright © All Reserved by HBK Super Cars
                </p>

            </footer>




        </div>
    );
};

export default Footer;



