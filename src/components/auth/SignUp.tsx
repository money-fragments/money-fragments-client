import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Content, H5 } from 'components/common';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthSocial from './AuthSocial';
import { useForm } from 'react-hook-form';

interface IAuthForm {
  email: string;
  password: string;
  confirm: string;
}

const SignUp = (): JSX.Element => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = useForm<IAuthForm>({ mode: 'onBlur' });

  const onClickSignUpHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      setError('비밀번호가 일치하지 않습니다');
      return;
    }
    if (error !== '') setError('');

    setRegistering(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('회원가입 축하합니다');
        navigate('/login');
      })
      .catch((error) => {
        if (error.code.includes('auth/weak-password')) {
          setError('Password already in use');
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
        <H5>회원가입</H5>
      </SignUpTextDiv>
      <form>
        <SignUpEmailPwContainer>
          <Content>E-mail</Content>
          <SignUpEmailInput
            {...register('email', {
              required: '이메일을 올바르게 입력해주세요.',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: '이메일을 올바르게 입력해주세요.',
              },
            })}
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="이메일을 입력해주세요"
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                onClickSignUpHandler(e);
              }
            }}
            autoFocus
          />
          <AuthWarn>{errors?.email?.message}</AuthWarn>

          <SignUpPwTextDiv>
            <Content>Password</Content>
          </SignUpPwTextDiv>

          <SignUpPwInput
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
            })}
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="비밀번호를 입력해주세요"
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                onClickSignUpHandler(e);
              }
            }}
          />
          <AuthWarn>{errors?.password?.message}</AuthWarn>

          <SignUpPwConfirm>
            <Content>Password Confirm</Content>
          </SignUpPwConfirm>
          <SignUpPwConfirmInput
            {...register('confirm', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
            })}
            autoComplete="new-password"
            name="confirm"
            type="password"
            id="confirm"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            placeholder="비밀번호를 다시 입력해주세요"
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                onClickSignUpHandler(e);
              }
            }}
          />
          <AuthWarn>{errors?.confirm?.message}</AuthWarn>
        </SignUpEmailPwContainer>
        <SignUpBtnContainer>
          <SignUpBtn
            type="submit"
            disabled={registering}
            onClick={(e) => onClickSignUpHandler(e)}
          >
            <Content>SignUp</Content>
          </SignUpBtn>
        </SignUpBtnContainer>
      </form>
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
  background-color: ${(props) => props.theme.colors.white60};
  width: 500px;
  height: 480px;
  margin: 23vh auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
const SignUpTextDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SignUpEmailPwContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  margin: 0 auto;
  margin-top: 20px;
`;
const SignUpEmailInput = styled.input`
  height: 30px;
  margin-top: 7px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 5px;
`;

const AuthWarn = styled.p`
  color: ${(props) => props.theme.colors.brandRed};
  font-size: 13px;
  font-weight: 700px;
`;

const SignUpPwTextDiv = styled.div`
  margin-top: 10px;
`;
const SignUpPwInput = styled.input`
  height: 30px;
  margin-top: 7px;
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
  margin-top: 7px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 5px;
`;
const SignUpBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const SignUpBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 90px;
  background-color: ${(props) => props.theme.colors.white0};
  border: 2px solid ${(props) => props.theme.colors.white0};
  border-radius: 15px;
  transition: 0.03s;
  &:active {
    background-color: ${(props) => props.theme.colors.black0};
  }
  &:hover {
    cursor: pointer;
    outline: ${(props) => props.theme.colors.brandRed} solid 2px;
  }
`;
const SignUpOtherMethod = styled.div``;
const SignUpOrLine = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin: 25px 25px;
  ::before {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 1);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 5px;
  }
  ::after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 10);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 5px;
  }
`;
const SignUpGoogleGitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const SignUpCheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 15px;
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
