const router = require('express').Router();

const {
  getAllThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} 

= require('../../controllers/thought-controller');

router.route('/').get(getAllThought).post(createThought);
router.route('/:id').put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;