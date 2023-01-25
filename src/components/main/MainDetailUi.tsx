import { Content } from 'components/common/TextComponents';
import { CustomButton } from 'components/common/CustomButton';
import { CustomInput } from 'components/common/CustomInput';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import styled from 'styled-components';

const MainDetailUi = () => {
  return (
    <MainDetailContainer>
      <IconCloseBtn>
        <IoIosCloseCircleOutline className="closeBtn" size={30} />
      </IconCloseBtn>
      <WhereUseDiv>
        <Content className="where">어디서 사용하셨나요?</Content>
        <CustomInput className="whereInput" autoFocus />
      </WhereUseDiv>
      <WhatUseDiv>
        <Content className="what">어떤 것을 구매하셨나요?</Content>
        <CustomInput className="whatInput" />
      </WhatUseDiv>
      <PayUseDiv>
        <Content className="pay">얼마나 지불하셨나요?</Content>
        <CustomInput className="payInput" />
      </PayUseDiv>
      <ExperienceDiv>
        <Content className="experience">어떤 경험을 하셨나요?</Content>
        <ExperienceArea />
      </ExperienceDiv>

      <CustomButton className="recordBtn">기록하기</CustomButton>
    </MainDetailContainer>
  );
};

const MainDetailContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black60};
  float: right;
  width: 410px;
  height: 100vh;
  .recordBtn {
    width: 370px;
    height: 30px;
    display: flex;
    margin: 0 auto;
    padding-left: 37%;
    font-weight: 500;
    background-color: ${(props) => props.theme.colors.brand0};
    &:active {
      background-color: ${(props) => props.theme.colors.brand50};
    }
  }
`;
const IconCloseBtn = styled.button`
  border-radius: 20px;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.black60};
  border: 2px solid ${(props) => props.theme.colors.black60};

  .closeBtn {
    color: ${(props) => props.theme.colors.brand0};
    &:active {
      color: ${(props) => props.theme.colors.brand50};
    }
  }
`;
const WhereUseDiv = styled.div`
  width: 370px;
  height: 70px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .where {
    color: ${(props) => props.theme.colors.white60};
  }
  .whereInput {
    background-color: ${(props) => props.theme.colors.black0};
    width: 350px;
    height: 35px;
  }
`;
const WhatUseDiv = styled.div`
  width: 370px;
  height: 70px;
  margin: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .what {
    color: ${(props) => props.theme.colors.white60};
  }
  .whatInput {
    background-color: ${(props) => props.theme.colors.black0};
    width: 350px;
    height: 35px;
  }
`;
const PayUseDiv = styled.div`
  width: 370px;
  height: 70px;
  margin: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .pay {
    color: ${(props) => props.theme.colors.white60};
  }
  .payInput {
    background-color: ${(props) => props.theme.colors.black0};
    width: 350px;
    height: 35px;
  }
`;
const ExperienceDiv = styled.div`
  width: 370px;
  height: 360px;
  margin: auto;
  margin-top: 15px;
  flex-direction: column;
  .experience {
    color: ${(props) => props.theme.colors.white60};
  }
`;
const ExperienceArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.black0};
  width: 348px;
  height: 260px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
`;

export default MainDetailUi;
