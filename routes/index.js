const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data-controller');
const defaultController = require('../controllers/default-controller');
const {catchErrors} = require('../handlers/error-handlers');

router.get('/', defaultController.index);
router.get('/:entityName/list', catchErrors(dataController.entityList));
router.get('/:entityName/:lang/list', catchErrors(dataController.entityList));
router.get('/:entityName/:id', catchErrors(dataController.entityById));
router.get('/:entityName/:lang/:id', catchErrors(dataController.entityById));

module.exports = router;