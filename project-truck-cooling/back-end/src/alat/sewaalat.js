import { response } from '../res/response.js';
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:LBMHEDlIMcnMWMzOibdwsMSkSFmbbhKN@junction.proxy.rlwy.net:21281/railway",
});

// Endpoint untuk mengambil data dari tabel sewaAlat
export const getSewaAlat = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sewaAlat");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

// Endpoint untuk menambahkan data ke tabel sewaAlat
export const addSewaAlat = async (req, res) => {
  try {
    const { nama_calon_client, no_telp } = req.body;

    const newSewaAlat = await pool.query(
      "INSERT INTO sewaAlat (nama_calon_client, no_whatsapp) VALUES($1, $2) RETURNING *",
      [nama_calon_client, no_telp]
    );

    res.json(newSewaAlat.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};
