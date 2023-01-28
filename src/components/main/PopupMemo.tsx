import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Content } from 'components/common';

import { getAuth } from 'firebase/auth';
import usePostExpense from 'hooks/usePostExpense';

interface IPopupMemoProps {
  setIsShowMemo: Dispatch<SetStateAction<boolean>>;
  setIsShowDetail: Dispatch<SetStateAction<boolean>>;
  content: undefined | string;
  info: IMarkers;
}

const PopUpMemo = ({
  setIsShowMemo,
  setIsShowDetail,
  content,
  info,
}: IPopupMemoProps) => {
  const auth = getAuth();

  const handleClosePopup = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    setIsShowMemo(false);
  };

  const [expenseWhere, setExpenseWhere] = React.useState<string>(content!);
  const [expenseWhat, setExpenseWhat] = React.useState<string>('');
  const [expenseHowMuch, setExpenseHowMuch] = React.useState<number>(0);

  const { mutate } = usePostExpense();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      experience: '',
      userId: auth.currentUser.uid,
      placeInfo: info,
    };
    mutate(formData);

    setIsShowMemo(false);

    setExpenseWhere('');
    setExpenseWhat('');
    setExpenseHowMuch(0);
  };

  const handleDetailClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsShowMemo(false);
    setIsShowDetail(true);
  };

  return (
    <>
      <MemoContainer>
        <IoIosCloseCircleOutline
          className="close-btn"
          onClick={handleClosePopup}
        />

        <ContentBox
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <WhereBox>
            <ExpenseWhere>어디서 사용하셨나요?</ExpenseWhere>
            <input
              className="input-where"
              type="text"
              value={expenseWhere}
              onChange={(e) => {
                setExpenseWhere(e.target.value);
              }}
            />
          </WhereBox>
          <WhatBox>
            <ExpenseWhat>어떤 걸 구매하셨나요?</ExpenseWhat>
            <input
              className="input-what"
              type="text"
              value={expenseWhat}
              onChange={(e) => {
                setExpenseWhat(e.target.value);
              }}
              placeholder="예) 라면, 햄버거, 택시비"
            />
          </WhatBox>
          <HowMuchBox>
            <ExpenseHowMuch>얼마를 지불하셨나요?</ExpenseHowMuch>
            <input
              className="input-how-much"
              value={expenseHowMuch}
              onChange={(e) => {
                if (!isNaN(Number(e.target.value))) {
                  setExpenseHowMuch(Number(e.target.value));
                }
              }}
              placeholder="예) 10000"
            />
          </HowMuchBox>
          <BtnBox>
            <CustomBtn type="submit">
              <Content>기록하기</Content>
            </CustomBtn>
            <CustomBtn
              type="button"
              onClick={(event) => {
                handleDetailClick(event);
              }}
            >
              <Content>자세히</Content>
            </CustomBtn>
          </BtnBox>
        </ContentBox>
      </MemoContainer>
    </>
  );
};

const MemoContainer = styled.div`
  position: relative;
  margin: auto;
  width: 250px;
  height: 326px;
  background-color: ${(props) => props.theme.colors.mono30};
  border-radius: 10px;

  .close-btn {
    position: absolute;
    left: 223px;
    top: 13px;
    color: ${(props) => props.theme.colors.brand0};
    width: 17px;
    height: 17px;
  }
`;

const ContentBox = styled.form`
  position: absolute;
  margin-top: 41px;
  .input-where,
  .input-what,
  .input-how-much {
    background-color: ${(props) => props.theme.colors.mono0};
    padding-left: 8px;
    width: 188px;
    height: 35px;
    border-radius: 10px;
    border-style: none;
    ::placeholder {
      color: #eee;
    }
  }
`;
const ExpenseWhere = styled(Content)`
  display: block;
  color: ${(props) => props.theme.colors.white100};
`;
const ExpenseWhat = styled(Content)`
  display: block;
  color: ${(props) => props.theme.colors.white100};
`;
const ExpenseHowMuch = styled(Content)`
  display: block;
  color: ${(props) => props.theme.colors.white100};
`;
const WhereBox = styled.div`
  margin-left: 31px;
`;

const WhatBox = styled.div`
  margin-top: 15px;
  margin-left: 31px;
`;

const HowMuchBox = styled.div`
  margin-top: 15px;
  margin-left: 31px;
`;
const BtnBox = styled.div`
  display: inline-block;
  align-items: center;
  margin-left: 31px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CustomBtn = styled.button`
  text-align: center;
  margin-right: 28px;
  width: 80px;
  height: 35px;
  border-radius: 17px;
  border-style: none;
  background-color: ${(props) => props.theme.colors.brand0};
`;
export default PopUpMemo;
