import express from 'express';
import authRoutes from './routes/authRoutes.js';
const app = express()

app.use("/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
