import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {

  AddCircleOutline,
  ArrowBack,
  Business,
  Delete,
  Description,
 
  Edit,
  Email,

  OfflinePinTwoTone,

  Phone
} from "@mui/icons-material";
import FormDepartamentos from "../../../Components/Departamentos/FormDepartamentos";

import { getDepartaments } from "../../../Services/Departaments";
import AlertConfirmation from "../../../Components/Alerts/AlertConfirmation";

const Departamentos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [addDepartmentOne, setAddDepartmentOne] = useState(false);
  const defaultDepartmentData = [

    {
      id: 1,
      name : '',
      description : '',
      phone : '',
      email : '',
      image : '',
      services : [],
      state : true
    },
  ]
  
  const [storedData, setStoredData ] = useState(defaultDepartmentData);



  const [department, setDepartment] = useState(defaultDepartmentData);

  const addDepartment = () => {


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

  //dar debaja un departamento
  const deleteDepartment = (dep) => {
   dep.state = false;
    console.log(dep);
    setStoredData([...storedData]);
  };


  ///alerta de confirmacion para eliminar un departamento
  const [openConfirmationAlert, setOpenConfirmationAlert] = useState(false);
  const [departmentToDelete, setDepartmentToDelete] = useState(null);

  const handleConfirmDelete = () => {
    if (departmentToDelete) {
      deleteDepartment(departmentToDelete);
    }
    setOpenConfirmationAlert(false);
  };

  const handleDeleteCanceled = () => {
    setDepartmentToDelete(null);
    setOpenConfirmationAlert(false);
  };


  //alerta para habilitar un departamento
  const [openConfirmationAlertEnable, setOpenConfirmationAlertEnable] = useState(false);
  const [departmentToEnable, setDepartmentToEnable] = useState(null);
  
  const handleConfirmEnable = () => {
    if (departmentToEnable) {
      enableDepartment(departmentToEnable);
    }
    setOpenConfirmationAlertEnable(false);
  }

  const handleEnableCanceled = () => {
    setDepartmentToEnable(null);
    setOpenConfirmationAlertEnable(false);
  }

  //habilitar un departamento
  const enableDepartment = (dep) => {
    dep.state = true;
    console.log(dep);
    setStoredData([...storedData]);
  }


 
  

  useEffect(() => {
      getDepartaments().then((res) => {
        console.log(res);
        setStoredData(res);
      });
  }, [ ]);

   const showDepartments = () => {
    return storedData.map((dep) => (
     
      <Grid item xs={12} sm={6} md={4} key={dep.id}>
      <Card  elevation={5} 
    sx={{
      borderRadius: '15px',
      height: '100%',
      filter: dep.state  ? 'none' : 'blur(3px)', // Aplica desenfoque si dep.state es false
      transition: 'all 0.5s ease',
      ":hover": {
        filter: 'none',
        transform: dep.state ? 'scale(1.05)' : 'none', // Aplica escala si dep.state es true
        boxShadow: dep.state ? '0px 0px 15px rgba(0,0,0,0.5)' : 'none', // Aplica sombra si dep.state es true
      },
    }}
      >
        <CardMedia component="img" height="140" image={dep.image} alt={dep.name} />

        <CardContent>
         
          {!dep.state && (
            <Button
              variant="contained"
              color="success"
              startIcon={<OfflinePinTwoTone />}
              onClick={() => {
                setDepartmentToEnable(dep);
                setOpenConfirmationAlertEnable(true);
              }}
            >
              Habilitar departamento
            </Button>
          )}
      
          {!dep.state && (
            <Typography variant="body1" color="error" paragraph>
              Dado de baja
            </Typography>
          )}

    
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            {dep.name} 
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <Description /> Descripción: {dep.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <Phone /> Teléfono: {dep.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <Email /> Email: {dep.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Business /> Servicios:
            {dep.services && Array.isArray(dep.services) && dep.services.map((service, key) => (
    <Chip key={key} label={service} style={{ margin: '0 4px 4px 0' }} />
))}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <IconButton onClick={() => editDepartment(dep) } color="primary" disabled={!dep.state}  >
            <Edit />
          </IconButton>
          <IconButton color="error"  onClick={() => {
                setDepartmentToDelete(dep);
                setOpenConfirmationAlert(true);

              }}  disabled={!dep.state} >
            <Delete />
          </IconButton>
        </CardActions>
   
       

        
      </Card>

     

      
    
    </Grid>
    ));
  };
  

  


  return (
    <div style={{ background: "#f9f9f9" }}>

     <AlertConfirmation
      open={openConfirmationAlert}
      onClose={handleDeleteCanceled}
      onConfirm={handleConfirmDelete}
      title ="Baja de departamento"
      content="¿Está segur@ que desea dar de baja este departamento?"
     
      />
      <AlertConfirmation
      open={openConfirmationAlertEnable}
      onClose={handleEnableCanceled}
      onConfirm={handleConfirmEnable}
      title ="Habilitar departamento"
      content="¿Está segur@ que desea habilitar este departamento?"

      />

  
     

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
                <FormDepartamentos action="register"/>
             
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