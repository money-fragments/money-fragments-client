import Layout from 'components/layouts/Layout';
import { Login, SignUp } from 'components/auth';
import AuthForgot from 'components/auth/AuthForgot';
import { Landing } from 'components/landing';
import Main from 'components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';

const Router = () =>{
  return(
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Landing />} />
        {/* 네비게이션바 표시 */}
        <Route element={<Layout />}>
        
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
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;