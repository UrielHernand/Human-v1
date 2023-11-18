

//servicio para CRUD de departamentos

//in react js , sin axios 
//import axios from 'axios';
const departamentosData = [
    {
        id: 1,
        name : 'Departamento de Sistemas',
        description: 'Departamento de Sistemas',
        phone : '2222222',
        email: '@sistemas.com',
        services: ['Ensamblaje de computadoras', 'Mantenimiento de computadoras', 'Instalación de software', 'Instalación de redes'],
        image: 'https://www.ips.com.mx/blog/wp-content/uploads/2023/06/5-consejos-para-maximizar-los-recursos-humanos-en-tu-empresa.jpg',
        state : true
    },
    {
        id: 2,
        name : 'Departamento de Electricidad',
        description: 'Departamento de Electricidad',
        phone : '3333333',
        email: '@electricidad.com',
        services: ['Instalación de circuitos eléctricos', 'Instalación de redes eléctricas', 'Instalación de alumbrado público'],
        image: 'https://img.freepik.com/premium-vector/technological-ecology-concept-with-lightbulb_23-2148427535.jpg',
        state : true
    },
    {
        id: 3,
        name : 'Departamento de Mecánica',
        description: 'Departamento de Mecánica',
        phone : '4444444',
        email: '@mecanica.com',
        services: ['Mantenimiento de motores', 'Mantenimiento de maquinaria pesada', 'Mantenimiento de maquinaria liviana'],
        image: 'https://www.ips.com.mx/blog/wp-content/uploads/2023/06/5-consejos-para-maximizar-los-recursos-humanos-en-tu-empresa.jpg',
        state : true
    },
   
    
  ];

export function getDepartaments() {
    return fetch ('http://localhost:3000/departaments')
    .then(response => response.json())
    .then(response => response)
    .catch(err => departamentosData);

};
