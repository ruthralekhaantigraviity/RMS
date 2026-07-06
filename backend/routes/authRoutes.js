import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', protect, logoutUser);

// Example of a protected route for testing
router.get('/profile', protect, (req, res) => {
    res.json({ user: req.user });
});

export default router;
