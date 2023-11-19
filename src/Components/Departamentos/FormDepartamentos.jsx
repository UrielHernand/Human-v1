import  { useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
 
} from "@mui/material";
import {
  AccountCircle,
  Description,
  Email,
  Image,

  Phone,
  RoomService,
} from "@mui/icons-material";
import { Box } from "@mui/system";

// eslint-disable-next-line react/prop-types
const FormDepartamentos = ({ action, data }) => {
  const Typeaction = {
    register: 'register',
    update: 'update',
  };

  const [modo] = useState(action === Typeaction.register ? 'registrar' : 'actualizar');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    image: '',
    services: [],
    state: true,
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      if (name === 'services') {
        const updatedServices = value.split(',').map((service) => service.trim());
        return {
          ...prevFormData,
          [name]: updatedServices,
        };
      }

      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const getStartAdornment = (campo) => {
    switch (campo) {
      case 'name':
        return <AccountCircle />;
      case 'description':
        return <Description />;
      case 'phone':
        return <Phone />;
      case 'image':
        return <Image />;
      case 'email':
        return <Email />;
      case 'services':
        return <RoomService />;
      default:
        return null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(modo);

    if (modo === 'registrar') {
      console.log('entro');

      const departamentos = JSON.parse(localStorage.getItem('departamentosData')) || [];
      const nuevoDepartamento = { ...formData, id: departamentos.length + 1 };
      departamentos.push(nuevoDepartamento);
      localStorage.setItem('departamentosData', JSON.stringify(departamentos));
    } else if (modo === 'actualizar') {
      const departamentos = JSON.parse(localStorage.getItem('departamentosData')) || [];
      const indexDepartamento = departamentos.findIndex((dep) => dep.id === formData.id);
      if (indexDepartamento !== -1) {
        departamentos[indexDepartamento] = formData;
        localStorage.setItem('departamentosData', JSON.stringify(departamentos));
      }
    }
    window.location.href = '/admin/departamentos';
  };

  return (
    <Box>
      <Typography variant="h4" color="primary">
        {modo === 'registrar' ? 'Registro' : 'Actualización'} de Departamento
      </Typography>
      <hr />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(formData).map((campo) => (
            <Grid item xs={12} sm={6} key={campo}>
              <TextField
                fullWidth
                label={campo.charAt(0).toUpperCase() + campo.slice(1)}
                name={campo}
                variant="outlined"
                required
                value={formData[campo]}
                onChange={handleChange}
                InputProps={{
                  startAdornment: getStartAdornment(campo),
                }}
                sx={{ mt: 2 }}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {modo === 'registrar' ? 'Registrar' : 'Actualizar'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

FormDepartamentos.defaultProps = {
  action: Object.keys({ action: 'registrar' })[0],
  data: null,
};

export default FormDepartamentos;
