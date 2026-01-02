import mongoose from 'mongoose';

const TrainSchema = new mongoose.Schema({
  trainNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  seatsAvailable: {
    type: Number,
    default: 100,
  },
});

// This line prevents recompiling the model if it already exists
export default mongoose.models.Train || mongoose.model('Train', TrainSchema);