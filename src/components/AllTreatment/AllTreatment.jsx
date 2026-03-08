import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatment = () => {
    const serviceData = useLoaderData();
    return (
        <div className='grid grid-cols-4 w-11/12 mx-auto gap-5'>
                {
                    serviceData.map(serviceData => <ServiceCard serviceData={serviceData} key={serviceData.id}>

                    </ServiceCard>)
                }
            </div>
    );
};

export default AllTreatment;