import { useEffect, useState } from "react";
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


} from "@mui/material";
import {

  AddCircleOutline,
  ArrowBack,
  Delete,
  Description,
  Edit,
  Email,




  Phone,


} from "@mui/icons-material";
import FormDepartamentos from "../../../Components/Departamentos/FormDepartamentos";



const departamentosData = [
  {
    id: 1,
    nombre: "Recursos Humanos",

    descripcion: "Departamento encargado de la gestión de personal.",
    telefono: "123-456-7890",
    imagen:"https://doctor-cv.com/blog/wp-content/uploads/2018/11/p-rrhh.JPG.jpeg",
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

    descripcion: "Departamento encargado de la gestión financiera.",
    telefono: "123-456-7890",
    imagen:"https://www.michaelpage.es/sites/michaelpage.es/files/styles/advice_node_desktop/public/legacy/cfo.jpg.webp?itok=Fkb1opD-",
    email: "rh@gestiom",
  },
  {
    id: 3,
    nombre: "Mercadeo",
 
    descripcion: "Departamento encargado de la gestión de mercadeo.",
    telefono: "123-456-7890",
    imagen:"https://www.merca20.com/wp-content/uploads/2019/05/mercadotecnia.jpg",
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
localStorage.setItem('departamentosData', JSON.stringify(departamentosData));

const Departamentos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [addDepartmentOne, setAddDepartmentOne] = useState(false);
  const [storedData, setStoredData ] = useState(JSON.parse(localStorage.getItem('departamentosData')));

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

    department.id = departamentosData.length + 1;
    setAddDepartmentOne(true);
  };

  const cancelAdd = () => {
    setAddDepartmentOne(false);
    setDepartment(defaultDepartmentData);
  };

  const editDepartment = (departmentData) => {
    setIsEditing(true);
    setDepartment(departmentData);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setDepartment(defaultDepartmentData);
  };

  useEffect(() => {
      setStoredData(JSON.parse(localStorage.getItem('departamentosData')));
  
  }, []);

  const showDepartments = () => {
    return storedData.map((dep) => (
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

      {!isEditing && (
          <Button
              variant="contained"
            color="primary"
            startIcon={<AddCircleOutline />}
            onClick={addDepartment}
            style={{ marginBottom: "20px" }}
          >
            Agregar Departamento de RH
          </Button>
      )}
       
        {isEditing   ? (
          <>

         
              
      

          
        
              <Grid container spacing={2}>
              <Button variant="contained" onClick={cancelEdit}  color="error"><ArrowBack /> Cancelar edición</Button>
               <FormDepartamentos action="actualizar" data={department} />
               
              </Grid>
     
          </>
        ) :  (
          <Grid container spacing={2}>
          
         { addDepartmentOne ? null : showDepartments()}
          
          </Grid>
        )}

        {
          addDepartmentOne ? (
            <>
            <Grid container spacing={2}>
              <Button variant="contained" onClick={cancelAdd}  color="error"><ArrowBack /> Cancelar Registro</Button>
                <FormDepartamentos action="registrar"  />
             
            </Grid>
            </>
          ) : null
        }

        
        <hr />
      </Container>
    </div>
  );
};

export default Departamentos;
