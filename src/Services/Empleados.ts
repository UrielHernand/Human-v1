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
    },
    {
        id : 4,
        name : 'uriel',
        apellidoPa:'Hernandez',
        apellidoMa:'Carrera',
        departamento: 'Sistemas',
        puesto: 'Gerente',
        edad: '28',
    }
];



function getOrCreateEmpleadosData(): Promise<Array<any>> {
    return new Promise((resolve) => {
      let storedData: Array<any> | null = JSON.parse(localStorage.getItem('empleadosData') || 'null');
  
      if (!storedData) {
        const defaultData = 
        [
            {
                id: 0,
                name : '',
                apellidoPa:'',
                apellidoMa:'',
                departamento: '',
                puesto: '',
                edad : '',
            }
        ];
        localStorage.setItem('empleadosData', JSON.stringify(defaultData));
        storedData = defaultData;
      }
  
      resolve(storedData);
    });
  }
  
export async  function getEmpleados() {
  try {
        const response = await fetch('http://localhost:3000/empleados');
        const data = await response.json();
        return data;
    
  }
    catch (error) {
        const storedData: Array<any> = await getOrCreateEmpleadosData();
        const combinedArray = [...empleadosData, ...storedData];
        return combinedArray;
    }
};



