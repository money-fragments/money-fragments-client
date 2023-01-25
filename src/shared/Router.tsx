import { Login, SignUp } from 'components/auth';
import { Landing } from 'components/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from 'components/layouts';
const Router = () => {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
