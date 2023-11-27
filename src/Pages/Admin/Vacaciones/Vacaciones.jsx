import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import esLocale from "@fullcalendar/core/locales/es";
import { v4 as uuidv4 } from "uuid";
import { getEmpleados } from "../../../Services/Empleados";

const Vacaciones = () => {

  let   defaultEmpleados = [
        {
            id: 1,
            name: '',
            apellidoPa: '',
            apellidoMa: '',
            telefono: '',
            direccion: '',
            fechaNacimiento: '',
            fechaIngreso: '',
            salario: '',
            estado: true,
        }
    ]
  const [empleados, setEmpleados] = useState(defaultEmpleados );
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [employeeVacations, setEmployeeVacations] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
getEmpleados().then((response) => {
    setEmpleados(response);
        console.log(response);
    });

  }, []);

  const handleDateRangeChange = (range) => {
    setSelectedDateRange(range);
  };

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event);
    
  };

  const handleDateClick = (selected) => {
    setSelectedDateRange({
      start: selected.startStr,
      end: selected.endStr,
    });
    // Mostrar alerta si el rango de fechas no está seleccionado
    if (!selectedDateRange) {
      setAlertOpen(true);
    } else {
      setDialogOpen(true);
    }
  };

  const handleEventClick = () => {
    // Puedes implementar lógica adicional aquí si es necesario
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedDateRange(null);
    setSelectedEmployee("");
  };

  const handleVacationSubmit = () => {
    if (selectedEmployee && selectedDateRange) {
      const newVacation = {
        id: uuidv4(),
        title: `${selectedEmployee}' calendario de vacaciones- ${selectedDateRange.start} - ${selectedDateRange.end}`,
        start: selectedDateRange.start,
        end: selectedDateRange.end,
        allDay: true,
      };
      setEmployeeVacations((prevVacations) => [...prevVacations, newVacation]);
      handleDialogClose();
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const handleAddVacationClick = () => {
    // Mostrar alerta indicando que se debe especificar el rango de fechas
    setAlertOpen(true);
  };

  return (
    <Box m={2}>
      <Typography variant="h4" mb={2}>
        Asignación de Vacaciones
      </Typography>

      {/* LISTA DE EMPLEADOS CON VACACIONES */}
      <List>
        {employeeVacations.map((vacation) => (
          <ListItem key={vacation.id}>
            <ListItemText
              primary={vacation.title}
              secondary={`${vacation.start} - ${vacation.end}`}
            />
          </ListItem>
        ))}
      </List>

      {/* BOTÓN PARA AGREGAR VACACIONES */}
      <Box mt={2}>
        <Button variant="contained" onClick={handleAddVacationClick}>
          Agregar Vacación
        </Button>
      </Box>

      <hr />

      {/* CALENDAR */}
      <Box flex="1 1 100%" ml={2} fontStyle={{ backgroundColor: "white" }}>
        <FullCalendar
          height="75vh"
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth",
          }}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          events={employeeVacations}
          locale={esLocale}
        />
      </Box>

      {/* SNACKBAR PARA ALERTA */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <MuiAlert
          onClose={handleAlertClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          Antes de asignar vacaciones, selecciona un rango de fechas en el
          calendario
        </MuiAlert>
      </Snackbar>

      {/* DIALOG PARA ASIGNAR VACACIONES */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Asignar Vacaciones</DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <TextField
              label="Título de las Vacaciones"
              value={`Empleado: ${selectedEmployee}'  vacaciones`}
              disabled
              fullWidth
              margin="normal"
            />
          </Box>
          <Box mb={2}>
          <Select
  label="Empleado"
  value={selectedEmployee}
  onChange={(event) => handleEmployeeChange(event.target.value)}
  fullWidth
  margin="normal"
>
  {empleados && empleados.map((empleado) => (
    <MenuItem key={empleado.id} value={empleado.name}>
      {`${empleado.name} ${empleado.apellidoPa} ${empleado.apellidoMa}`}
    </MenuItem>
  ))}
</Select>




          </Box>
          <Box mb={2}>
            <TextField
              label="Rango de Fechas"
              onChange={handleDateRangeChange}
              value={`${selectedDateRange?.start} - ${selectedDateRange?.end}`}
              disabled
              fullWidth
              margin="normal"
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={handleDialogClose}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleVacationSubmit}
            >
              Asignar
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Vacaciones;
