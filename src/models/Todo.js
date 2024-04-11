const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)
export default Todo;