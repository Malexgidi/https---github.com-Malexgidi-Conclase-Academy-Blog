import { Route, Routes } from 'react-router-dom';
import Login from '../src/Components/Login'
import Signup from '../src/Components/Signup'
// import Content from '../src/Components/Content'
import './App.css';



 



function App() {
  return ( 
  <div>
    <Routes >
        <Route path='/Signup' element={ <Signup/> } />      
       <Route path='/login' element={  <Login/>
          
          } />   
       {/* <Content/> */}
       
       </Routes>
    
  </div>
 );

}

export default App;
