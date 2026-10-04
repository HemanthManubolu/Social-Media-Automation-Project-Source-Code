import mongoose from "mongoose";
import dns from "dns";


dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
const connectDB = async () => {
    try {
        mongoose.connection.on("connected", async () => {
            console.log('MongoDB connected')
        });
        await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error: any) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB;


