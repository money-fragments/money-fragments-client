import Layout from 'components/layouts/Layout';
import { Login, SignUp } from 'components/auth';
import { Landing } from 'components/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () =>{
  return(
    <BrowserRouter>
      <Routes>
        {/* 네비게이션바 표시 */}
        <Route element={<Layout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
        {/* 네비게이션바 미표시 */}
        <Route path="/" element={<Landing />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Router;