import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Content, H6 } from 'components/common';

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpTextDiv>
        <H6>회원가입</H6>
      </SignUpTextDiv>

      <SignUpEmailPwContainer>
        <Content>E-mail</Content>
        <SignUpEmailInput placeholder="이메일을 입력해주세요" />
        <SignUpPwTextDiv>
          <Content>Password</Content>
        </SignUpPwTextDiv>
        <SignUpPwInput placeholder="비밀번호를 입력해주세요" />
        <SignUpPwConfirm>
          <Content>Password Confirm</Content>
        </SignUpPwConfirm>
        <SignUpPwConfirmInput placeholder="비밀번호 한번 더 입력해주세요" />
      </SignUpEmailPwContainer>

      <SignUpBtnContainer>
        <SignUpBtnDiv>
          <Content>SignUp</Content>
        </SignUpBtnDiv>
      </SignUpBtnContainer>

      <SignUpOtherMethod>
        <SignUpOrLine>
          <Content>OR</Content>
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
const SignUpTextDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SignUpEmailPwContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  margin-top: 20px;
`;
const SignUpEmailInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 5px;
`;
const SignUpPwTextDiv = styled.div`
  margin-top: 10px;
`;
const SignUpPwInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 5px;
`;
const SignUpPwConfirm = styled.div`
  margin-top: 10px;
`;
const SignUpPwConfirmInput = styled.input`
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 5px;
`;
const SignUpBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpBtnDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 30px;
  width: 80px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 15px;
  &:active {
    background-color: ${(props) => props.theme.colors.black0};
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
const SignUpCheckSign = styled.div``;

export default SignUp;
