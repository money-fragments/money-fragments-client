import styled from 'styled-components';
import landingPage from '../assets/landingpage.png';

import { H1, H3 } from 'components/common';
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
        <H1> 안녕하세요!👋</H1>
        <H3>소비의 자취를 남기고 싶으신가요?</H3>
        <H3>돈부스러기와 함께 소비발자국을 남겨보세요!</H3>
        <LandingLogin
          onClick={goAuth}
          fontSize="h5"
          width="120px"
          height="40px"
          backgroundColor="brand100"
          color="white100"
        >
          함께하기
        </LandingLogin>
      </LandingPageTitle>
      <LandingBackground />
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const LandingBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${landingPage});
  background-size: cover;
  opacity: 0.3;
`;

const LandingPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3%;
  text-align: center;
  z-index: 2;
`;

const LandingLogin = styled(CustomButton)``;

export default Landing;
