import React, { useEffect, useState } from 'react'

// API
import { GetAllContactAPI } from '../APIs/api';

const CustomerCards = () => {
      const [Contact, setContact] = useState();

const FetchContact = async () => {
    try {
      const response = await GetAllContactAPI();
      console.log("response: ", response);
      setContact(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchContact();
  }, []);

    return (
        <>
            <div className='container-fluid bg-white rounded'>
                <h1 className='text-uppercase'>Contact Info</h1>
                <div className='row mt-3'>
                    {Contact?.map((items, index) => (
                        <div className='col-lg-4 mb-3'>
                            <div className="card shadow border-3 border contact-card-bg">
                                {/* <img
                                    className="card-img-top"
                                    src={CardsImg}
                                    alt="card images"
                                /> */}
                                <div className="card-body pb-0">
                                    <div className='d-flex justify-content-between border-bottom '>
                                    <h5><span className='py-1 px-2 rounded bg-danger text-white text-uppercase shadow'>{items?.user_name}</span></h5>
                                    <p><span className='font-weight-bold'>Mob:-</span> {items?.user_mobile}</p>
                                    </div>
                                    <div>
                                        <h4 className='mt-2'>{items?.user_subject}</h4>
                                        <p className='text-muted mt-2'>Message:- {items?.user_message}</p>
                                    </div>
                                    <div className="d-flex align-items-center border-top border-dark py-3 mt-3">
                                        <p className="mb-0"><span className='font-weight-bold'>Email:-</span> {items?.user_email}</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CustomerCards;
