
import styled from 'styled-components';
import landingpage from '../assets/landingpage.png';

import { H1 } from 'components/common';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from 'components/common/CustomButton';

const Landing = () => {
  const navigate = useNavigate();

  const goAuth = () => {

    navigate('/Login');
  };


  return (
    <LandingPageContainer>
      <LandingPageTitle>
        <H1>

          반갑습니다.
          <br />
          돈관리 어플💸
          <br /> 돈 부스러기 입니다
        </H1>
      </LandingPageTitle>
      <LandingLogin onClick={goAuth}>로그인</LandingLogin>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  background-image: linear-gradient(

      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)

    ),
    url(${landingpage});
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

const LandingPageTitle = styled.div`
  margin-top: 15%;
  margin-bottom: 3%;
  text-align: center;
`;

const LandingLogin = styled(CustomButton)`
  font-size: ${(props) => props.theme.fontSize.content};
  width: 100px;
  background-color: ${(props) => props.theme.colors.white0};
  &:active {
    border: 2px solid ${(props) => props.theme.colors.black100};
  }
`;

export default Landing;
