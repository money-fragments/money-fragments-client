import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Content, H6 } from 'components/common';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import logging from './logging';
import AuthSocial from './AuthSocial';

const Login = (): JSX.Element => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const onClickLoginHandler = async () => {
    if (error !== '') setError('');

    setAuthenticating(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        logging.info(result);
        navigate('/main');
      })
      .catch((error) => {
        logging.error(error);
        alert('로그인 실패, 다시 입력해주세요');
        setAuthenticating(false);
        setError('Failed Login');
      });
  };

  return (
    <LoginContainer>
      <LoginTextDiv>
        <H6>로그인</H6>
      </LoginTextDiv>

      <LoginEmailPwContainer>
        <Content>E-mail</Content>
        <LoginEmailInput
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
        />
        <LoginPwTextDiv>
          <Content>Password</Content>
        </LoginPwTextDiv>
        <LoginPwInput
          name="password"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        />
      </LoginEmailPwContainer>

      <LoginBtnContainer>
        <LoginBtn
          disabled={authenticating}
          onClick={() => onClickLoginHandler()}
        >
          <Content>Login</Content>
        </LoginBtn>
      </LoginBtnContainer>

      <LoginOtherMethod>
        <LoginOrLine>
          <Content>OR</Content>
        </LoginOrLine>

        <LoginGoogleGitContainer>
          <AuthSocial />
        </LoginGoogleGitContainer>
      </LoginOtherMethod>

      <LoginCheckContainer>
        <Content>Don't have an account?</Content>
        <Link to={'/signUp'}>
          <LoginCheckSignDiv>Register here</LoginCheckSignDiv>
        </Link>
      </LoginCheckContainer>

      <PwForgotContainer>
        <Link to={'/forgot'}>Forgot your Password?</Link>
      </PwForgotContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white60};
  width: 500px;
  height: 400px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 40px;
`;
const LoginTextDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const LoginEmailPwContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
`;
const LoginEmailInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 5px;
`;
const LoginPwTextDiv = styled.div`
  margin-top: 10px;
`;
const LoginPwInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 5px;
`;
const LoginBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 80px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 15px;
  &:active {
    background-color: ${(props) => props.theme.colors.black0};
  }
`;
const LoginOtherMethod = styled.div``;
const LoginOrLine = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin: 5px 0;
  margin-top: 25px;
  ::before {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 1);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
  ::after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 10);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
`;
const LoginGoogleGitContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LoginCheckContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  a {
    display: flex;
    align-items: center;
    padding: 5px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.colors.brandRed};
    }
  }
`;
const PwForgotContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 10px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.colors.brandRed};
    }
  }
`;
const LoginCheckSignDiv = styled.div``;

export default Login;
