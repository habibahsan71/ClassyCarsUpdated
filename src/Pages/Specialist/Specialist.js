import React from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
const Specialist = () => {
    return (

        <div className="py-5 text-center">
            <div className="container ">
                <div className="row justify-content-center mb-4 ">
                    <div className="col-md-7 text-center">
                        <h3 className="mb-3">Experienced & Professional Team</h3>
                        <h6 className="subtitle">You can relay on our amazing Staff or can say our super Team that manage's all our Tour related operations</h6>
                    </div>
                </div>
                <div className="row">

                    <div className="row justify-content-center mb-4 row-cols-md-6">
                        <Slide left>
                            <div className="col-md-3 mb-4 m-3">

                                <div className="row border  border-light rounded shadow">
                                    <div className="col-md-12">
                                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="pt-2">
                                            <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                                            <h6 className="subtitle mb-3">CEO</h6>
                                            <p>You can relay on our amazing Staff or can say our super Team that manage's all our Tour guide operations.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Slide>
                        <Zoom>
                            <div className="col-md-3 mb-4 m-3">

                                <div className="row border border-light rounded shadow">
                                    <div className="col-md-12">
                                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="pt-2">
                                            <h5 className="mt-4 font-weight-medium mb-0">Cycle Doe</h5>
                                            <h6 className="subtitle mb-3">Client handling Specialist</h6>
                                            <p>You can relay on our amazing Staff or can say our super Team that manage's all our Event related operations.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Zoom>
                        <Slide right>
                            <div className="col-md-3 mb-4 m-3 ">

                                <div className="row border border-light rounded shadow">
                                    <div className="col-md-12">
                                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="pt-2">
                                            <h5 className="mt-4 font-weight-medium mb-0">Hbk Da NOOB</h5>
                                            <h6 className="subtitle mb-3">Environment Controller</h6>
                                            <p>You can relay on our amazing Staff or can say our super Team that manage's all our Medical related operations.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Specialist;