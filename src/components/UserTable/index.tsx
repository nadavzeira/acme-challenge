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
import { useListUsersContext } from "../../contexts/listUsersContext";
import { useFiltersContext } from "../../contexts/FiltersContext";

export default function UserTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { usersData, page, setPage, setSelectedUser } = useListUsersContext();
  const { searchQuery, genderFilter, nationalityFilter } = useFiltersContext();

  // Filter users based on search query, gender, and nationality
  const filteredUsersData = usersData.filter(
    ({ name, gender, nat }) =>
      `${name.first}${name.last}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
      (genderFilter === "all" || gender === genderFilter) &&
      (nationalityFilter === "all" || nat === nationalityFilter)
  );

  const currentPageUsers = filteredUsersData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    idx: number
  ) => {
    event.preventDefault();
    const scientist = filteredUsersData[idx];
    setSelectedUser(scientist);
  };

  const handlePageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer style={{ height: "100%", overflowY: "auto" }}>
        <Table>
          <TableHead style={{ backgroundColor: "#a5a5a5" }}>
            <TableRow>
              <TableCell style={{ color: "#000", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell style={{ color: "#000", fontWeight: "bold" }}>
                Gender
              </TableCell>
              <TableCell style={{ color: "#000", fontWeight: "bold" }}>
                Date of Birth
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageUsers.map(({ name, gender, dob }, idx) => (
              <TableRow
                key={idx}
                onClick={(e) => handleRowClick(e, idx)}
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
        count={filteredUsersData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowPerPageChange}
      />
    </>
  );
}
