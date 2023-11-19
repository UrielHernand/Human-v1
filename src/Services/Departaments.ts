

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


  function getOrCreateDepartamentosData(): Promise<Array<any>> {
    return new Promise((resolve) => {
        let storedData: Array<any> | null = JSON.parse(localStorage.getItem('departamentosData') || 'null');

        if (!storedData) {
            // If there is nothing in localStorage, set storedData to a default array
            const defaultData = [
                {
                    id: 0,
                    name: '',
                    description: '',
                    phone: '',
                    email: '',
                    services: [],
                    image: '',
                    state: true
                }
                // Add more default objects as needed
            ];

            // Store the default array in localStorage
            localStorage.setItem('departamentosData', JSON.stringify(defaultData));

            // Set storedData to defaultData
            storedData = defaultData;
        }

        // Resolve with the value of storedData
        resolve(storedData);
    });
}


export async function getDepartaments() {
    try {
        const response = await fetch('http://localhost:3000/departaments');
        const data = await response.json();
        return data;
    } catch (error) {
        const storedData: Array<any> = await getOrCreateDepartamentosData();
        const combinedArray = [...departamentosData, ...storedData];
        return combinedArray;
    }
}
