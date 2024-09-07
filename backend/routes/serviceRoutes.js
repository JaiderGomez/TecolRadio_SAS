const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.getAllServices);
router.post('/', serviceController.createService);
router.put('/', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;
