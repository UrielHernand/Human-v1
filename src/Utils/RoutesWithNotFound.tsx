import{ Routes, Route} from 'react-router-dom'
import React from 'react'


interface Props {
  children: JSX.Element[] | JSX.Element;
}


export default function RoutesWithNotFound ( { children } : Props) {
  return (       
 <Routes>
          {children}
          <Route  path ="*" element= {<h1> Página no encontrada </h1>}/>
 </Routes>
         
    
  );
}