const mongoose = require("mongoose");

const Database = await mongoose.connect("mongodb+srv://rajat:12345@cluster0.6wrjo.mongodb.net/next?retryWrites=true&w=majority&appName=cluster0")
    // const Database = await mongoose.connect("mongodb://localhost:27017/next")
    .then((success) => {
        console.log('Connected');
    })
    .catch((error) => {
        console.log('Error');
    })
export default Database;