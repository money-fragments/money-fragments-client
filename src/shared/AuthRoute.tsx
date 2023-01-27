import { ReactNode, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Content } from 'components/common';
import { customAlert } from 'utils';

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
        customAlert('허가되지 않은 접근입니다. 로그인 페이지로 이동합니다.');
        navigate('/login');
      }
    });

    return () => AuthCheck();
  }, []);

  if (loading) return <Content>loading ...</Content>;

  return <>{children}</>;
};

export default AuthRoute;
