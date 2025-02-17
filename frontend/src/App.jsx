import { useState, useEffect } from 'react';
import axios from 'axios'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:8000/api/hello-world')
    .then(response=>{
      setMessage(response.data.message)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])

  return(
    <div>
      <h1>Hello World From React ⚛️</h1>
      <p>{message} From Django ⚒️</p>
    </div>
  )
}

export default App
