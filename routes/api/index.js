const router = require('express').Router();
const thoughtRoutes = require('./ThoughtRoutes');
const userRoutes = require('./UserRoutes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
