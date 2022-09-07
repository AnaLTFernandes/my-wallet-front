import GlobalStyle from './GlobalStyles';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';
import SignIn from '../Register/Sign-in';
import SignUp from '../Register/Sign-up';
import Records from '../Records/Records';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }} >

        <GlobalStyle />

        <Routes>

          <Route path='/' element={ <SignIn /> } />
          <Route path='/sign-up' element={ <SignUp /> } />
          <Route path='/records' element={ <Records /> } />

        </Routes>

      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
