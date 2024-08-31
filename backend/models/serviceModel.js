// backend/models/serviceModel.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
  price: { 
    type: Number, 
    required: false 
},
  speed: { 
    type: String, 
    required: false 
},
  features: [String]
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
