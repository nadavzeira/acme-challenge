import { TableContainer, TableCell, TableRow, Table } from '@mui/material';
import styled from 'styled-components';

export const StyledTableContainer = styled(TableContainer)`
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

export const StyledTable = styled(Table)`
  background-color: #a0c8c9;
`;

export const StyledTableCell = styled(TableCell)`
  background-color: #70acad;
  color: #000;
  font-weight: bold;
`;

export const StyledTableRow = styled(TableRow)`
  cursor: pointer;
`;
