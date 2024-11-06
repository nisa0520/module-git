import { response } from '../res/response.js';
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:LBMHEDlIMcnMWMzOibdwsMSkSFmbbhKN@junction.proxy.rlwy.net:21281/railway", // Gunakan connection string lengkap
});

export const getSewaAlat = async (req, res) => {
    try {
      const { nama_calon_client, no_telp } = req.body;  // Ambil nama dan no_telp dari request body

      const newSewaAlat = await pool.query(
        "INSERT INTO sewaAlat (nama_calon_client, no_whatsapp) VALUES($1, $2) RETURNING *",
        [nama_calon_client, no_telp]
      );

      res.json(newSewaAlat.rows[0]);  // Mengembalikan hasil dari query
    } catch (err) {
      console.error(err.message);  // Menampilkan error di console
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
};
