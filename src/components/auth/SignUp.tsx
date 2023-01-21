import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpText>회원가입</SignUpText>

      <SignUpEmailPwContainer>
        <SignUpEmailText>E-mail</SignUpEmailText>
        <SignUpEmailInput placeholder="이메일을 입력해주세요" />
        <SignUpPwText>Password</SignUpPwText>
        <SignUpPwInput placeholder="비밀번호를 입력해주세요" />
        <SignUpPwConfirm>Password Confirm</SignUpPwConfirm>
        <SignUpPwConfirmInput placeholder="비밀번호 한번 더 입력해주세요" />
      </SignUpEmailPwContainer>

      <SignUpBtnContainer>
        <SignUpBtn>SignUp</SignUpBtn>
      </SignUpBtnContainer>

      <SignUpOtherMethod>
        <SignUpOrLine>
          <SignUpOrText>OR</SignUpOrText>
        </SignUpOrLine>

        <SignUpGoogleGitContainer>
          <FaGoogle size="48px" />
          <FaGithub size="48px" />
        </SignUpGoogleGitContainer>
      </SignUpOtherMethod>

      <SignUpCheckContainer>
        <Link to={'/Login'}>
          <SignUpCheckSign>이미 회원이신가요?</SignUpCheckSign>
        </Link>
      </SignUpCheckContainer>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  background-color: #e9ecef;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 40px;
`;
const SignUpText = styled.text`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.h6};
`;
const SignUpEmailPwContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  margin-top: 20px;
`;
const SignUpEmailText = styled.text`
  font-size: ${(props) => props.theme.fontSize.content};
`;
const SignUpEmailInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: #d9d9d9;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
`;
const SignUpPwText = styled.text`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.content};
`;
const SignUpPwInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: #d9d9d9;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
`;
const SignUpPwConfirm = styled.text`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.content};
`;
const SignUpPwConfirmInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: #d9d9d9;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
`;
const SignUpBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
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
const SignUpOtherMethod = styled.div``;
const SignUpOrLine = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin: 5px 0;
  margin-top: 10px;
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
const SignUpOrText = styled.text`
  font-size: ${(props) => props.theme.fontSize.content};
`;
const SignUpGoogleGitContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SignUpCheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
const SignUpCheckSign = styled.text``;

export default SignUp;
