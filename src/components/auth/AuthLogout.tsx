import { Content } from 'components/common';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logging from './logging';

const AuthLogout = (): JSX.Element => {
  const navigate = useNavigate();
  const Logout = async () => {
    await signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => logging.error(error));
  };

  return (
    <LogoutContainer>
      <Content>정말 로그아웃 하실건가요?</Content>
      <LogoutBtnContainer>
        <LogoutBtnCancel onClick={() => navigate('/main')}>
          Cancel
        </LogoutBtnCancel>
        <LogoutBtnLogout onClick={() => Logout()}>Logout</LogoutBtnLogout>
      </LogoutBtnContainer>
    </LogoutContainer>
  );
};

const LogoutContainer = styled.div``;
const LogoutBtnContainer = styled.div``;
const LogoutBtnCancel = styled.button``;
const LogoutBtnLogout = styled.button``;

export default AuthLogout;
