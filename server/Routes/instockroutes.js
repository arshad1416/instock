const { Router } = require('express');
const router = Router();
const warehouses = require('../data/warehouses.json')

const getAllWarehouses = (req, res) => {
    res.json(warehouses);
}
router.get('/', getAllWarehouses);

module.exports = router;