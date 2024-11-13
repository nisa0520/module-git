// import pkg from "pg";
// const { Pool } = pkg;

// const pool = new Pool({
//   connectionString:
//     "postgresql://postgres:LBMHEDlIMcnMWMzOibdwsMSkSFmbbhKN@junction.proxy.rlwy.net:21281/railway",
// });

// // Endpoint untuk mengambil semua data dari tabel sewaAlat
// export const getSewaAlat = async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM sewaAlat");
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "Terjadi kesalahan pada server" });
//   }
// };

// // Endpoint untuk menambahkan data ke tabel sewaAlat
// export const addSewaAlat = async (req, res) => {
//   const { nama_calon_client, no_whatsapp } = req.body;
//   try {
//     const newSewaAlat = await pool.query(
//       "INSERT INTO sewaAlat (nama_calon_client, no_whatsapp) VALUES ($1, $2) RETURNING *",
//       [nama_calon_client, no_whatsapp]
//     );
//     res.status(201).json(newSewaAlat.rows[0]); 
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "Terjadi kesalahan pada server" });
//   }
// };


// export const createSewaAlat = async (nama_calon_client, no_whatsapp) => {
//   try {
//     const result = await pool.query(
//       "INSERT INTO sewaAlat (nama_calon_client, no_whatsapp) VALUES ($1, $2) RETURNING *",
//       [nama_calon_client, no_whatsapp]
//     );
//     return result.rows[0]; // Kembalikan data yang baru dimasukkan sebagai respon
//   } catch (err) {
//     console.error(err.message);
//     throw new Error("Gagal membuat data sewaAlat");
//   }
// };
