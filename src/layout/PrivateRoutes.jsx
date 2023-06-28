import {Outlet, useLocation, Navigate} from 'react-router-dom'
import { auth } from '../firebase/config'

const PrivateRoutes = () => {
    const location = useLocation()

    return auth.currentUser ? (<Outlet/>) : (<Navigate to='/auth' state={{from: location}} replace/>)
}

export default PrivateRoutes