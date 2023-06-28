import { useState } from 'react'
import { auth, googleProvider } from '../../../firebase/config'
import { signInWithPopup, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { useNavigate, useLocation } from 'react-router-dom'
import './styles.css'

const Login = ({handleToggle}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/checkout'

    const login = async(e) =>{
        e.preventDefault()
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            navigate(from, {replace: true})
           return res
        }catch(err){
            alert(err)
        }
    }

    const signInWithGoogle = async() =>{
        try{
            await signInWithPopup(auth, googleProvider)
            alert('Sesion Iniciada Con Google')
        }catch(err){
            alert(err)
        }
    }

    const logOut = async() =>{
        try{
            await signOut(auth)
            alert('Sesion Cerrada')
        }catch(err){
            alert(err)
        }
    }

    console.log(auth.currentUser)

  return (
    <div>
        <h2 className='subtitle'>Iniciar Sesión</h2>
        <form>
            <input placeholder='email' type='text' onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>
            <button onClick={signInWithGoogle}>Login with Google</button>
        </form>
        <div className='toggle-form-box'>
            <p className='text'>¿No tienes una cuenta?</p>
            <button onClick={()=> handleToggle()}>Sing In</button>
        </div>
        <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Login