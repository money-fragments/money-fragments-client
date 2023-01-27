import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from 'components/common/CustomButton';
import { getAuth } from 'firebase/auth';
import { customConfirm } from 'utils';

const NavigationBar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogoutClick = () => {
    customConfirm('로그아웃 하시겠습니까?', '로그아웃하기', '로그아웃', () => {
      navigate('/');
      auth.signOut().catch(() => alert('error'));
    });
  };

  return (
    <NavigationBarContainer>
      <NavigationBarLogoMenuContainer>
        <NavigationBarLogo
          src={require('../assets/logo.png')}
          onClick={() => {
            navigate('/main');
          }}
        />
        <NavigationBarMenuContainer>
          <NavigationBarMenuButton
            onClick={() => {
              navigate('/main');
            }}
          >
            소비지도
          </NavigationBarMenuButton>
          <NavigationBarMenuButton
            onClick={() => {
              navigate('/my-page');
            }}
          >
            소비 발자국
          </NavigationBarMenuButton>
        </NavigationBarMenuContainer>
      </NavigationBarLogoMenuContainer>
      {auth.currentUser && (
        <NavigationBtn
          width="100px"
          height="40px"
          fontSize="h6"
          backgroundColor="brand0"
          onClick={() => handleLogoutClick()}
        >
          로그아웃
        </NavigationBtn>
      )}
    </NavigationBarContainer>
  );
};

const NavigationBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white100};
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

const NavigationBtn = styled(CustomButton)`
  margin-right: 30px;
`;
export default NavigationBar;
