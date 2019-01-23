const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const defaultController = require('../controllers/defaultController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', defaultController.index);

router.get('/gifs', catchErrors(dataController.gifs));
router.get('/gif/:id', catchErrors(dataController.gifById));

router.get('/music/:lang', catchErrors(dataController.music));
router.get('/music-track/:lang/:id', catchErrors(dataController.musicTrackById));

router.get('/quotes/:lang', catchErrors(dataController.quotes));
router.get('/quote/:lang/:id', catchErrors(dataController.quoteById));

router.get('/soundfxs/:lang', catchErrors(dataController.soundfxs));
router.get('/soundfx/:lang/:id', catchErrors(dataController.soundfxById));

module.exports = router;