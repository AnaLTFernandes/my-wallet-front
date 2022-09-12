import GlobalStyle from './GlobalStyles';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserContext } from '../../contexts/';
import { SignIn, SignUp } from '../Register/';
import { AddIncome, AddExpense } from '../CreateRecord';
import Records from '../Records/Records';
import Edit from '../EditRecord/Edit';

import { Alert, Confirm } from '../Messages/';
import PrivateRoute from './PrivateRoute';
import Logout from '../Logout/Logout';


function App() {
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState({});

  if (!userData.token) {
    Logout({ setMessage });
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }} >
        
        <GlobalStyle />

        {message.type === 'alert'
          ? <Alert message={ message } setMessage={ setMessage } />
          : ''
        }
        {message.type === 'confirm'
          ? <Confirm message={ message } setMessage={ setMessage } />
          : ''
        }

        <Routes>

          <Route path='/' element={
            <SignIn setMessage={ setMessage } />
          } />

          <Route path='/sign-up' element={
            <SignUp setMessage={ setMessage } />
          } />

          <Route path='/records' element={
            <PrivateRoute>
              <Records  message={ message } setMessage={ setMessage } />
            </PrivateRoute>
          } />

          <Route path='/add-income' element={
            <PrivateRoute>
              <AddIncome setMessage={ setMessage } />
            </PrivateRoute>
          } />
          
          <Route path='/add-expense' element={
            <PrivateRoute>
              <AddExpense setMessage={ setMessage } />
            </PrivateRoute>
          } />
          
          <Route path='/record/edit/:idRecord' element={
            <PrivateRoute>
              <Edit setMessage={ setMessage } />
            </PrivateRoute>
          } />

        </Routes>

      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;