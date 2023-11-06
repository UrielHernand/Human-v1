import{ Routes, Route} from 'react-router-dom'
import React from 'react'
import Admin from '../Pages/Admin/Admin';


interface Props {
  children: JSX.Element[] | JSX.Element;
}


export default function RoutesWithNotFound ( { children } : Props) {
  return (       
 <Routes>
          {children}
          <Route  path ="*" element= {  <Admin></Admin>}/>
 </Routes>
         
    
  );
}