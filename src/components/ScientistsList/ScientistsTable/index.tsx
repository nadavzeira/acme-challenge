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
import { styled } from "@mui/system";

// Styled TableContainer with custom scrollbar styles
const StyledTableContainer = styled(TableContainer)`
  height: 70%;
  overflow-y: auto;

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #cfe3e4; /* Use the lightest color from the palette */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #117577; /* Use a darker tone from the palette */
    border-radius: 10px;
    border: 3px solid #cfe3e4; /* Use the same light color as the track */
  }
`;

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
      <StyledTableContainer>
        <Table stickyHeader style={{ backgroundColor: "#a0c8c9" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#70acad", color: "#000", fontWeight: "bold", width: "50%" }}>
                Name
              </TableCell>
              <TableCell style={{ backgroundColor: "#70acad", color: "#000", fontWeight: "bold", width: "20%" }}>
                Gender
              </TableCell>
              <TableCell style={{ backgroundColor: "#70acad", color: "#000", fontWeight: "bold", width: "30%" }}>
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
      </StyledTableContainer>
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
