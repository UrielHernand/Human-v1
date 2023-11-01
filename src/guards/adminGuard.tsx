
import { Navigate, Outlet } from 'react-router-dom';

  import React from 'react';





interface Props {
    Validation: boolean;
}

const AdminValidationFragment = <Outlet />;
const AdminNoValidationFragment = <Navigate replace to={"/"} />;
/* const role = Roles.Admin; */


export const AdminGuard = ({ Validation }: Props) => 
{
  /* const userState = useSelector((store: AppStore) => store.user);
  return userState.name && Validation && userState.role === role  ? AdminValidationFragment : AdminNoValidationFragment; */

  return Validation ? AdminValidationFragment : AdminNoValidationFragment;
    

};

export default AdminGuard;