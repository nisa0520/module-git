import {response} from '../res/response.js'
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:LBMHEDlIMcnMWMzOibdwsMSkSFmbbhKN@junction.proxy.rlwy.net:21281/railway", // Use the full connection string
});

export const getSewaAlat = async (req, res) => {
    try {
      const { nama_calon_client } = req.body;
      const newsewaAlat = await pool.query(
        "INSERT INTO sewaAlat (nama_calon_client) VALUES($1)", [nama_calon_client]
      );

      res.json(sewaAlat);
      } catch (err) {

      }
}