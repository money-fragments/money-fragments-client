import { Content } from 'components/common/TextComponents';
import { CustomButton } from 'components/common/CustomButton';
import { CustomInput } from 'components/common/CustomInput';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import styled from 'styled-components';

const MainDetailUi = () => {
  return (
    <MainDetailContainer>
      <IconCloseBtn>
        <CloseBtn size={30} />
      </IconCloseBtn>
      <WhereUseDiv>
        <WhereText>어디서 사용하셨나요?</WhereText>
        <WhereInput autoFocus />
      </WhereUseDiv>
      <WhatUseDiv>
        <WhatText>어떤 것을 구매하셨나요?</WhatText>
        <WhatInput />
      </WhatUseDiv>
      <PayUseDiv>
        <PayText>얼마나 지불하셨나요?</PayText>
        <PayInput />
      </PayUseDiv>
      <ExperienceDiv>
        <ExperienceText>어떤 경험을 하셨나요?</ExperienceText>
        <ExperienceArea />
      </ExperienceDiv>

      <RecordBtn>기록하기</RecordBtn>
    </MainDetailContainer>
  );
};

const MainDetailContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black60};
  float: right;
  width: 410px;
  height: 100vh;
`;

const IconCloseBtn = styled.button`
  border-radius: 20px;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.black60};
  border: 2px solid ${(props) => props.theme.colors.black60};
`;
const CloseBtn = styled(IoIosCloseCircleOutline)`
  color: ${(props) => props.theme.colors.brand0};
  &:active {
    color: ${(props) => props.theme.colors.brand50};
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
`;
const WhereText = styled(Content)`
  color: ${(props) => props.theme.colors.white60};
`;
const WhereInput = styled(CustomInput)`
  background-color: ${(props) => props.theme.colors.black0};
  width: 350px;
  height: 35px;
`;

const WhatUseDiv = styled.div`
  width: 370px;
  height: 70px;
  margin: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const WhatText = styled(Content)`
  color: ${(props) => props.theme.colors.white60};
`;
const WhatInput = styled(CustomInput)`
  background-color: ${(props) => props.theme.colors.black0};
  width: 350px;
  height: 35px;
`;

const PayUseDiv = styled.div`
  width: 370px;
  height: 70px;
  margin: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const PayText = styled(Content)`
  color: ${(props) => props.theme.colors.white60};
`;
const PayInput = styled(CustomInput)`
  background-color: ${(props) => props.theme.colors.black0};
  width: 350px;
  height: 35px;
`;

const ExperienceDiv = styled.div`
  width: 370px;
  height: 360px;
  margin: auto;
  margin-top: 15px;
  flex-direction: column;
`;
const ExperienceText = styled(Content)`
  color: ${(props) => props.theme.colors.white60};
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

const RecordBtn = styled(CustomButton)`
  width: 370px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.brand0};
  &:active {
    background-color: ${(props) => props.theme.colors.brand50};
  }
`;

export default MainDetailUi;
