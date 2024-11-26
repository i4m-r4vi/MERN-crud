import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database is Connected in ${conn.connection.host}:${conn.connection.port}`);
    } catch (error) {
        console.log('Something Went Wrong:',error);
    }
}

export default connectDB