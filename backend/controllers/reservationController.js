import Reservation from '../models/Reservation.js';

// @desc    Get all reservations for a restaurant
// @route   GET /api/reservations
// @access  Private
export const getReservations = async (req, res) => {
    try {
        // Find all reservations for branches belonging to the restaurant
        // Since Reservation doesn't have restaurantId directly, we populate branch and filter on frontend or modify the query
        // Wait, the easiest way is to pass branchId from frontend, or query all branches for this restaurant first.
        // For simplicity, if we add a restaurantId to the Reservation model it's better, but the model doesn't have it.
        // It has branchId. Let's assume the frontend passes branchId or we just fetch all if it's admin.
        
        // Actually, we can fetch them via a lookup or just return all for now.
        // To be secure, let's just return all reservations and rely on the frontend filtering by branch, 
        // or we can populate branch and filter.
        
        const reservations = await Reservation.find({})
            .populate({
                path: 'branch',
                match: { restaurant: req.user.restaurantId }
            })
            .populate('table', 'number capacity')
            .sort({ date: 1, timeSlot: 1 });

        // Filter out reservations where branch is null (meaning it doesn't belong to this restaurant)
        const filteredReservations = reservations.filter(r => r.branch != null);

        res.json(filteredReservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new reservation
// @route   POST /api/reservations
// @access  Private
export const createReservation = async (req, res) => {
    const { branch, guestName, guestPhone, date, timeSlot, guestCount, table } = req.body;

    try {
        const reservation = await Reservation.create({
            branch,
            guestName,
            guestPhone,
            date,
            timeSlot,
            guestCount,
            table: table || undefined, // Optional table assignment
            status: 'Confirmed'
        });

        const populatedRes = await Reservation.findById(reservation._id)
            .populate('branch')
            .populate('table');

        res.status(201).json(populatedRes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update reservation status
// @route   PATCH /api/reservations/:id/status
// @access  Private
export const updateReservationStatus = async (req, res) => {
    const { status } = req.body;

    try {
        const reservation = await Reservation.findById(req.params.id);

        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        reservation.status = status;
        await reservation.save();

        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
