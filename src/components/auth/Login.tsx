import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginContainer>
      <LoginText>로그인</LoginText>

      <LoginEmailPwContainer>
        <LoginEmailText>E-mail</LoginEmailText>
        <LoginEmailInput placeholder="이메일을 입력해주세요" />
        <LoginPwText>Password</LoginPwText>
        <LoginPwInput placeholder="비밀번호를 입력해주세요" />
      </LoginEmailPwContainer>

      <LoginBtnContainer>
        <LoginBtn>Login</LoginBtn>
      </LoginBtnContainer>

      <LoginOtherMethod>
        <LoginOrLine>
          <LoginOrText>OR</LoginOrText>
        </LoginOrLine>

        <LoginGoogleGitContainer>
          <FaGoogle size="48px" />
          <FaGithub size="48px" />
        </LoginGoogleGitContainer>
      </LoginOtherMethod>

      <LoginCheckContainer>
        <Link to={'/SignUp'}>
          <LoginCheckSign>아직 회원이 아니신가요?</LoginCheckSign>
        </Link>
      </LoginCheckContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  background-color: #e9ecef;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 40px;
`;
const LoginText = styled.text`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.h6};
`;
const LoginEmailPwContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
`;
const LoginEmailText = styled.text`
  font-size: ${(props) => props.theme.fontSize.content};
`;
const LoginEmailInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: #d9d9d9;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
`;
const LoginPwText = styled.text`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.content};
`;
const LoginPwInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: #d9d9d9;
  border: 2px solid #d9d9d9;
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
  background-color: #d9d9d9;
  font-size: ${(props) => props.theme.fontSize.content};
  border: 2px solid #d9d9d9;
  border-radius: 15px;
  &:active {
    background-color: ${(props) => props.theme.colors.mono0};
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
const LoginOrText = styled.text`
  font-size: ${(props) => props.theme.fontSize.content};
`;
const LoginGoogleGitContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LoginCheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.colors.brandRed};
    }
  }
`;
const LoginCheckSign = styled.text``;

export default Login;
