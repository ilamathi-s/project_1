import React from 'react';
import Signin from './signin';
import Signup from './signup';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    
        <Routes>
            <Route path="/" element={<Signin/>}></Route>
            <Route path="/" element={<Signup/>}></Route>
        </Routes>
       
  );
}

export default App;