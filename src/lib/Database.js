const mongoose = require("mongoose");

const Database = await mongoose.connect("mongodb://localhost:27017/next")
    .then((success) => {
        console.log('Connected');
        // console.log(success);
    })
    .catch((error) => {
        console.log('Error');
        // console.log(error);
    })
export default Database;