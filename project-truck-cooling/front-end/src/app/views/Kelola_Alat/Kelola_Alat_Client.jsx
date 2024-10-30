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
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import axios from "axios";
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
  { id: "urlgambar", label: "Gambar", minWidth: 100, align: "center" },
  { id: "namaalat", label: "Nama Alat", minWidth: 150, align: "center" },
  { id: "imei", label: "IMEI", minWidth: 150, align: "center" },
  { id: "serialat", label: "Seri Alat", minWidth: 100, align: "center" },
  { id: "targetpemasangan", label: "Target Pemasangan", minWidth: 150, align: "center" },
  { id: "tanggalawalsewa", label: "Tgl Sewa Awal", minWidth: 150, align: "center" },
  { id: "tanggalakhirsewa", label: "Tgl Sewa Akhir", minWidth: 150, align: "center" },
  { id: "aksi", label: "Aksi", minWidth: 150, align: "center" },
];

const Kelola_Alat = () => {
  const [open, setOpen] = useState(false);
  const [alat, setAlat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/kelolaalatcl");
        setAlat(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredRows = alat.filter(
    (row) =>
      row.namaalat?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options); // Format DD-MM-YYYY
  };
  

  return (
    <Container>
      <H4>Kelola Alat</H4>
      <Stack spacing={2}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <TextField
            label="Cari Nama Alat"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            sx={{ width: 300 }}
          />
        </Stack>

        <Stack spacing={2}>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            <>
              <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell key={column.id_sewa} align={column.align}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentRows.map((row, index) => (
                      <TableRow key={row.id_sewa}>
                        <TableCell align="center">{indexOfFirstRow + index + 1}</TableCell>
                        <TableCell align="center">{row.urlgambar || "N/A"}</TableCell>
                        <TableCell align="center">{row.namaalat}</TableCell>
                        <TableCell align="center">{row.imei}</TableCell>
                        <TableCell align="center">{row.serialat}</TableCell>
                        <TableCell align="center">{row.targetpemasangan}</TableCell>
                        <TableCell align="center">{formatDate(row.tanggalawalsewa)}</TableCell>
                        <TableCell align="center">{formatDate(row.tanggalakhirsewa)}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup variant="text">
                            <Button onClick={() => navigate("/KonfigurasiAlat/Client")}>
                              <SettingsIcon />
                            </Button>
                            <Button onClick={() => navigate("/KonfigurasiAlat/Client")}>
                              <AssignmentIcon />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                    {currentRows.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={8} align="center">
                          Tidak ada data
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
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
            </>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Kelola_Alat;