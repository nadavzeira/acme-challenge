import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { useFiltersContext } from "../../../contexts/filtersContext";
import { useScientistsListContext } from "../../../contexts/scientistsListContext_v1";
// import { useScientistsListContext } from "../../../contexts/scientistsListContext_v2";

export default function ScientistsTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const { scientistsData } = useScientistsListContext();
  const { searchQuery, genderFilter, nationalityFilter } = useFiltersContext();
  const history = useHistory();

  useEffect(() => {
    setPage(0);
  }, [searchQuery, genderFilter, nationalityFilter, rowsPerPage]);

  const currPageScientists = scientistsData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    idx: number
  ) => {
    event.preventDefault();

    const scientist = scientistsData[idx];

    history.push(`/${scientist.login.id}`);
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
            {currPageScientists.map(({ name, gender, dob }, idx) => (
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
        rowsPerPageOptions={[5, 10, 15, 25, 30]}
        component="div"
        count={scientistsData.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowPerPageChange}
      />
    </>
  );
}
