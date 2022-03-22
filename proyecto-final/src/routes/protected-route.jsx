import { Navigate } from "react-router-dom"



function ProtectedRoute ({children}) {


  const token=localStorage.getItem('token')

    if(token===null){

        return <Navigate to='/users'></Navigate>
    }
    return children;

}

export default ProtectedRoute