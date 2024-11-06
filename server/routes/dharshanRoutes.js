const express = require('express');
const router = express.Router();
const Dharshan = require('../models/Dharshan');
const { getDonations } = require('../controllers/donationController');

// GET route for fetching Dharshan data
router.get('/dharshan', async (req, res) => {
    try {
        const dharshans = await Dharshan.find();
        res.json(dharshans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route for fetching donations
router.get('/donations', getDonations);

module.exports = router;
