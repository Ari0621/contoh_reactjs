import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from '../../Components/Nav'
import Form from '../../views/tes/Form'
import Valid from '../../views/tes/Valid'
import Ills from '../../assets/Ceritfication Illustration.svg'


export default function App() {
  return (
    <Router>
    <section className='flex flex-col h-screen'>

      {/* Navbar */}
      <Nav />

      {/* Mainpage */}
      <div className='md:flex md:px-20 item-center px-5 py-5 h-full gap-14'>

        {/* Image */}
        <img src={Ills} className='hidden md:block md:w-2/5 md:my-5 my-3' />

        {/* Form & Data Certification */}
        <div className='flex w-full md:w-3/5 h-full'>
          <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/valid' element={<Valid />}/>
          </Routes>
        </div>
      </div>
    </section>
    </Router>
  ) 
}