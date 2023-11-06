import {
    Box,
    Typography,
    Grid,
    Paper,
  } from "@mui/material";
  
  import PeopleIcon from "@mui/icons-material/People";
  import BeachAccessIcon from "@mui/icons-material/BeachAccess";
  import AssessmentIcon from "@mui/icons-material/Assessment";
  
  
  import './Dashboard.css'
import { Barchart } from "../../../Components/Graphics";
  const Dashboard = () => {
    // Datos de ejemplo para las estadísticas de empleados
    const employeeStatsData = [
      {
        title: " Total de  Empleados Activos",
        value: "120",
        icon: <PeopleIcon fontSize="large" color="primary" />,
      },
      {
        title: "Empleados en Vacaciones  ",
        value: "15",
        icon: <BeachAccessIcon fontSize="large" color="primary" />,
      },
      {
        title: "Evaluación de Desempeño",
        value: "68%",
        icon: <AssessmentIcon fontSize="large" color="primary" />,
      },
    ];

    const mockTransactions = [
        {
          id: "TRX001",
          user: "John Doe",
          date: "2023-08-22",
          activity: "Creó una nueva cuenta",
        },
        {
          id: "TRX002",
          user: "Jane Smith",
          date: "2023-08-23",
            activity: "Actualizó su perfil",
        },
        {
          id: "TRX003",
          user: "John Doe",
          date: "2023-08-23",
            activity: "Creó una nueva cuenta",
        },
       
        // Agrega más transacciones según sea necesario
      ];

      const employeeReviewsData = [
        {
          title: "Evaluaciones Pendientes",
          value: "10",
        },
        {
          title: "Evaluaciones Terminadas",
          value: "110",
        },
        {
          title: "Evaluaciones Aprobadas",
          value: "100",
        },
      ];
    
  
    return (
      <Box m={1} >
        {/* HEADER */}
      
        {/* Estadísticas de Empleados */}
        <Grid container spacing={2} >
          {employeeStatsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} >
              <Paper elevation={3} >
                <Box p={2} textAlign="center" className="tag-dashboard">
                  {stat.icon}
                  <Typography variant="h4" fontWeight="bold">{stat.value}</Typography>
                  <Typography variant="h5">{stat.title}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

         {/* Evaluaciones de Desempeño */}
    <Grid container spacing={3} mt={1}>
        {employeeReviewsData.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3}  className="tag-dashboard">
              <Box p={2} textAlign="center" >
                <AssessmentIcon fontSize="large" color="primary" /> 
                <Typography variant="h4" fontWeight="bold">{review.value}</Typography>
                <Typography variant="h5">{review.title}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
  
      
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" fontWeight="600">
                  Empleados Activos e Inactivos
                </Typography>
               
                <Barchart />
              </Box>
            </Paper>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <Paper elevation={3} >
              <Box p={2}>
                <Typography variant="h6" fontWeight="600">
                  Actividad Reciente
                </Typography>
                {mockTransactions.map((transaction, index) => (
                  <Box
                    key={index}
                    borderBottom={`1px solid #ddd`}
                    mt={2}
                    pt={2}
                  >
                   
                    <Typography variant="body2" color="textSecondary">
                      {transaction.user}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {transaction.date}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {transaction.activity}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
  
      
       
      </Box>
    );
  };
  
  export default Dashboard;
  