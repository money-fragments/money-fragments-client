import React from 'react';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Content } from 'components/common';

// 지도에 마커가 추가되며 해당 팝업이 표시됨
const PopUpMemo = () => {
  return (
    <MemoContainer>
      {/* 닫기 버튼 */}

      <IoIosCloseCircleOutline
        className="close-btn"
        onClick={() => console.log('팝업창 닫힘.')}
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
          <button>기록하기</button>
          <button>자세히</button>
        </BtnBox>
      </ContentBox>
    </MemoContainer>
  );
};

const MemoContainer = styled.div`
  margin: auto;
  width: 250px;
  height: 326px;
  background-color: ${(props) => props.theme.colors.mono30};
  border-radius: 10px;

  .close-btn {
    position: relative;
    left: 223px;
    top: 13px;
    color: ${(props) => props.theme.colors.brand0};
    width: 17px;
    height: 17px;
  }
`;

const ContentBox = styled.div`
  .expense-where,
  .expense-what,
  .expense-how {
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
  }
`;
const WhereBox = styled.div`
  margin-top: 41px;
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
  flex-direction: row;
  justify-content: space-between;
`;
export default PopUpMemo;
