import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useListUsersContext } from "../../context/listUsersContext";

export default function UserTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { usersData, page, setPage, setSelectedUser } = useListUsersContext();

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
  };

  return (
    <>
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
                <TableCell>
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </TableCell>
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
    </>
  );
}
