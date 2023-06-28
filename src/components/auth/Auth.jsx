import { useState } from "react"
import SingIn from "./SignIn/SingIn"
import Login from "./Login/Login"

const Auth = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <section>
        {
            toggle ? <Login handleToggle={handleToggle}/> : <SingIn handleToggle={handleToggle}/>
        }
    </section>
  )
}

export default Auth