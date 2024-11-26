import mongoose from 'mongoose';

let isConnected = false; // Global flag to track the connection status

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    // Avoid multiple connections
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    // Double-check connection state
    if (mongoose.connection.readyState === 1) {
        isConnected = true;
        console.log('MongoDB connection is already open');
        return;
    }

    // Try connecting to the database
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'CarLuxe', // Your database name
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true; // Update the flag
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error; // Throw error to ensure calling functions are aware
    }
};

export default connectToDb;