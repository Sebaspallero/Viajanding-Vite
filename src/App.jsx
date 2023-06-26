import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Prueba from './components/prueba'
import Auth from './components/auth/Auth'

function App() {
  //AGREGAR SCSS, REACTQUERY, FORMIK, YUP, MUI, FIREBASE(STORE - AUTH), MOCHAPI(MÁS ADELANTE PROBAR API DE VUELO)

  return (
    <>
    <div>
      <h1 className='title'>Probando el título</h1>
      <h2 className='subtitle'>Probando el Subtítulo</h2>
      <p className='text'>Probando el text</p>
      <p className='sm-text'>Probando el texto pequeño</p>
      <Auth/>
    </div>
    </>
  )
}

export default App
