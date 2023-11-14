import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import createData from "../../../Redux/states/Empleados"
import './Empleados.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';

function Empleados(){
   
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    return (
      <div>
        <div className='button'>
            <Button variant="contained">Agregar</Button>
        </div>
        <div className='table'>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Cargo</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Departamento</TableCell>
            <TableCell align="center">Actions&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <Button  size='small' variant="contained">Editar</Button>
              <Button className='B' size='small' variant="contained">Eliminar</Button>
              <IconButton>
                <ControlPointIcon/>
              </IconButton>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
    )
}

export default Empleados;