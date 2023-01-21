import React from 'react';
import styled from 'styled-components';

const DetailExpenseItem = () => {
  return (
    <DetailMonthlyExpenseTableBody>
      <span>21. 08. 01.</span>
      <span>카페</span>
      <span>아메리카노</span>
      <span>₩ 3,000</span>
      <span>
        오늘 아침에 카페에서 아메리카노를 마시고 왔다. 아메리카노는 맛있었다.
        아메리카노는 맛있었다. 아메리카노는 맛있었다. 아메리카노는 맛있었다.
        아메리카노는 맛있었다. 아메리카노는
      </span>
      <div>
        <button>지도에서 보기</button>
        <button>e</button>
        <button>d</button>
      </div>
    </DetailMonthlyExpenseTableBody>
  );
};

const DetailMonthlyExpenseTableBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.content};
  line-height: ${({ theme }) => theme.lineHeight.content};

  span {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:nth-child(5) {
    width: 450px;
    max-height: 18px;
  }

  div {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
`;

export default DetailExpenseItem;
