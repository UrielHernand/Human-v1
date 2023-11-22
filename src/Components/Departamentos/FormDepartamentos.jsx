import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  AttractionsOutlined,
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
    state: true,
    services: [''], // Agregado un servicio por defecto
    id: null, // Establecer id como null por defecto
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

  const handleAddService = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      services: [...prevFormData.services, ''], // Agrega un servicio vacío al array
    }));
  };

  const handleRemoveService = (index) => {
    setFormData((prevFormData) => {
      const updatedServices = [...prevFormData.services];
      updatedServices.splice(index, 1); // Elimina el servicio en el índice proporcionado
      return {
        ...prevFormData,
        services: updatedServices,
      };
    });
  };

  const handleServiceChange = (event, index) => {
    const updatedServices = [...formData.services];
    updatedServices[index] = event.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      services: updatedServices,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(modo);

    if (modo === 'registrar') {
      console.log('entro');

      const departamentos = JSON.parse(localStorage.getItem('departamentosData')) ;
      const nuevoDepartamento = { ...formData, id: departamentos.length + 1 };
      departamentos.push(nuevoDepartamento);
      localStorage.setItem('departamentosData', JSON.stringify(departamentos));
    } else if (modo === 'actualizar' && formData.id !== null) {
      const departamentos = JSON.parse(localStorage.getItem('departamentosData'));
      const indexDepartamento = departamentos.findIndex((dep) => dep.id === formData.id);
      if (indexDepartamento !== -1) {
        departamentos[indexDepartamento] = formData;
        localStorage.setItem('departamentosData', JSON.stringify(departamentos));
      }
    }
    window.location.reload();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Obtener el primer archivo seleccionado
    if (file) {
      const reader = new FileReader(); // Instanciar FileReader
      reader.onload = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result, // Establecer el resultado de la lectura como el valor de la imagen
        }));
      };
      reader.readAsDataURL(file); // Leer el archivo como un URL
    }

    // const file = event.target.files[0];

  };

  const getStartAdornment = (campo) => {
    switch (campo) {
      case 'name':
        return <AccountCircle />;
      case 'description':
        return <Description />;
      case 'phone':
        return <Phone />;
      case 'email':
        return <Email />;
      case 'image':
        return <Image />;
      case 'services':
        return <RoomService />;
      default:
        return null;
    }
  };

  const renderServiceInputs = () => {
    return (
      <div>
        {formData.services.map((service, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              fullWidth
              label={`Service ${index + 1}`}
              name={`service-${index}`}
              variant="outlined"
              helperText={index === 0 ? 'Agrega un servicio' : null}
              required
              value={service}
              onChange={(event) => handleServiceChange(event, index)}
              InputProps={{
                startAdornment: <AttractionsOutlined />,
                endAdornment: (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemoveService(index)}
                  >
                    Remove
                  </Button>
                ),
              }}
              sx={{ mt: 2 }}
            />
          </Grid>
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddService}
          startIcon={<AttractionsOutlined />}
        >
          Agregar otro servicio
        </Button>
      </div>
    );
  };

  const renderInputField = (campo) => {
    if (campo === 'services' && formData[campo]) {
      return renderServiceInputs();
    } else if (campo === 'image') {
      return (
        <TextField
        fullWidth
        label={campo.charAt(0).toUpperCase() + campo.slice(1)}
        name={campo}
        variant="outlined"
      
        onChange={(event) => handleFileChange(event)}
        InputProps={{
          startAdornment: getStartAdornment(campo),
        }}
        sx={{ mt: 2 }}
        type="file"
        inputProps={{ accept: 'image/*' }} // Asegúrate de permitir solo archivos de imagen
        helperText="Solo se aceptan imágenes"
      />
      );
    } else if (campo === 'state') {
      return (
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
          type="list"
          disabled={true}
          helperText="No se puede modificar, solo habilitar o deshabilitar. Por el momento, está habilitado"
        />
      );
    } else {
      return (
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
          helperText="Ingrese los datos solicitados"
        />
      );
    }
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
              {renderInputField(campo)}
              <br />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              {modo === 'registrar' ? 'Registrar Departamento' : 'Actualizar Departamento'}
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
