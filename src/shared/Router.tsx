import Layout from 'components/layouts/Layout';
import { Login, SignUp } from 'components/auth';
import { Landing } from 'components/landing';
import Main from 'components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () =>{
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />
                <Route element={<Layout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Main" element={<Main />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default Router;