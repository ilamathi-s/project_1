import React from 'react';
import Signin from './signin'
import Signup from './signup';
import Password from './password';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    
        <Routes>
            <Route  path="/" element={<Signin/>}></Route>
            <Route path="*" element={<Signup/>}></Route>
            <Route path="*" element={<Password/>}></Route>
        </Routes>
  );
}

export default App;