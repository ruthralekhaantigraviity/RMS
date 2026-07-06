import Tax from '../models/Tax.js';

// @desc    Get all tax rules
// @route   GET /api/taxes
// @access  Private
export const getTaxes = async (req, res) => {
    try {
        const taxes = await Tax.find({}).sort({ createdAt: -1 });
        res.json(taxes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a tax rule
// @route   POST /api/taxes
// @access  Private
export const createTax = async (req, res) => {
    const { name, rate, type, appliesTo, isActive } = req.body;

    try {
        const tax = await Tax.create({
            name,
            rate,
            type: type || 'Percentage',
            appliesTo: appliesTo || 'All Items',
            isActive: isActive !== undefined ? isActive : true
        });

        res.status(201).json(tax);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a tax rule
// @route   PUT /api/taxes/:id
// @access  Private
export const updateTax = async (req, res) => {
    try {
        const tax = await Tax.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (tax) {
            res.json(tax);
        } else {
            res.status(404).json({ message: 'Tax rule not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a tax rule
// @route   DELETE /api/taxes/:id
// @access  Private
export const deleteTax = async (req, res) => {
    try {
        const tax = await Tax.findById(req.params.id);
        if (tax) {
            await tax.deleteOne();
            res.json({ message: 'Tax rule removed' });
        } else {
            res.status(404).json({ message: 'Tax rule not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
