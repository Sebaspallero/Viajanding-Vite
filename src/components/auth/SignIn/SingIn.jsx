import { useState } from 'react'
import { auth, googleProvider } from '../../../firebase/config'
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

const SingIn = ({handleToggle}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async(e) =>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            alert('Sesion Iniciada')
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

  return (
    <div>
        <h2 className='subtitle'>Registrarte</h2>
        <form>
            <input placeholder='email' type='text' onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </form>
        <div className='toggle-form-box'>
            <p>¿Ya tienes una cuenta?</p>
            <button onClick={()=> handleToggle()}>Login</button>
        </div>
    </div>
  )
}

export default SingIn