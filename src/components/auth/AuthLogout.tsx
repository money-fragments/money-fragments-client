import { Content, H6 } from 'components/common';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AuthLogout = (): JSX.Element => {
  const navigate = useNavigate();
  const Logout = async () => {
    await signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => logging.error(error));
  };

  return (
    <LogoutContainer>
      <H6>
        돈부스라기
        <br />
        로그아웃 하실건가요?
      </H6>

      <LogoutBtnContainer>
        <LogoutBtnLogout onClick={() => Logout()}>Logout</LogoutBtnLogout>
        <LogoutBtnCancel onClick={() => navigate('/main')}>
          Cancel
        </LogoutBtnCancel>
      </LogoutBtnContainer>
    </LogoutContainer>
  );
};

const LogoutContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white60};
  width: 350px;
  height: 100px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const LogoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const LogoutBtnLogout = styled.button`
  height: 30px;
  width: 100px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white0};
  color: ${(props) => props.theme.colors.brandRed};
  &:hover {
    border: 3px solid ${(props) => props.theme.colors.brandRed};
  }
`;
const LogoutBtnCancel = styled.button`
  margin-left: 40px;
  height: 30px;
  width: 100px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white0};
  &:hover {
    border: 3px solid ${(props) => props.theme.colors.brandRed};
  }
`;

export default AuthLogout;
