const express = require('express');
const router = express.Router();

const {
    optimizeQuery,
    createIndex,
    resetIndexes
} = require('../controllers/optimizeController');

/**
 * Endpoint for optimizing MongoDB queries.
 */
router.post('/optimize', optimizeQuery);

/**
 * Endpoint for creating a suggested index.
 */
router.post('/create-index', createIndex);

/**
 * Endpoint for resetting collection indexes.
 */
router.post('/reset-indexes', resetIndexes);

module.exports = router;
