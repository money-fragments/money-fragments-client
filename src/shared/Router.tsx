import { Login, SignUp } from 'components/auth';
import AuthForgot from 'components/auth/AuthForgot';
import { Landing } from 'components/landing';
import Main from 'components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <AuthRoute>
              <Main />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgot" element={<AuthForgot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
