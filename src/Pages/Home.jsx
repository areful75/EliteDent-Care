import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import ServiceCard from '../components/ServiceCard/ServiceCard';

const Home = () => {
    const serviceData = useLoaderData();
    //console.log(serviceData);
    return (
        <div>
            this is home
            <div className='grid grid-cols-4 w-11/12 mx-auto gap-5'>
                {
                    serviceData.slice(0,8).map(serviceData => <ServiceCard serviceData={serviceData} key={serviceData.id}>

                    </ServiceCard>)
                }
            </div>
            <NavLink to="/allTreatment"><button className='btn btn-primary mx-auto block'>Show More</button>
            </NavLink>
        </div>
    );
};

export default Home;