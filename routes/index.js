const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const defaultController = require('../controllers/defaultController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', defaultController.index);
router.get('/gifs', catchErrors(dataController.gifs));
router.get('/gif/:id', catchErrors(dataController.gifById));
router.get('/music/:lang/:id', dataController.music);
router.get('/quotes/:lang/:id', dataController.quotes);
router.get('/soundfx/:lang/:id', dataController.soundfx);

module.exports = router;