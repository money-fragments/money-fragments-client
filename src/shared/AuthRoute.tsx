import { ReactNode, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Content } from 'components/common';

interface AuthRouteProps {
  children: ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps): JSX.Element => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        alert('로그아웃 되셨습니다. 접속 시 로그인을 해주세요');
        navigate('/login');
      }
    });

    return () => AuthCheck();
  }, []);

  if (loading) return <Content>loading ...</Content>;

  return <>{children}</>;
};

export default AuthRoute;
