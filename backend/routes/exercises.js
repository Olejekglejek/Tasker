const express = require('express')
const router = express.Router()
const Exercise = require('../models/Exercise')

// Getting all
router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find()
        res.json(exercises)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getExercise, (req, res) => {
    res.send(res.exercise.name)
})

//Creating one
router.post('/', async (req, res) => {
    const exercise = new Exercise({
        name: req.body.name,
        description: req.body.description
    })
    try {
        const newExercise = await exercise.save()
        res.status(201).json(newExercise)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
// router.patch('/:id', getExercise, async (req, res) => {
//     if (req.body.name != null) {
//         res.exercise.name = req.body.name
//     }
//     try {
//         const updatedExercise = await res.exercise.save()
//         res.json(updatedExercise)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })
//
// Deleting One
router.delete('/:id', getExercise, async (req, res) => {
    try {
        await res.exercise.remove()
        res.json({ message: 'Deleted Exercise' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getExercise(req, res, next) {
    let exercise
    try {
        exercise = await Exercise.findById(req.params.id)
        if (exercise == null) {
            return res.status(404).json({ message: 'Cannot find exercise' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.exercise = exercise
    next()
}

module.exports = router