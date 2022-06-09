import dotenv from 'dotenv';
dotenv.config();

// Temporary variables
export const HOST = process.env.LOCAL_HOST;
export const PORT = process.env.LOCAL_PORT;
export const MONGO_ATLAS = process.env.MONGO_ATLAS_URI;
