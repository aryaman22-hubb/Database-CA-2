const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    "user":{
        type:String,
        required:true
    },
    "date":{
        type:Date,
        required:true
    },
    "duration":{
        type:Number,
        required:true
    },
    "caloriesburned":{
        type:Number,
        required:false
    },
    "exercise":{
        "NameExercise":{
            type:String,
            required:true
        },
        "reps":{
            type:Number,
            required:false
        },
        "sets":{
            type:Number,
            required:false
        },
        "weight":{
            type:Number,
            required:false
        }

    }
})

const Workout = mongoose.model('Schema',WorkoutSchema)
module.exports = Workout
