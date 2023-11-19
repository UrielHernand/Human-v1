import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Empleados.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';
import  {useState, useEffect} from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormControl,InputLabel, Input, FormHelperText, 
  Grid
} from "@mui/material";
import { getEmpleados } from '../../../Services/Empleados';

const Empleados = () => {
  const [insertarEmpleado, setInsertarEmpleado] = useState({
    id: '',
    name: '',
    apellidoPa: '',
    apellidoMa: '',
    departamento: '',
    puesto: '',
    edad: '',
  });

  const [data, setData] = useState([insertarEmpleado]);
  const [modalAgregar, setModalAgregar] = useState(false);
  const[modalEditar, setModalEditar]=useState(false);
  // const [departmentToDelete, setDepartmentToDelete] = useState(null);
  const[modalEliminar, setModalEliminar]=useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInsertarEmpleado((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    return insertarEmpleado;
  };

  useEffect(() => {
    getEmpleados().then((storedData) => {
      setData(storedData);
    });
  }, []);

  const agregarEmpleado = () => {
    const empleados = JSON.parse(localStorage.getItem('empleadosData'));
    const newEmpleado = { ...insertarEmpleado, id: empleados.length + 1 };
  empleados.push(newEmpleado);
  localStorage.setItem('empleadosData', JSON.stringify(empleados));
  abrircerrarModalAgregar();
  window.location.reload();
  };

  const editarEmpleado = () => {
    const empleados = JSON.parse(localStorage.getItem('empleadosData')) || [];
      const indexEmpleado = empleados.findIndex((dep) => dep.id === insertarEmpleado.id);
      if (indexEmpleado !== -1) {
        empleados[indexEmpleado] = insertarEmpleado;
        localStorage.setItem('empleadosData', JSON.stringify(empleados));
      }
      abrircerrarModalEditar();
      window.location.reload();
  }

  const deleteDepartment = (dep) => {
    dep.state = false;
     console.log(dep);
     setData([...data]);
     abrircerrarModalEliminar();
   };

  //  const handleConfirmDelete = () => {
  //   if (departmentToDelete) {
  //     deleteDepartment(departmentToDelete);
  //   }
  //   setOpenConfirmationAlert(false);
  // };

  // const handleEnableCanceled = () => {
  //   setDepartmentToEnable(null);
  //   setOpenConfirmationAlertEnable(false);
  // }



  const abrircerrarModalAgregar = () => {
    setModalAgregar(!modalAgregar);

  };
  const abrircerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  const abrircerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarGestor = () => {
    abrircerrarModalAgregar();
  };
  const seleccionarGestorEditar = () => {
    abrircerrarModalEditar();
  };
  const seleccionarGestorEliminar = () => {
    abrircerrarModalEliminar();
  };
  return (
    <div>
      <div className="button">
        <Button variant="contained" onClick={seleccionarGestor}>
          Agregar
        </Button>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Apellido Paterno</TableCell>
                <TableCell align="right">Apellido Materno</TableCell>
                <TableCell align="right">Departamento</TableCell>
                <TableCell align="right">Puesto</TableCell>
                <TableCell align="right">Edad</TableCell>
                <TableCell align="center">Actions&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.apellidoPa}</TableCell>
                  <TableCell align="right">{row.apellidoMa}</TableCell>
                  <TableCell align="right">{row.departamento}</TableCell>
                  <TableCell align="right">{row.puesto}</TableCell>
                  <TableCell align="right">{row.edad}</TableCell>
                  <Button size="small" variant="contained" onClick={seleccionarGestorEditar}>
                    Editar
                  </Button>
                  <Button className="B" size="small" variant="contained" onClick={seleccionarGestorEliminar}>
                    Eliminar 
                  </Button>
                  <IconButton>
                    <ControlPointIcon />
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
              <Grid container spacing={2}  >
                <Grid item xs={6} md={5.5}>
                  <FormControl>
                    <InputLabel>Nombre(s)</InputLabel>
                    <Input id="name" type="nombre" onChange={handleChange} />
                    <FormHelperText id="nombre">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl>
                    <InputLabel>Apellido Paterno</InputLabel>
                    <Input id="apellidoPa" type="paterno" onChange={handleChange} />
                    <FormHelperText id="paterno">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                  <FormControl>
                    <InputLabel>Apellido Materno</InputLabel>
                    <Input id="apellidoMa" type="materno" onChange={handleChange} />
                    <FormHelperText id="nombre">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl>
                    <InputLabel>Departamento</InputLabel>
                    <Input id="departamento" type="departamento" onChange={handleChange} />
                    <FormHelperText id="departamento">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                  <FormControl>
                    <InputLabel>Puesto</InputLabel>
                    <Input id="puesto" type="puesto" onChange={handleChange} />
                    <FormHelperText id="puesto">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl>
                    <InputLabel>Edad</InputLabel>
                    <Input id="edad" type="edad" onChange={handleChange} />
                    <FormHelperText id="edad">Solo se aceptan números</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => agregarEmpleado()}
                  >
                    Registrar
                  </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Button variant="contained" color="error"  type onClick={abrircerrarModalAgregar}>
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </ModalBody>
        </Modal>
        <Modal isOpen={modalEditar}>
          <ModalHeader>Editar Empleado</ModalHeader>
          <ModalBody>
            <div>
              <Grid container spacing={2}  >
                <Grid item xs={6} md={5.5}>
                  <FormControl>
                    <InputLabel>Nombre(s)</InputLabel>
                    <Input id="name" type="nombre" onChange={handleChange} />
                    <FormHelperText id="nombre">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl>
                    <InputLabel>Apellido Paterno</InputLabel>
                    <Input id="apellidoPa" type="paterno" onChange={handleChange} />
                    <FormHelperText id="paterno">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                  <FormControl>
                    <InputLabel>Apellido Materno</InputLabel>
                    <Input id="apellidoMa" type="materno" onChange={handleChange} />
                    <FormHelperText id="nombre">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl>
                    <InputLabel>Departamento</InputLabel>
                    <Input id="departamento" type="departamento" onChange={handleChange} />
                    <FormHelperText id="departamento">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                  <FormControl>
                    <InputLabel>Puesto</InputLabel>
                    <Input id="puesto" type="puesto" onChange={handleChange} />
                    <FormHelperText id="puesto">
                      Solo se aceptan mayúsculas y minúsculas
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl>
                    <InputLabel>Edad</InputLabel>
                    <Input id="edad" type="edad" onChange={handleChange} />
                    <FormHelperText id="edad">Solo se aceptan números</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={5.5}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => editarEmpleado()}
                  >
                    Editar
                  </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Button variant="contained" color="error"  type onClick={abrircerrarModalEditar}>
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </ModalBody>
        </Modal>
        <Modal isOpen={modalEliminar}>
                <ModalBody>
                    Se eliminara el siguiente registro, ¿Desea continuar?
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-primary"
                onClick={()=>abrircerrarModalEliminar()}
                >SI</button>
                <button className="btn btn-danger"
                onClick={()=>abrircerrarModalEliminar()}
                >NO</button>
                </ModalFooter>
            </Modal>
      </div>
    </div>
  );
};

export default Empleados;