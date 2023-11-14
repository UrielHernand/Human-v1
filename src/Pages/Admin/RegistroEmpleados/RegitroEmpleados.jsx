import { Container, FormControl,InputLabel, Input, FormHelperText,
        Button,
        Grid
} from "@mui/material";

function RegistroEmpleados(){
return(
    <div>
            <Grid container>
                <Grid item md={5}>
                    <FormControl>
                        <InputLabel>Nombre(s)</InputLabel>
                        <Input id="nombre" type="nombre"/>
                        <FormHelperText id="nombre">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl>
                        <InputLabel>Apellido Paterno</InputLabel>
                        <Input id="paterno" type="paterno"/>
                        <FormHelperText id="paterno">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={5}>
                    <FormControl>
                        <InputLabel>Apellido Materno</InputLabel>
                        <Input id="maternio" type="materno"/>
                        <FormHelperText id="nombre">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl>
                        <InputLabel>Estatus</InputLabel>
                        <Input id="estatus" type="estatus"/>
                        <FormHelperText id="estatus">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={4.5}>
                    <FormControl>
                        <InputLabel>RFC</InputLabel>
                        <Input id="rfc" type="rfc"/>
                        <FormHelperText id="rfc">Mayusculas, minusculas y numeros</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={7}>
                    <FormControl>
                        <InputLabel>Departamento</InputLabel>
                        <Input id="departamento" type="departamento"/>
                        <FormHelperText id="departamento">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={5}>
                    <FormControl>
                        <InputLabel>Puesto</InputLabel>
                        <Input id="puesto" type="puesto"/>
                        <FormHelperText id="puesto">Solo de aceptan Mayusculas y minusculas</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={5.2}>
                    <FormControl>
                        <InputLabel>Telefono</InputLabel>
                        <Input id="telefono" type="telefono"/>
                        <FormHelperText id="nombre">Solo de aceptan numeros</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={10} paddingTop={8}>
                    <Button variant="contained" color="primary">
                        Registrar
                    </Button>
                </Grid>
            </Grid> 
    </div>
)

};

export default RegistroEmpleados;