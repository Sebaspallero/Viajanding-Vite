import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
    const [airports, setAirports] = useState(null)
    const URL = 'https://apimocha.com/viajanding/'
    useEffect(()=>{
        axios.get(`${URL}/airports`)
        .then((response) =>{
            setAirports(response.data)
        } )
    },[])

  return (
    <div>
     {/*    <h1 className='title'>Probando el título -Home-</h1>
        <h2 className='subtitle'>Probando el Subtítulo</h2>
        <p className='text'>Probando el text</p>
        <p className='sm-text'>Probando el texto pequeño</p>
        {
            airports?.map(airport => {
                return(
                    <div key={airport.id}>
                        <p>{airport.airport}</p>
                        <p>{airport.code}</p>
                    </div>
                )
            })
        } */}
    </div>
    
  )
}

export default Home