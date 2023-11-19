const empleadosData = [
    {
        id: 1,
        name : 'Miguel Fernando',
        apellidoPa:'Rosales',
        apellidoMa:'Contreras',
        departamento: 'Sistemas',
        puesto: 'Desarrollador Junior',
        edad : '28',
        
    },
    {
        id: 2,
        name : 'Miguel Fernando',
        apellidoPa:'Rosales',
        apellidoMa:'Contreras',
        departamento: 'Sistemas',
        puesto: 'Desarrollador Junior',
        edad : '28',
    },
    {
        id: 3,
        name : 'Miguel Fernando',
        apellidoPa:'Rosales',
        apellidoMa:'Contreras',
        departamento: 'Sistemas',
        puesto: 'Desarrollador Junior',
        edad : '28',
    }
];

export function getEmpleados() {
    return fetch ('http://localhost:3000/empleados')
    .then(response => response.json())
    .then(response => response)
    .catch(err => empleadosData);
};