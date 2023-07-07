import mongoose from 'mongoose'

const connectMongoDB = async (): Promise<void> => {
    const mongoURI : any = process.env.MONGODB_URI

    try {
        await mongoose.connect(mongoURI)
        console.log('Connected to MongoDB.')
    } catch (error) {
        console.log(error)
    }
};

export default connectMongoDB;
