import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Content, H6 } from 'components/common';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthSocial from './AuthSocial';

const SignUp = (): JSX.Element => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const onClickSignUpHandler = async () => {
    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      setError('비밀번호가 일치하지 않습니다');
      return;
    }
    if (error !== '') setError('');

    setRegistering(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert('회원가입 축하합니다');
        navigate('/login');
      })
      .catch((error) => {
        if (error.code.includes('auth/weak-password')) {
          setError('Password already in use');
          alert('6글자 이상 비밀번호를 작성해주세요');
        } else if (error.code.includes('auth/email-already')) {
          setError('email-already');
          alert('이메일이 이미 존재합니다');
        } else {
          setError('Unable to register.  Please try again later.');
          alert('등록할 수 없습니다. 다시 시도해주세요');
        }
        setRegistering(false);
      });
  };

  return (
    <SignUpContainer>
      <SignUpTextDiv>
        <H6>회원가입</H6>
      </SignUpTextDiv>

      <SignUpEmailPwContainer>
        <Content>E-mail</Content>
        <SignUpEmailInput
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="이메일을 입력해주세요"
        />
        <SignUpPwTextDiv>
          <Content>Password</Content>
        </SignUpPwTextDiv>
        <SignUpPwInput
          name="password"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
        <SignUpPwConfirm>
          <Content>Password Confirm</Content>
        </SignUpPwConfirm>
        <SignUpPwConfirmInput
          autoComplete="new-password"
          name="confirm"
          type="password"
          id="confirm"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
          placeholder="비밀번호를 다시 입력해주세요"
        />
      </SignUpEmailPwContainer>

      <SignUpBtnContainer>
        <SignUpBtn
          disabled={registering}
          onClick={() => onClickSignUpHandler()}
        >
          <Content>SignUp</Content>
        </SignUpBtn>
      </SignUpBtnContainer>

      <SignUpOtherMethod>
        <SignUpOrLine>
          <Content>OR</Content>
        </SignUpOrLine>

        <SignUpGoogleGitContainer>
          <AuthSocial />
        </SignUpGoogleGitContainer>
      </SignUpOtherMethod>

      <SignUpCheckContainer>
        <Link to={'/login'}>
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
  margin-top: 130px;
  padding: 40px;
`;
const SignUpTextDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SignUpEmailPwContainer = styled.form`
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
const SignUpBtn = styled.button`
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
