const express = require('express');
const app = express();
const inventory = require('../data/inventory')
const router = express.Router();

const showInvById = (req, res) => {
    const warehouse = [];
    inventory.map(item => item.warehouseId === req.params.id ? warehouse.push(item) : null);
    res.send(warehouse)
}

router.get('/warehouse/inventory/:id', showInvById)

module.exports = router;