
import { useEffect, useState } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [singleBottle, setSingleBottle] = useState([])
  const [bottles, setBottles] = useState([])
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
  const handleLoadData = bottle => {
    setSingleBottle(prevBottles => [...prevBottles, bottle]);

}
  return (
    <div className='container mx-auto bg-base-200 rounded-lg'>
      <Navbar singleBottle={singleBottle}></Navbar>
      <Bottles handleLoadData={handleLoadData} bottles={bottles}></Bottles>
      <Footer></Footer>
    </div>
  )
}

export default App
