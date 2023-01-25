import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


function NavigationBar() {


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
        <NavigationBarLogo onClick={goLanding}>
            로고
        </NavigationBarLogo>
        <NavigationBarMenuContainer>
            <NavigationBarMenuButton>
                Nav1
            </NavigationBarMenuButton>
            <NavigationBarMenuButton>
                Nav2
            </NavigationBarMenuButton>
            <NavigationBarMenuButton>
                Nav3
            </NavigationBarMenuButton>
            <NavigationBarMenuButton>
                Nav4
            </NavigationBarMenuButton>
        </NavigationBarMenuContainer>
    </NavigationBarLogoMenuContainer>
    <NavigationBarAuth onClick={goAuth}>    
        로그인/회원가입
    </NavigationBarAuth>
</NavigationBarContainer>
  )
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

const NavigationBarLogo = styled.div`
    margin-left: 20px;
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

