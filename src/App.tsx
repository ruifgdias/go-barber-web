import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
