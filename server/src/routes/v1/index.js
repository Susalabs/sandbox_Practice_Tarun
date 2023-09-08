const express = require('express');

const UserController = require('../../controller/user-controller')
const router = express.Router();

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.get);
router.patch('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);

module.exports = router;