
import './App.css'
import Bottles from './Components/Bottles/Bottles'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className='container mx-auto bg-base-200 rounded-lg'>
      <Navbar></Navbar>
      <Bottles></Bottles>
      <Footer></Footer>
    </div>
  )
}

export default App
