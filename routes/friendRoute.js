const express = require('express');
const friendController = require('../controllers/friendController');

const router = express.Router();

router
    .route('/')
    .get(friendController.getAllUsers)
    .post(friendController.createFriend);

router
    .route('/:id')
    .get(friendController.getOneFriend)
    .patch(friendController.updateOneFriend)
    .delete(friendController.deleteOneFriend);

module.exports = router;
