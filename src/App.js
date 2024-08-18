import React from 'react';
import Signin from '../src/Auth/Signin/Signin';
import Signup from '../src/Auth/Signup/Signup';
import Password from '../src/Auth/Forgotpassword/Forgotpassword';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    
        <Routes>
            <Route  path="/" element={<Signin/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Forgotpassword" element={<Password/>}></Route>
        </Routes>
  );
}

export default App;