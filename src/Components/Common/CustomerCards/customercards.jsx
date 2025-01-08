import React from 'react'

// Images
import CardsImg from "../../Assets/images/Login/register-bg.jpg";
const CustomerCards = () => {
    const CustomerData = [
        {
            name: "RAGNAROCK- Museet for pop, Roskilde",
            title: "It’s good to start or finish the day with delicious pancakes :)",
            description: "Published on May 23, 2018",
        },
        {
            name: "RAGNAROCK- Museet for pop, Roskilde",
            title: "It’s good to start or finish the day with delicious pancakes :)",
            description: "Published on May 23, 2018",
        },
        {
            name: "RAGNAROCK- Museet for pop, Roskilde",
            title: "It’s good to start or finish the day with delicious pancakes :)",
            description: "Published on May 23, 2018",
        },
        {
            name: "RAGNAROCK- Museet for pop, Roskilde",
            title: "It’s good to start or finish the day with delicious pancakes :)",
            description: "Published on May 23, 2018",
        },
    ]

    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    {CustomerData.map((items, index) => (
                        <div className='col-lg-4 mb-3'>
                            <div className="card shadow">
                                {/* <img
                                    className="card-img-top"
                                    src={CardsImg}
                                    alt="card images"
                                /> */}
                                <div className="card-body pb-0">
                                    <p className="text-muted">{items.name}</p>
                                    <hr />
                                    <div>
                                        <h5>{items.title}</h5>
                                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quisquam omnis? Blanditiis facilis iure officiis, saepe, reiciendis dolorum, ratione iusto doloribus eos placeat temporibus laborum provident ipsam ex? Tempora, ullam.</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                                        <p className="mb-0">{items.description}</p>
                                       
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
