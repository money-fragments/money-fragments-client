import { Content } from 'components/common/TextComponents';
import { CustomButton } from 'components/common/CustomButton';
import { CustomInput } from 'components/common/CustomInput';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import styled from 'styled-components';
import React from 'react';
import { getAuth } from 'firebase/auth';
import usePostExpense from 'hooks/usePostExpense';

interface IMainDetailUiProps {
  setIsDetailUiOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: undefined | string;
  info: IMarkers;
}

const MainDetailUi = ({
  setIsDetailUiOpen,
  content,
  info,
}: IMainDetailUiProps) => {
  const [expenseWhere, setExpenseWhere] = React.useState<string>(content!);
  const [expenseWhat, setExpenseWhat] = React.useState<string>('');
  const [expenseHowMuch, setExpenseHowMuch] = React.useState<number>(0);
  const [expenseExperience, setExpenseExperience] = React.useState<string>('');

  const auth = getAuth();

  const { mutate } = usePostExpense();

  const handleOnClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsDetailUiOpen(false);
    setExpenseWhere('');
    setExpenseWhat('');
    setExpenseHowMuch(0);
    setExpenseExperience('');
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (auth.currentUser === null) return;
    const formData: Expense = {
      id: crypto.randomUUID(),
      date: Date.now(),
      year: new Date().getFullYear().toString(),
      month: new Date().getMonth().toString(),
      place: expenseWhere,
      product: expenseWhat,
      price: expenseHowMuch,
      experience: expenseExperience,
      userId: auth.currentUser.uid,
      placeInfo: info,
    };
    mutate(formData);

    setIsDetailUiOpen(false);

    setExpenseWhere('');
    setExpenseWhat('');
    setExpenseHowMuch(0);
    setExpenseExperience('');
  };

  return (
    <MainDetailContainer>
      <IconCloseBtn
        onClick={(event) => {
          handleOnClose(event);
        }}
      >
        <CloseBtn size={30} />
      </IconCloseBtn>
      <WhereUseDiv>
        <WhereText>어디서 사용하셨나요?</WhereText>
        <WhereInput
          autoFocus
          value={expenseWhere}
          onChange={(e) => {
            setExpenseWhere(e.target.value);
          }}
        />
      </WhereUseDiv>
      <WhatUseDiv>
        <WhatText>어떤 것을 구매하셨나요?</WhatText>
        <WhatInput
          value={expenseWhat}
          onChange={(e) => {
            setExpenseWhat(e.target.value);
          }}
          placeholder="예) 라면, 햄버거, 피자"
        />
      </WhatUseDiv>
      <PayUseDiv>
        <PayText>얼마나 지불하셨나요?</PayText>
        <PayInput
          value={expenseHowMuch}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) {
              setExpenseHowMuch(Number(e.target.value));
            }
          }}
        />
      </PayUseDiv>
      <ExperienceDiv>
        <ExperienceText>어떤 경험을 하셨나요?</ExperienceText>
        <ExperienceArea
          value={expenseExperience}
          onChange={(e) => {
            setExpenseExperience(e.target.value);
          }}
          placeholder="예) 오늘 쇼핑은 너무 즐거웠다!"
        />
      </ExperienceDiv>
      <RecordBtn
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        기록하기
      </RecordBtn>
    </MainDetailContainer>
  );
};

const MainDetailContainer = styled.div`
  background-color: ${(props) => props.theme.colors.mono30};
  float: right;
  width: 410px;
  height: 750px;
  z-index: 3;
  border-radius: 10px;
`;

const IconCloseBtn = styled.button`
  border-radius: 20px;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.black30};
  border: 2px solid ${(props) => props.theme.colors.black30};
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

  &::placeholder {
    color: ${(props) => props.theme.colors.mono30};
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
  display: flex;
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
  resize: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.mono30};
  }
`;

const RecordBtn = styled(CustomButton)`
  width: 370px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.brand0};
  &:active {
    background-color: ${(props) => props.theme.colors.brand50};
    color: ${(props) => props.theme.colors.white30};
  }
`;

export default MainDetailUi;
