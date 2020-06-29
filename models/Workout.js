const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        enum: ["resistance", "cardio"]
      },
      name: {
        type: String,
        trim: true,
        required: "Workout name required"
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
});

module.exports = Workout = mongoose.model("Workout", WorkoutSchema);