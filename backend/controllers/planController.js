import Plan from '../models/Plan.js';

export const getPublicPlans = async (req, res) => {
    try {
        const plans = await Plan.find({ isActive: true }).sort({ monthlyPrice: 1 });
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
