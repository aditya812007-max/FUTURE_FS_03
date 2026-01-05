import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  trainId: {
    type: String,
    required: true,
  },
  seats: {
    type: [String],
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'CONFIRMED',
  },
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);