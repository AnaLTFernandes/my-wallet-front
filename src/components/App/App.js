import GlobalStyle from './GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from '../Register/Sign-in';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>

        <Route path='sign-in' element={ <SignIn /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
