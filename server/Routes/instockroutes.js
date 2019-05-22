const { Router } = require('express');
const router = Router();
const warehouses = require('../data/warehouses.json')
const inventory = require('../data/inventory.json')

const getAllWarehouses = (req, res) => {
    res.json(warehouses);
}

const getAllInventory = (req, res) => {
    res.json(inventory);
}

router.get('/', getAllInventory);
router.get('/', getAllWarehouses);

module.exports = router;