import Table from '../models/Table.js';
import Order from '../models/Order.js';

// @desc    Get all tables for a branch
// @route   GET /api/tables
// @access  Private
export const getTables = async (req, res) => {
    try {
        const tables = await Table.find({ restaurantId: req.user.restaurantId, branchId: req.user.branchId }).populate('activeOrder');
        res.json(tables);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create a table
// @route   POST /api/tables
// @access  Private (Admin/Manager)
export const createTable = async (req, res) => {
    const { tableNumber, capacity } = req.body;
    try {
        const table = await Table.create({
            restaurantId: req.user.restaurantId,
            branchId: req.user.branchId,
            tableNumber,
            capacity: capacity || 4,
            status: 'Available'
        });
        res.status(201).json(table);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create table' });
    }
};

// @desc    Update table status
// @route   PUT /api/tables/:id/status
// @access  Private
export const updateTableStatus = async (req, res) => {
    const { status, customers, activeOrder } = req.body;
    try {
        const table = await Table.findById(req.params.id);
        if (table) {
            table.status = status || table.status;
            if (customers !== undefined) table.customers = customers;
            if (activeOrder !== undefined) table.activeOrder = activeOrder;
            
            const updatedTable = await table.save();
            res.json(updatedTable);
        } else {
            res.status(404).json({ message: 'Table not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to update table' });
    }
};
