import GlobalStyle from './GlobalStyles';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';
import { SignIn, SignUp } from '../Register/';
import Records from '../Records/Records';
import { AddIncome, AddExpense } from '../CreateRecord';


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
          <Route path='/add-income' element={ <AddIncome /> } />
          <Route path='/add-expense' element={ <AddExpense /> } />

        </Routes>

      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
