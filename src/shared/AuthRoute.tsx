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
        alert('등록된 사용자가 아닙니다. 로그인부터 해주세요');
        navigate('/login');
      }
    });

    return () => AuthCheck();
  }, []);

  if (loading) return <Content>loading ...</Content>;

  return <>{children}</>;
};

export default AuthRoute;
