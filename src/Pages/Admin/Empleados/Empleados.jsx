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
import React, {useState, useEffect} from 'react';
import {Modal, ModalBody, ModalFooter,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, FormControl,InputLabel, Input, FormHelperText,
  
  Grid
} from "@mui/material";

function Empleados(){
   
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

     const[modalAgregar, setModalAgregar]=useState(false);
    // const[modalEliminar, setModalEliminar]=useState(false);
    const agregarEmpleado=async()=>
    {
      abrircerrarModalAgregar();
    }
      

    const abrircerrarModalAgregar=()=>{
      setModalAgregar(!modalAgregar);
    }

    const seleccionarGestor=()=>{
      abrircerrarModalAgregar();
    }

    return (
      <div>
        <div className='button'>
            <Button variant="contained" onClick={()=>seleccionarGestor()}>Agregar</Button>
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

    <Modal isOpen={modalAgregar}>
      <ModalHeader>Agregar Empleado</ModalHeader>
      <ModalBody>
      <div>
            <Grid container spacing={2}>
                <Grid item xs={6} md={5.5}>
                    <FormControl>
                        <InputLabel>Nombre(s)</InputLabel>
                        <Input id="nombre" type="nombre"/>
                        <FormHelperText id="nombre">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl>
                        <InputLabel>Apellido Paterno</InputLabel>
                        <Input id="paterno" type="paterno"/>
                        <FormHelperText id="paterno">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                    <FormControl>
                        <InputLabel>Apellido Materno</InputLabel>
                        <Input id="maternio" type="materno"/>
                        <FormHelperText id="nombre">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl>
                        <InputLabel>Estatus</InputLabel>
                        <Input id="estatus" type="estatus"/>
                        <FormHelperText id="estatus">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                    <FormControl>
                        <InputLabel>RFC</InputLabel>
                        <Input id="rfc" type="rfc"/>
                        <FormHelperText id="rfc">Mayusculas, minusculas y numeros</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl>
                        <InputLabel>Departamento</InputLabel>
                        <Input id="departamento" type="departamento"/>
                        <FormHelperText id="departamento">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                    <FormControl>
                        <InputLabel>Puesto</InputLabel>
                        <Input id="puesto" type="puesto"/>
                        <FormHelperText id="puesto">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl>
                        <InputLabel>Telefono</InputLabel>
                        <Input id="telefono" type="telefono"/>
                        <FormHelperText id="nombre">Solo de aceptan numeros</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                    <Button variant="contained" color="primary">
                        Registrar
                    </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Button variant="contained" color="error" onClick={()=>abrircerrarModalAgregar()}>
                        Cancelar
                    </Button>
                </Grid>
            </Grid> 
    </div>
      </ModalBody>
    </Modal>
        </div>
    </div>
    )
}

export default Empleados;