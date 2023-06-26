import React, { useState } from 'react'
import { auth, googleProvider } from '../../firebase/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async() =>{
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

    const logOut = async() =>{
        try{
            await signOut(auth)
            alert('Sesion Cerrada')
        }catch(err){
            alert(err)
        }
    }

  return (
    <div>
        <input placeholder='email' type='text' onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
        <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Auth