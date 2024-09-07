import React, { useState, useEffect } from 'react';
import { createService } from '../../api/servicesAPI';

const ServiceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [speed, setSpeed] = useState('');
  const [features, setFeatures] = useState('');

  useEffect(() => {
    // Si necesitas algún efecto al montar el componente, colócalo aquí.
  }, []); // Vacío para ejecutar solo al montar el componente

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newService = {
      name,
      description,
      price,
      speed,
      features: features.split(',').map((feature) => feature.trim()),
    };
    try {
      // Crear nuevo servicio o actualizar
      await createService(newService);

      // Limpiar formulario después de crear o actualizar
      setName('');
      setDescription('');
      setPrice('');
      setSpeed('');
      setFeatures('');

      // Llamar a la función onSubmit para actualizar la lista
      // onSubmit();
    } catch (error) {
      console.error('Error al guardar el servicio:', error);
    }
  };

  return (
    <div className="container mt-4">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#planesModal">
        Crear Nuevo Servicio
      </button>

      <div className="modal fade" id="planesModal" tabIndex="-1" aria-labelledby="planesModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="planesModalLabel">Crear Servicio</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
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
                <br />
                <div className="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Crear Servicio</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
