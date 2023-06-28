import Auth from './components/Auth/Auth'
import Home from './components/Home/Home';
import Error from './views/Error/Error';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import PrivateRoutes from './layout/PrivateRoutes';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  //AGREGAR SCSS, REACTQUERY, FORMIK, YUP, MUI, FIREBASE(STORE - AUTH), MOCHAPI(MÁS ADELANTE PROBAR API DE VUELO)

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='*' element={<Error/>}/>
        {/* Private Routes */}
        <Route element={<PrivateRoutes/>}>
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </Router> 
    </>
  )
}

      

export default App
