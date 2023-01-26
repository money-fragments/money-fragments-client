
import styled from 'styled-components';
import landingpage from '../assets/landingpage.png'
import { H1 } from 'components/common';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from 'components/common/CustomButton';

const Landing = () => {
  const navigate = useNavigate();

  const goAuth = () => {
    navigate('/Login')
}

  return (
    <LandingPageContainer>
      <LandingPageTitle>
        <H1>
          Hello!
          <br />돈 부스러기
        </H1>
      </LandingPageTitle>
      <CustomButton onClick={goAuth}>로그인</CustomButton>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
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
`

export default Landing;