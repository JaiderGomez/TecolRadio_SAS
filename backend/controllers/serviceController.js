// Modelo
const Service = require('../models/serviceModel');

// Obtener todos los servicios y planes
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo servicio
exports.createService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un servicio existente
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) return res.status(404).json({ message: 'Servicio no encontrado' });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un servicio
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Servicio no encontrado' });
    res.status(200).json({ message: 'Servicio eliminado' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
