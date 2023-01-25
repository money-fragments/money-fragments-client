import { Content } from 'components/common';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import logging from './logging';

const AuthForgot = (): JSX.Element => {
  const [sending, setSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const auth = getAuth();

  const resetPasswordRequest = async () => {
    if (error !== '') setError('');

    setSending(true);
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        logging.info('Email sent');
        alert('Password reset email sent!');
        setSent(true);
        setSending(false);
      })
      .catch((error) => {
        logging.error(error);
        alert('Failed email sent!');
        setError(error.message);
        setSending(false);
      });
  };

  return (
    <ForgotPwContainer>
      <Content>Sent Password reset</Content>
      {sent ? (
        <Content>이미 당신의 이메일로 보냈습니다</Content>
      ) : (
        <>
          <Content>당신의 이메일을 입력해주세요</Content>
          <ResetPwForm>
            <ResetPwInput
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </ResetPwForm>
          <ResetPwBtn disabled={sending} onClick={() => resetPasswordRequest()}>
            Send Email
          </ResetPwBtn>
        </>
      )}
    </ForgotPwContainer>
  );
};

const ForgotPwContainer = styled.div``;
const ResetPwForm = styled.form``;
const ResetPwInput = styled.input``;
const ResetPwBtn = styled.button``;

export default AuthForgot;
