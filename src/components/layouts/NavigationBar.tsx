import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { CustomButton } from 'components/common/CustomButton';
import { H6 } from 'components/common';
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'

const NavigationBar = () => {


    const navigate = useNavigate();

    // 랜딩페이지 이동
    const goLanding = () => {
        navigate('/')
    }

    // 로그인페이지 이동
    const goAuth = () => {
        navigate('/Login')
    }
    
    
  return (
    <NavigationBarContainer>
      <NavigationBarLogoMenuContainer>
        <NavigationBarLogo
          src={require('../assets/logo.png')}
          onClick={goLanding}
        />
        <NavigationBarMenuContainer>
          <NavigationBarMenuButton>Nav1</NavigationBarMenuButton>
          <NavigationBarMenuButton>Nav2</NavigationBarMenuButton>
          <NavigationBarMenuButton>Nav3</NavigationBarMenuButton>
          <NavigationBarMenuButton>Nav4</NavigationBarMenuButton>
        </NavigationBarMenuContainer>
      </NavigationBarLogoMenuContainer>
      <CustomButton
        style={{ marginRight: '20px' }}
        width="150px"
        height="40px"
        backgroundColor="brand0"
        fontSize="h6"
        onClick={goAuth}
      >
        로그인/회원가입
      </CustomButton>
    </NavigationBarContainer>
  );
}

export default NavigationBar


const NavigationBarContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white0};
`

const NavigationBarLogoMenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavigationBarLogo = styled.img`
   height: 100px;
   cursor: pointer;
`

const NavigationBarMenuContainer = styled.div`
    display: flex;
    margin-left: 50px;
`

const NavigationBarMenuButton = styled.div`
    margin-left: 30px;
    font-size: ${({theme}) => theme.fontSize.h6};
    cursor: pointer;
`

const NavigationBarAuth = styled.button`
    margin-right: 40px;
    cursor: pointer;
`
const NavigationBarAuthButton = styled.div`
    margin-right: 10px;
`

