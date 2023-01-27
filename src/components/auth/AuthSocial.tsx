import { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../firebase';

const AuthSocial = (): JSX.Element => {
  const [social, setSocial] = useState<boolean>(false);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setSocial(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        navigate('/main');
      })
      .catch((error) => {
        setSocial(false);
      });
  };

  const signInWithGithub = async () => {
    setSocial(true);

    signInWithPopup(auth, new GithubAuthProvider())
      .then((response) => {
        navigate('/main');
      })
      .catch((error) => {
        setSocial(false);
      });
  };

  return (
    <>
      <GoogleBtn
        type="button"
        onClick={() => signInWithGoogle()}
        disabled={social}
      >
        <FaGoogle size="48px" />
      </GoogleBtn>
      <GithubBtn
        type="button"
        onClick={() => signInWithGithub()}
        disabled={social}
      >
        <FaGithub size="48px" />
      </GithubBtn>
    </>
  );
};
const GoogleBtn = styled.button`
  background-color: ${(props) => props.theme.colors.white60};

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white60};
  &:active {
    background-color: ${(props) => props.theme.colors.white0};
  }
  &:hover {
    cursor: pointer;
  }
`;
const GithubBtn = styled.button`
  background-color: ${(props) => props.theme.colors.white60};

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white60};
  &:active {
    background-color: ${(props) => props.theme.colors.white0};
  }
  &:hover {
    cursor: pointer;
  }
`;

export default AuthSocial;
