import GlobalStyle from './GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from '../Register/Sign-in';
import SignUp from '../Register/Sign-up';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>

        <Route path='sign-in' element={ <SignIn /> } />
        <Route path='sign-up' element={ <SignUp /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
