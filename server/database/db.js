import mongoose from "mongoose";
const Connection = () => {
    const DB_URI = `mongodb+srv://sametakbo:sametakbo@cluster0.d8lte.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
       
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;