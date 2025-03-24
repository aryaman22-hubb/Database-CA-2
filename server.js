const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Workout = require('./schema');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
    .then((console.log("MogoDB connected")))
    .catch(()=>("error connecting MongoDB"))

app.post('/addWorkout', async (req, res) => {
        try {
            const { user, date,duration, caloriesburned,exercise, } = req.body;
    
            if (!user || !date || !duration || !NameExercise) {
                return res.status(400).json({ error: "All fields are required" });
            }
    
            const WorkoutSchema = new Workout({
                 user, date,duration, caloriesburned,exercise
               
            });
    
            const savedWorkout = await WorkoutSchema.save();
            res.status(201).json(savedWorkout);
        } catch (error) {
            console.error("Error adding workout:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    })

app.get('/viewWorkout',async(req,res)=>{
    try {
        const Workout = await Workout.find();
        if(!Workout){
            res.send(404).json({message:"Workout not Found"})
        }

    } catch (error) {
        console.error("Error finding workout", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.put('/update/:id',async(req,res)=>{
    try {
        const {user, date,duration, caloriesburned,exercise} = req.body;
        const updatedWorkout= await workouts.findByIdAndUpdate(req.params.id,
            { title, author,genre, publishedYear,availableCopies,borrowedBy }
        );
        if (!updatedWorkout) {
            return res.status(404).json({ message: "Workout not found" });
        }

        res.status(200).json(updatedWorkout); 
    }
        catch (error) {
        console.error("Error updating", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.delete('/delete/:id',async(req,res)=>{
    try {
        await Books.findByIdAndDelete(req.params.id)
        console.log("Deleted")
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Port is ruuning on ${process.env.PORT}`)
})