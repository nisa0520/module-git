import React, { useEffect, useState } from "react";
import {
  Stack,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Autocomplete,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  ButtonGroup,
  Pagination,
  styled,
} from "@mui/material";
import axios from "axios"; // Untuk fetch data
import { useNavigate } from "react-router-dom";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "1000",
  marginBottom: "35px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: 650,
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: "no", label: "No", minWidth: 50, align: "center" },
  { id: "gambar", label: "Gambar", minWidth: 100, align: "center" },
  { id: "nama", label: "Nama Barang", minWidth: 150, align: "center" },
  { id: "deskripsi", label: "Deskripsi", minWidth: 150, align: "center" },
  { id: "satuan", label: "Satuan", minWidth: 100, align: "center" },
  { id: "stok", label: "Stok Terbaru", minWidth: 100, align: "center" },
  { id: "aksi", label: "Aksi", minWidth: 150, align: "center" },
];

const BACKEND_URL = "http://localhost:5000"; // Contoh untuk lokal

const KelolaKomoditas = () => {
  const [open, setOpen] = useState(false);
  const [komoditas, setKomoditas] = useState([]); // State untuk data komoditas
  const [loading, setLoading] = useState(true); // State untuk loading
  const [searchTerm, setSearchTerm] = useState(""); // State untuk pencarian
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini untuk pagination
  const rowsPerPage = 5; // Jumlah data per halaman
  const navigate = useNavigate();
  const [namabarang, setNambarang] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [satuan, setSatuan] = useState("");
  const [stok, setStok] = useState("");
  const [gambar, setGambar] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleReset();
  };

  const handleReset = () => {
    setNambarang("");
    setDeskripsi("");
    setSatuan("");
    setStok("");
    setGambar("");
  };

  // Mengambil data komoditas dari server
  useEffect(() => {
    const fetchKomoditas = async () => {
      setLoading(true); // Set loading true sebelum data diambil
      try {
        const response = await axios.get(`${BACKEND_URL}/commodity`); // Ganti dengan endpoint yang sesuai
        setKomoditas(response.data); // Set data yang didapat dari server
      } catch (error) {
        console.error("Error fetching komoditas data:", error);
      }
      setLoading(false); // Set loading false setelah data diambil
    };

    fetchKomoditas();
  }, []);

  // Fungsi untuk pencarian dan filter data
  const filteredKomoditas = komoditas.filter((item) =>
    item.namabarang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginasi
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const currentRows = filteredKomoditas.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(filteredKomoditas.length / rowsPerPage);

  const handleTambahKomoditas = async () => {
    if (!namabarang || !deskripsi || !satuan || !stok || !gambar) {
      alert("Silakan lengkapi semua field");
      return;
    }
  
    const gambarURL = gambar.startsWith("http")
      ? gambar
      : `${BACKEND_URL}/public/images/${gambar}`;
  
    const newKomoditas = {
      namabarang: namabarang,
      deskripsi: deskripsi,
      satuan: satuan,
      stok: stok,
      gambar: gambarURL,
    };
  
    console.log("Data yang akan dikirim:", newKomoditas);
  
    try {
      const response = await axios.post(`${BACKEND_URL}/komoditas`, newKomoditas);
      console.log("Komoditas baru ditambahkan:", response.data);
      setKomoditas([...komoditas, response.data]);
      handleClose();
    } catch (err) {
      console.error("Error saat menambah komoditas:", err);
      alert("Gagal menambah komoditas");
    }
  };

  return (
    <Container>
      <H4>Kelola Komoditas</H4>
      <Stack spacing={2}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "baseline" }}
        >
          <Button variant="contained" color="success" onClick={() => setOpen(true)}>
            Tambah Barang
          </Button>
          
          {/* Modal Tambah Barang */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <H4>Tambah Komoditas</H4>
            <Stack spacing={2}>
              {/* Nama Barang */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ minWidth: "150px", fontSize: "1rem" }}
                >
                  Nama Barang
                </Typography>

                <TextField
                  label="Nama Barang"
                  variant="outlined"
                  sx={{ width: 500 }}
                  value={namabarang}
                  onChange={(e) => setNambarang(e.target.value)}
                />
              </Stack>

              {/* Deskripsi */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ minWidth: "150px", fontSize: "1rem" }}
                >
                  Deskripsi
                </Typography>

                <TextField
                  label="Deskripsi Barang"
                  variant="outlined"
                  sx={{ width: 500 }}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                />
              </Stack>

              {/* Satuan */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ minWidth: "150px", fontSize: "1rem" }}
                >
                  Satuan
                </Typography>

                <TextField
                  label="Satuan Barang"
                  variant="outlined"
                  sx={{ width: 500 }}
                  value={satuan}
                  onChange={(e) => setSatuan(e.target.value)}
                />
              </Stack>

              {/* Stok */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ minWidth: "150px", fontSize: "1rem" }}
                >
                  Stok
                </Typography>

                <TextField
                  label="Stok Barang"
                  type="number"
                  variant="outlined"
                  sx={{ width: 500 }}
                  value={stok}
                  onChange={(e) => setStok(e.target.value)}
                />
              </Stack>

              {/* Gambar */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ minWidth: "150px", fontSize: "1rem" }}
                >
                  Gambar
                </Typography>

                <TextField
                  label="URL Gambar atau Nama File (Jika Lokal)"
                  variant="outlined"
                  sx={{ width: 500 }}
                  value={gambar}
                  onChange={(e) => setGambar(e.target.value)}
                  helperText={
                    gambar.startsWith("http")
                      ? "Masukkan URL gambar yang valid"
                      : "Jika gambar disimpan secara lokal, masukkan nama file (misalnya: gambar1.jpg)"
                  }
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Button variant="contained" color="error" onClick={handleReset}>
                Reset
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleTambahKomoditas}
              >
                Simpan
              </Button>
            </Stack>
          </Box>
        </Modal>
        </Stack>
        
        {/* Input untuk pencarian */}
        <TextField
          label="Cari Nama Komoditas"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}
        />

        {/* Tabel Komoditas */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.gambar}</TableCell>
                  <TableCell align="center">{row.nama}</TableCell>
                  <TableCell align="center">{row.deskripsi}</TableCell>
                  <TableCell align="center">{row.satuan}</TableCell>
                  <TableCell align="center">{row.stok}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup>
                      {/* Aksi Edit, Hapus, dll */}
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
              {currentRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Tidak ada data
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          showFirstButton
          showLastButton
          sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
        />
      </Stack>
    </Container>
  );
};

export default KelolaKomoditas;
