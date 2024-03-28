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
} from "@mui/material";
import { useListUsersContext } from "../../context/listUsersContext";
import { UsersDataProps } from "../../services/types";

export default function UserList() {
  const { usersData, openModal, handleModal } = useListUsersContext();
  const [selectedUser, setSelectedUser] = useState<UsersDataProps |null>(null);

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
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map(({ name, gender, dob }, idx) => (
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
                Name:{" "}
                {`${selectedUser.name.first} ${selectedUser.name.last}`}
              </Typography>
              <Typography>Gender: {selectedUser.gender}</Typography>
              <Typography>Email: {selectedUser.email}</Typography>
              <Typography>
                Date of Birth: {selectedUser.dob.date}
              </Typography>
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
