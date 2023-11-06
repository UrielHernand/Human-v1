
import { useReactToPrint } from 'react-to-print';


import React from 'react';
import PrintableTable from '../../../Components/Graphics/Table/PrintableTable';
import { Container, Grid, Paper, Typography } from '@mui/material';
const contratacionesActualesYBajas = [
    {
      id: 1,
      empleado: "John Doe",
      fechaContratacion: "2023-01-15",
      departamento: "Recursos Humanos",
      estado: "Activo",
    },
    {
      id: 2,
      empleado: "Jane Smith",
      fechaContratacion: "2023-02-20",
      departamento: "Ventas",
      estado: "Activo",
    },
    {
      id: 3,
      empleado: "Alice Johnson",
      fechaContratacion: "2023-03-10",
      departamento: "Tecnología",
      estado: "Baja",
    },
    {
        id: 4,
        empleado: "Bob Clark",
        fechaContratacion: "2023-04-05",
        departamento: "Recursos Humanos",
        estado: "Activo",
        },
        {
        id: 5,
        empleado: "Karen Smith",
        fechaContratacion: "2023-05-10",
        departamento: "Ventas",
        estado: "Baja",
        },
        {
        id: 6,
        empleado: "John Doe",
        fechaContratacion: "2023-06-15",
        departamento: "Tecnología",
        estado: "Activo",
        },
        {
        id: 7,
        empleado: "Jane Smith",
        fechaContratacion: "2023-07-20",
        departamento: "Recursos Humanos",
        estado: "Baja",
        },
        {
        id: 8,
        empleado: "Alice Johnson",
        fechaContratacion: "2023-08-10",
        departamento: "Ventas",
        estado: "Activo",
        },
        {
        id: 9,
        empleado: "Bob Clark",
        fechaContratacion: "2023-09-05",
        departamento: "Tecnología",
        estado: "Baja",
        },
        {
        id: 10,
        empleado: "Karen Smith",
        fechaContratacion: "2023-10-10",
        departamento: "Recursos Humanos",
        estado: "Activo",
        },
      
    // Agrega más datos según sea necesario
  ];
  
  const accionesImportantes = [
    {
      id: 1,
      empleado: "John Doe",
      accionRealizada: "Evaluación de desempeño",
      fechaAccion: "2023-03-05",
    },
    {
      id: 2,
      empleado: "Jane Smith",
      accionRealizada: "Promoción",
      fechaAccion: "2023-04-10",
    },
    {
      id: 3,
      empleado: "Alice Johnson",
      accionRealizada: "Entrenamiento",
      fechaAccion: "2023-05-15",
    },
    {
        id: 4,
        empleado: "Bob Clark",
        accionRealizada: "Evaluación de desempeño",
        fechaAccion: "2023-06-05",
        },
        {
        id: 5,
        empleado: "Karen Smith",
        accionRealizada: "Promoción",
        fechaAccion: "2023-07-10",
        },
        {
        id: 6,
        empleado: "John Doe",
        accionRealizada: "Entrenamiento",
        fechaAccion: "2023-08-15",
        },
        {
        id: 7,
        empleado: "Jane Smith",
        accionRealizada: "Evaluación de desempeño",
            
        fechaAccion: "2023-09-05",
        },
        {
        id: 8,
        empleado: "Alice Johnson",
        accionRealizada: "Promoción",
        fechaAccion: "2023-10-10",
        },
        
    // Agrega más datos según sea necesario
  ];

  

export default function Reportes() {
  const contratacionesColumns = [
    { id: 'empleado', label: 'Empleado' },
    { id: 'fechaContratacion', label: 'Fecha de Contratación' },
    { id: 'departamento', label: 'Departamento' },
    { id: 'estado', label: 'Estado' },
  ];

  const accionesColumns = [
    { id: 'empleado', label: 'Empleado' },
    { id: 'accionRealizada', label: 'Acción Realizada' },
    { id: 'fechaAccion', label: 'Fecha de Acción' },
  ];

  
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Container>
    <Typography variant="h5" gutterBottom>
      Reportes
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <PrintableTable
            ref={componentRef}
            data={contratacionesActualesYBajas}
            columns={contratacionesColumns}
            title="Contrataciones Actuales y Bajas"
            onPrint={handlePrint}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <PrintableTable
           ref={componentRef}
            data={accionesImportantes}
            columns={accionesColumns}
            title="Acciones Importantes"
            onPrint={handlePrint}
          />
        </Paper>
      </Grid>
    </Grid>
  </Container>
  );
}


