import React, { useState, useEffect } from 'react';
import { createService} from '../../api/servicesAPI'; 

const ServiceForm = ({ service, onSubmit }) => {
  const [name, setName] = useState(service ? service.name : '');
  const [description, setDescription] = useState(service ? service.description : '');
  const [price, setPrice] = useState(service ? service.price : '');
  const [speed, setSpeed] = useState(service ? service.speed : '');
  const [features, setFeatures] = useState(service ? service.features.join(', ') : '');

  useEffect(() => {
    if (service) {
      setName(service.name);
      setDescription(service.description);
      setPrice(service.price);
      setSpeed(service.speed);
      setFeatures(service.features.join(', '));
    } else {
      setName('');
      setDescription('');
      setPrice('');
      setSpeed('');
      setFeatures('');
    }
  }, [service]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newService = { 
      name, 
      description, 
      price, 
      speed, 
      features: features.split(',').map(feature => feature.trim()) 
    };

    try {

        // Crear nuevo servicio
        await createService(newService);

      
      // Limpiar formulario después de crear o actualizar
      setName('');
      setDescription('');
      setPrice('');
      setSpeed('');
      setFeatures('');
      
      // Llamar a la función onSubmit para actualizar la lista
      onSubmit();
    } catch (error) {
      console.error("Error al guardar el servicio:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{service ? 'Actualizar Servicio' : 'Crear Nuevo Servicio'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="speed">Velocidad:</label>
          <input
            type="text"
            className="form-control"
            id="speed"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="features">Características (separadas por comas):</label>
          <input
            type="text"
            className="form-control"
            id="features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {service ? 'Actualizar' : 'Crear Servicio'}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
