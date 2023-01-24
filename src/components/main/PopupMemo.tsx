import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Content } from 'components/common';

interface IPopupMemoProps {
  setIsPopupMemoOpen: Dispatch<SetStateAction<boolean>>;
}
// 지도에 마커가 추가되며 해당 팝업이 표시됨
const PopUpMemo = ({ setIsPopupMemoOpen }: IPopupMemoProps) => {
  const handleClosePopup = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    setIsPopupMemoOpen(false);
  };
  return (
    <>
      <GlobalStyle />
      <MemoContainer>
        <IoIosCloseCircleOutline
          className="close-btn"
          onClick={handleClosePopup}
        />

        <ContentBox>
          {/* 어디서 */}
          <WhereBox>
            <Content className="expense-where">어디서 사용하셨나요?</Content>
            <input className="input-where" type="text" />
          </WhereBox>
          {/* 무엇을 */}
          <WhatBox>
            <Content className="expense-what">어떤 걸 구매하셨나요?</Content>
            <input className="input-what" type="text" />
          </WhatBox>
          {/* 얼마를 */}
          <HowMuchBox>
            <Content className="expense-how">얼마를 지불하셨나요?</Content>
            <input className="input-how" type="text" />
          </HowMuchBox>
          <BtnBox>
            <CustomBtn>
              <Content>기록하기</Content>
            </CustomBtn>
            <CustomBtn>
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

const ContentBox = styled.div`
  position: absolute;
  margin-top: 41px;
  .expense-where,
  .expense-what,
  .expense-how {
    display: block;
    /* mono30W로 변경 필요 */
    color: ${(props) => props.theme.colors.white100};
  }
  .input-where,
  .input-what,
  .input-how {
    background-color: ${(props) => props.theme.colors.mono0};
    width: 188px;
    height: 35px;
    border-radius: 10px;
    border-style: none;
  }
`;
const WhereBox = styled.div`
  /* margin-top: 41px; */
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
