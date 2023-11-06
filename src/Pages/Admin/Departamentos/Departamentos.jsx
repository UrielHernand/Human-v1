import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  AddCircleOutline,
  ArrowBack,
  Delete,
  Description,
  Edit,
  Email,
  LocationOn,
  Phone,
  WarningAmberOutlined,
} from "@mui/icons-material";

const departamentosData = [
  {
    id: 1,
    nombre: "Recursos Humanos",
    direccion: "123 Calle Principal",
    descripcion: "Departamento encargado de la gestión de personal.",
    telefono: "123-456-7890",
    imagen:
      "https://doctor-cv.com/blog/wp-content/uploads/2018/11/p-rrhh.JPG.jpeg",
    email: "rh@example.com",
    servicios: [
      {
        id: 1,
        nombre: "Gestión de Empleados",
        descripcion: "Control de contratación y administración de empleados.",
        precio: "$500 por empleado/mes",
      },
      {
        id: 2,
        nombre: "Capacitación",
        descripcion: "Programas de capacitación y desarrollo profesional.",
        precio: "$2000 por programa",
      },
    ],
  },
  {
    id: 2,
    nombre: "Contabilidad",
    direccion: "456 Calle Principal",
    descripcion: "Departamento encargado de la gestión financiera.",
    telefono: "123-456-7890",
    imagen:
      "https://www.michaelpage.es/sites/michaelpage.es/files/styles/advice_node_desktop/public/legacy/cfo.jpg.webp?itok=Fkb1opD-",
    email: "rh@gestiom",
  },
  {
    id: 3,
    nombre: "Mercadeo",
    direccion: "789 Calle Principal",
    descripcion: "Departamento encargado de la gestión de mercadeo.",
    telefono: "123-456-7890",
    imagen:
      "https://www.merca20.com/wp-content/uploads/2019/05/mercadotecnia.jpg",
    email: "rh@gestiom",
  },
  /*  {
       id: 4,
       nombre: 'Ventas',
       direccion: '101 Calle Principal',
       descripcion: 'Departamento encargado de la gestión de ventas.',
       telefono: '123-456-7890',
       imagen: 'https://www.entrepreneur.com/article/268809',
       email:  'rh@gestiom'
   },
   {
       id: 5,
       nombre: 'Tecnología',
       direccion: '111 Calle Principal',
       descripcion: 'Departamento encargado de la gestión de tecnología.',
       telefono: '123-456-7890',
       imagen: 'https://www.entrepreneur.com/article/268809',
       email:  'rh@gestiom'
   },
   {
       id: 6,
       nombre: 'Servicio al Cliente',
       direccion: '222 Calle Principal',
       descripcion: 'Departamento encargado de la gestión de servicio al cliente.',
       telefono: '123-456-7890',
       imagen: 'https://www.entrepreneur.com/article/268809',
       email:  'rh@gestiom'
   },
   {
       id: 7,
       nombre: 'Logística',
       direccion: '333 Calle Principal',
       descripcion: 'Departamento encargado de la gestión de logística.',
       telefono: '123-456-7890',
       imagen: 'https://www.entrepreneur.com/article/268809',
       email:  'rh@gestiom'
   },
*/
];

const Departamentos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const defaultDepartmentData = {
    id: 0,
    nombre: "",
    direccion: "",
    descripcion: "",
    telefono: "",
    imagen: "",
    email: "",
    servicios: [],
  };

  const [department, setDepartment] = useState(defaultDepartmentData);

  const addDepartment = () => {
    setIsDialogOpen(true);
    department.id = departamentosData.length + 1;
  };

  const editDepartment = (departmentData) => {
    setIsEditing(true);
    setDepartment(departmentData);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setDepartment(defaultDepartmentData);
  };

  const showDepartments = () => {
    return departamentosData.map((dep) => (
      <Grid item xs={12} sm={6} md={4} key={dep.id}>
        <Card elevation={5} style={{ borderRadius: "15px" }}>
          <CardMedia
            component="img"
            height="150"
            image={dep.imagen}
            alt={dep.nombre}
          />
          <CardContent>
            <Typography
              variant="h6"
              gutterbottom
              style={{ fontWeight: "bold" }}
            >
              {dep.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <LocationOn /> Dirección: {dep.direccion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Description /> Descripción: {dep.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Phone /> Teléfono: {dep.telefono}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Email /> Email: {dep.email}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <IconButton onClick={() => editDepartment(dep)} color="primary">
              <Edit />
            </IconButton>
            <IconButton color="error">
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  return (
    <div style={{ background: "#f9f9f9" }}>
      <Container>
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <DialogTitle>
            <IconButton color="warning">
              <WarningAmberOutlined />
            </IconButton>
            ¡Advertencia!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Antes de continuar, deberá configurar su departamento de Recursos
              Humanos.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsDialogOpen(false)} color="primary">
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>

      <Container>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutline />}
          onClick={addDepartment}
          style={{ marginBottom: "20px" }}
        >
          Agregar Departamento de RH
        </Button>
        {isEditing ? (
          <>
            <IconButton onClick={cancelEdit}>
              <ArrowBack /> Cancelar edición
            </IconButton>
            <h1>Editar departamento</h1>
          </>
        ) : (
          <Grid container spacing={2}>
            {showDepartments()}
          </Grid>
        )}
        <hr />
      </Container>
    </div>
  );
};

export default Departamentos;
