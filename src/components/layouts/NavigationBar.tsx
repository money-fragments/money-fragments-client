import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from 'components/common/CustomButton';

const NavigationBar = () => {
  const navigate = useNavigate();

  // 랜딩페이지 이동
  const goMain = () => {
    navigate('/main');
  };

  // 로그인페이지 이동
  const goAuth = () => {
    navigate('/Login');
  };

  return (
    <NavigationBarContainer>
      <NavigationBarLogoMenuContainer>
        <NavigationBarLogo
          src={require('../assets/logo.png')}
          onClick={goMain}
        />
        <NavigationBarMenuContainer>
          <NavigationBarMenuButton>Nav1</NavigationBarMenuButton>
          <NavigationBarMenuButton>Nav2</NavigationBarMenuButton>
          <NavigationBarMenuButton>Nav3</NavigationBarMenuButton>
          <NavigationBarMenuButton>Nav4</NavigationBarMenuButton>
        </NavigationBarMenuContainer>
      </NavigationBarLogoMenuContainer>
      <CustomButton className="NavigationBtn" onClick={goAuth}>
        로그인/회원가입
      </CustomButton>
    </NavigationBarContainer>
  );
};

const NavigationBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white0};
  .NavigationBtn {
    font-size: ${(props) => props.theme.fontSize.content};
    background-color: ${(props) => props.theme.colors.brand0};
    width: 150px;
    height: 40px;
    margin-right: 20px;
    font-weight: 500;
  }
`;

const NavigationBarLogoMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationBarLogo = styled.img`
  height: 100px;
  cursor: pointer;
`;

const NavigationBarMenuContainer = styled.div`
  display: flex;
  margin-left: 50px;
`;

const NavigationBarMenuButton = styled.div`
  margin-left: 30px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  cursor: pointer;
`;

export default NavigationBar;
