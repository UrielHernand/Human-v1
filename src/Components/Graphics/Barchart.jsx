import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Grid } from '@mui/material';

// Registra las escalas y elementos necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gráfico de Empleados Activos e Inactivos',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const data = {
  labels,
  datasets: [
    {
      label: 'Empleados Activos',
      data: [900, 1400, 1100, 1700, 2000, 1800, 2200], // Valores de empleados activos
      backgroundColor: '#457fed', // Color para empleados activos
    },
    {
      label: 'Empleados Inactivos',
      data: [100, 100, 100, 100, 200, 200, 300], // Valores de empleados inactivos
      backgroundColor: '#ff5733', // Color para empleados inactivos
    },
  ],
};

const BarChart = () => {
  return (
    <Grid item xs={12} md={12}  style={{width:'auto'}}>
      <Bar data={data} options={options}  />
    </Grid>
  );
};

export default BarChart;
