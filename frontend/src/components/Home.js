import React, { useState, useEffect } from 'react';
import {getServices} from '../api/servicesAPI';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);


  return (
    <div className="container mt-4">
      
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">Planes y Servicios</h1>
        <p className="fs-5 text-body-secondary">Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.</p>
      </div>

      <div className="row row-cols-1 row-cols-md-4 mb-3 text-center">
        {services.map((service) => (
          <div className="col mb-4" key={service._id}>
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{service.name}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${service.price}<small className="text-body-secondary fw-light">/Mes</small>
                </h1>
                <h2 className="card-title pricing-card-title">
                  {service.speed}<small className="text-body-secondary fw-light"> Mbps</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a type="button" className="w-100 btn btn-lg btn-outline-secondary" href='#'>
                  Solicitar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Home;