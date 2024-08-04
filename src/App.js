import React from 'react';
import Signin from './signin';
import Signup from './signup';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    
       <BrowserRouter>
        <Routes>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        </BrowserRouter>

  );
}

export default App;