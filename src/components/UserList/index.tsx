import React, { useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useListUsersContext } from "../../context/listUsersContext";
import { UsersDataProps } from "../../services/types";

export default function UserList() {
  const { usersData, page, setPage, openModal, handleModal } =
    useListUsersContext();
  const [selectedUser, setSelectedUser] = useState<UsersDataProps | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const currentPageUsers = usersData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    idx: number
  ) => {
    event.preventDefault();
    const scientist = usersData[idx];
    setSelectedUser(scientist);
    handleModal(true);
  };

  const handleCloseModal = () => {
    handleModal(false);
    setSelectedUser(null);
  };

  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <TableContainer style={{ height: "75vh", overflowY: "scroll" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageUsers.map(({ name, gender, dob }, idx) => (
              <TableRow
                key={idx}
                onClick={(event) => handleRowClick(event, idx)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>{`${name.first} ${name.last}`}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{dob.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={usersData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage: number) => setPage(newPage)}
        onRowsPerPageChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Scientist Details</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <div>
              <img
                src={selectedUser.picture.large}
                alt="Scientist"
                style={{ maxWidth: "100%", marginTop: "1rem" }}
              />
              <Typography>
                Name: {`${selectedUser.name.first} ${selectedUser.name.last}`}
              </Typography>
              <Typography>Gender: {selectedUser.gender}</Typography>
              <Typography>Email: {selectedUser.email}</Typography>
              <Typography>Date of Birth: {selectedUser.dob.date}</Typography>
              <Typography>Nationality: {selectedUser.nat}</Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
