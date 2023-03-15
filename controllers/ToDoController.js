    const ToDoModel = require('../models/ToDoModel')

    // Display To Do
    module.exports.getTodo = async (req, res) => {
        
        const toDo = await ToDoModel.find()
        res.send(toDo)

    }
    // Search To Do
    module.exports.searchToDo = async (req, res) => {
        
        const { _id } = req.body
    
        const search = await ToDoModel.findById(_id)
        .then(search => res.send(search))
        .catch((err) => res.send("Not Found") )

    }
    // Create To Do
    module.exports.saveTodo = async (req, res) => {

    const { text } = req.body

    ToDoModel
    .create({text})
    .then((data) =>{
            console.log("Added Successfully...");
            console.log(data);
            res.send(data)
    })
    
    }
    // Update To Do
    module.exports.updateToDo = async (req, res) => {
        const { _id, text } = req.body
        
        ToDoModel
        .findByIdAndUpdate( _id, {text})
        .then(() => res.set(201).send("Updated Succesfully..."))
        .catch((err) => res.send("Data Cannot Be Updated") )
    }
    // Delete To Do
    module.exports.deleteToDo = async (req, res) => {
        const { _id } = req.body
        
        ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Succesfully..."))
        .catch((err) => res.send("Data Cannot Be Delete") )
    }