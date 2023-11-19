import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import esLocale from "@fullcalendar/core/locales/es";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Por favor ingrese un título para el evento");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      // Agrega un evento normal con un background azul


      calendarApi.addEvent({
        id: uuidv4(),
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      
      });

  
      
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `¿Quiere eliminar el evento "${selected.event.title}"?`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={2}>
      <Typography variant="h4" mb={2}>
        Calendario
      </Typography>

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box flex="1 1 20%" className="calendar" p={2} borderRadius={4}>
          <Typography variant="h5">Eventos</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "#e5e5ec",
                  marginY: 1,
                  borderRadius: 2,
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {event.start.toLocaleDateString()}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml={2} fontStyle={{backgroundColor:'white'}}>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: uuidv4(),
                title: "Hola evento",
                start: new Date("Oct 9, 2023"),
                end: new Date("Oct 9, 2023"),
              },
              {
                id: uuidv4(),
                title: "Evento programado",
                start: new Date("Oct 9, 2023"),
                end: new Date("Oct 9, 2023"),
              },
            ]}
            locale={esLocale}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
