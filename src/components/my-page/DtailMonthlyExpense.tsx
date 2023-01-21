import { H4 } from 'components/common';
import styled from 'styled-components';
import DetailExpenseItem from './DetailExpenseItem';

const DetailMonthlyExpense = () => {
  return (
    <>
      <H4>월별 상세 지출 내역</H4>
      <DetailMonthlyExpenseContainer>
        <DetailMonthlyExpenseTable>
          <DetailMonthlyExpenseTableHeader>
            <span>언제</span>
            <span>어디서</span>
            <span>무엇을</span>
            <span>얼마나</span>
            <span>어떻게</span>
            <div> </div>
          </DetailMonthlyExpenseTableHeader>
          <DetailExpenseItemContainer>
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
            <DetailExpenseItem />
          </DetailExpenseItemContainer>
        </DetailMonthlyExpenseTable>
      </DetailMonthlyExpenseContainer>
    </>
  );
};

const DetailMonthlyExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailMonthlyExpenseTable = styled.section`
  width: 80%;
  height: 480px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white100};
`;

const DetailMonthlyExpenseTableHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.content};
  line-height: ${({ theme }) => theme.lineHeight.content};

  padding-bottom: 1rem;

  span {
    width: 100px;
  }

  span:nth-child(5) {
    width: 450px;
  }

  div {
    width: 200px;
  }
`;

const DetailExpenseItemContainer = styled.div`
  overflow-y: scroll;
`;
export default DetailMonthlyExpense;
