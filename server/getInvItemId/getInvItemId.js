const { Router } = require('express');
const getInv = require('../data/inventory.json');
const router = Router();
const port = 8080;
const url = `http://localhost:8080`;

console.log(getInv);


const getAllInventory = (req, res) => {
    res.json(getInv.map(inv => ({
        ...inv,
        link: `${url}/inventory/${inv.id}`
    })))
}

const getsingleInventory = (req, res) => {
    const foundInv = getInv.find(inv => inv.id === req.params.id);

    if(!foundInv)
    {
        res.status(404).json({error: 'Invalid inventory id'});
    }

    res.json(foundInv);
}

router.get('/', getAllInventory);
router.get('/:id', getsingleInventory);

module.exports = router;