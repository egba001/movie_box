import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_DB_URI

export const connectToDatabase = async () => {
    // if(mongoose.conections[0].readyState) return;
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected to database")
    } catch(err) {
        throw new Error("Error", err);
    }
}