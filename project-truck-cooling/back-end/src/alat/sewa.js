import express from 'express';
import { getSewaAlat, addSewaAlat } from './controllers/sewaAlatController.js';

const app = express();
app.use(express.json()); // Pastikan untuk bisa membaca JSON dari request

app.get('/api/sewaalat', getSewaAlat);
app.post('/api/sewaalat', addSewaAlat);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
