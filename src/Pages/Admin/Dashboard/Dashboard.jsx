import {
  Box,
  Typography,
  Grid,
  Paper,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import "./Dashboard.css";
import { Barchart } from "../../../Components/Graphics";
import {
  Assignment,
  Business,
  Engineering,
  ExtensionOff,
  HourglassBottom,
  HowToReg,
  PendingActionsOutlined,
  TaskOutlined,
} from "@mui/icons-material";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import CardsCarousel from "../../../Components/CardsCarousel/CardsCarousel";
const Dashboard = () => {
  // Datos de ejemplo para las estadísticas de empleados
  const employeeStatsData = [
    {
      title: "Empleados Activos",
      value: "120",
      icon: <PeopleIcon fontSize="large" color="primary" />,
    },
    {
      title: "Departamentos",
      value: "5",
      icon: <Business fontSize="large" color="primary" />,
    },
    {
      title: "Vacaciones  ",
      value: "15",
      icon: <BeachAccessIcon fontSize="large" color="primary" />,
    },

    {
      title: "Equipamiento Entregado",
      value: "100%",
      icon: <Engineering fontSize="large" color="primary" />,
    },
    {
      title: "Equipamiento Pendiente",
      value: "0%",
      icon: <ExtensionOff fontSize="large" color="primary" />,
    },

    {
      title: "Equipamiento Dañado",
      value: "0%",
      icon: <ExtensionOff fontSize="large" color="primary" />,
    },
  ];
  //actividad reciente
  const mockTransactions = [
    {
      user: "John Doe",
      date: "2021-09-15",
      activity: "Agregó un nuevo empleado",
    },
    {
      user: "Jane Smith",
      date: "2021-09-15",
      activity: "Agregó un nuevo empleado",
    },
 
  ];

  const employeeReviewsData = [
    {
      title: "Evaluaciones Pendientes",
      value: "10",
      icon: <PendingActionsOutlined fontSize="large" color="primary" />,
    },
    {
      title: "Evaluaciones Terminadas",
      value: "110",
      icon: <TaskOutlined fontSize="large" color="primary" />,
    },
    {
      title: "Evaluaciones Aprobadas",
      value: "100",
      icon: <HowToReg fontSize="large" color="primary" />,
    },
  ];

  return (
    <Box m={2} style={{display:'flex'}}>
      {/* HEADER */}

      {/* Estadísticas de Empleados */}
        <Grid container spacing={1} md={7} sx={12}>
            {/* Estadísticas de Empleados */}
            <Grid container spacing={1} md={12}>
              {employeeStatsData.map((stat, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <hr />
                  <Paper elevation={3} className="tag-dashboard">
                    <Box p={2} textAlign="center">
                      {stat.icon}
                      <Typography variant="h4" fontWeight="bold">
                        {stat.value}
                      </Typography>
                      <Typography variant="h5">{stat.title}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
              {/* Empleados Activos e Inactivos */}
            <Grid container spacing={1} mt={1} md={12}>
              <Grid item xs={12} md={12}>
                <Paper elevation={7}>
                  <Box p={2}>
                    <Typography variant="h6" fontWeight="600">
                      Empleados Activos e Inactivos
                    </Typography>
                    <Barchart />
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            {/* Evaluaciones de Desempeño */}
            <Grid container spacing={1} md={12}>
              {employeeReviewsData.map((review, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <hr />
                  <Paper elevation={3} className="tag-dashboard">
                    <Box p={2} textAlign="center">
                      {review.icon}
                      <Typography variant="h4" fontWeight="bold">
                        {review.value}
                      </Typography>
                      <Typography variant="h5">{review.title}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>


        
        </Grid>

        

        {/* Actividad Reciente */}
        <Grid container spacing={1} mt={1.5} md={4.7} sx={12} >
                
                {/* Celebraciones */}
            <Grid item xs={12} md={12}>
              <Paper elevation={7}>
                <Box p={2}>
                  <Typography variant="h6" fontWeight="600">
                    Celebraciones
                  </Typography>
                   <CardsCarousel />
                </Box>
              </Paper>
            </Grid>

              {/* Eventos */ }
            <Grid item xs={12} md={12}>
              <Paper elevation={7}>
                <Box p={2}>
                  <Typography variant="h6" fontWeight="600">
                    Eventos
                  </Typography>
                  <Barchart />
                </Box>
              </Paper>
            </Grid>

              {/* Noticias */}
            <Grid item xs={12} md={12}>
              <Paper elevation={7}>
                <Box p={2}>
                  <Typography variant="h6" fontWeight="600">
                    Noticias
                  </Typography>
                  <Barchart />
                </Box>
              </Paper>
            </Grid>
            {/* Actividad Reciente */ }
          <Grid item xs={12} md={12} >
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" fontWeight="600">
                  Actividad Reciente <HourglassBottom color="primary" />{" "}
                  {new Date().toLocaleDateString()}
                </Typography>
                <hr />
                <Grid container spacing={3}>
                  {mockTransactions.map((transaction, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
                      <Card className="card-dashboard">
                        <CardMedia
                          component={Assignment}
                          alt="Activity Icon"
                          height="140"
                          color="primary"
                          local="true"
                        />
                        {
                          <Typography variant="body1">
                            {transaction.activity}
                          </Typography>
                        }
                        <hr />
                        <CardContent>
                          <Typography variant="body1" fontWeight="bold">
                            {transaction.user}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {transaction.date}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/reportes"
                  style={{ marginTop: "16px" }}
                >
                  Ver Reportes
                </Button>
              </Box>
            </Paper>
          </Grid>
                   
        </Grid>

        
    </Box>
  );
};

export default Dashboard;
