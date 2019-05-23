const express = require('express');
const router = express.Router();
const warehouses = require('../data/warehouses.json')
const inventory = require('../data/inventory.json')

const showInvById = (req, res) => {
    const warehouse = [];
    inventory.map(item => item.warehouseId === req.params.id ? warehouse.push(item) : null);
    res.send(warehouse)
}

const getAllWarehouses = (req, res) => {
    res.json(warehouses);
}

const getAllInventory = (req, res) => {
    res.json(inventory);
}

const getSingleInventory = (req, res) => {
    const foundInv = getInv.find(inv => inv.id === req.params.id);

    if(!foundInv)
    {
        res.status(404).json({error: 'Invalid inventory id'});
    }

    res.json(foundInv);
}

const createNewWarehouse = (req, res) => {
    console.log({...req.body})
    const newWarehouse = {
        ...req.body
    }
    warehouses.push(newWarehouse);
    res.json(newWarehouse);
    
    if (!newWarehouse)
    {
        res.status(400).json({error: 'The information provided is invalid or some information is missing.'});
    }
};

router.get('/warehouses/:id/inventory', showInvById)
router.get('/inventory/:id', getSingleInventory);
router.get('/inventory', getAllInventory);
router.get('/warehouses', getAllWarehouses);
router.post('/newwarehouses', createNewWarehouse);

module.exports = router;