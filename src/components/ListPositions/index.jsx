import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ListPositions(props) {
  const positions = props.positions || [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cargo</TableCell>
            <TableCell align="left">Empresa</TableCell>
            <TableCell align="left">Local</TableCell>
            <TableCell align="left">Tipo de Vaga</TableCell>
            <TableCell align="left">Contato</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map((position) => (
            <TableRow
              key={position.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {position.position}
              </TableCell>
              <TableCell align="left">{position.companyName}</TableCell>
              <TableCell align="left">{position.local}</TableCell>
              <TableCell align="left">{position.type}</TableCell>
              <TableCell align="left">Link</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




