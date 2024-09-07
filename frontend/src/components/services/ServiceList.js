import React, { useState, useEffect } from 'react';
import { getServices, deleteService } from '../../api/servicesAPI';
import ServiceForm from './ServiceForm';

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

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

  const handleAddOrUpdate = async () => {
    try {
      const servicesData = await getServices();
      setServices(servicesData);
      setSelectedService(null); // 
    } catch (error) {
      console.error("Error updating service list:", error);
    }
  };

  const handleEdit = (service) => {
    setSelectedService(service);
  };

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      const servicesData = await getServices();
      setServices(servicesData);
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div className="container mt-4">
      

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h2 className="display-4 fw-normal text-body-emphasis">Mis Planes y Servicios</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-5 mb-3 text-center">
        {services.map((service) => (
          <div className="col mb-4" key={service._id}>
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{service.name}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${service.price}<small className="text-body-secondary fw-light">/mes</small>
                </h1>
                <h2 className="card-title pricing-card-title">
                  {service.speed}<small className="text-body-secondary fw-light"> Mbps</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary"  data-bs-toggle="modal" data-bs-target="#planesModal" onClick={() => handleEdit(service)}>
                  Editar
                </button>
                <button type="button" className="w-100 btn btn-lg btn-outline-danger mt-2" onClick={() => handleDelete(service._id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default ServicesList;

