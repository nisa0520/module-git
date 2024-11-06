// const pool = require("../../app")
// const response = require("../res/response")

// app.post("/alat", async(req, res) => {
//     try {

//     } catch (err){
//         console.error(err.message);
//     }
// })
// app.listen(3000, () => {

// })

import {response} from '../res/response.js'
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:LBMHEDlIMcnMWMzOibdwsMSkSFmbbhKN@junction.proxy.rlwy.net:21281/railway", // Use the full connection string
});

export const getSewaAlat = async (req, res) => {
    try {
        console.log("Menerima sewa GET /alat");
        const result = await pool.query(
          "SELECT * FROM sewaAlat"
        );
        console.log("Data sewa berhasil diambil:", result.rows);
        res.json(result.rows);
      } catch (err) {
        console.error("Error di GET /alat:", err);
        response(500, "invalid", "error", err);
      }
};