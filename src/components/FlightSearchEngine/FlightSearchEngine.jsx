import axios from 'axios'
import {useState, useEffect} from 'react'
import './styles.css'

const FlightSearchEngine = () => {
     /* const [airports, setAirports] = useState(null)
    const URL = 'https://apimocha.com/viajanding/'
    useEffect(()=>{
        axios.get(`${URL}/airports`)
        .then((response) =>{
            setAirports(response.data)
        } )
    },[]) */
    let x = new Date().toISOString().slice(0, 10)
    const [date, setDate] = useState(x)

  return (
    <div className='search-box'>
       <label className='search-select-box sm-text' htmlFor='from'>
            FROM
            <select id='from'  className='search-input subtitle decorated' required >
                <option className='option text' value="value1">Buenos Aires (AEP)</option>
                <option className='option text' value="value2" defaultValue>Córdoba</option>
                <option className='option text' value="value3">Bariloche</option>
            </select>
       </label>
       <label className='search-select-box sm-text' htmlFor='to'>
            TO
            <select id='to'  className='search-input subtitle' required >
                <option className='option text' value="value1">Buenos Aires (AEP)</option>
                <option className='option text' value="value2" defaultValue>Córdoba</option>
                <option className='option text' value="value3">Bariloche</option>
            </select>
       </label>
       <div className='search-select-box'>
            <label htmlFor='departure'>Departure</label>
            <input type='date' value={x} id='departure' onChange={(e) => setDate(e.target.value)}/>
            <p>{date}</p>
       </div>
    </div>
  )
}

export default FlightSearchEngine