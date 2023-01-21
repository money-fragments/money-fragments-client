import { H4 } from 'components/common';
import { Fragment } from 'react';
import styled from 'styled-components';
import MonthlyExpense from './MonthlyExpense';

const ExpenseReport = () => {
  return (
    <>
      <H4>월별 소비 리포트</H4>
      <MonthlyExpenseContainer>
        <MonthlyExpense />
      </MonthlyExpenseContainer>
    </>
  );
};

const MonthlyExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ExpenseReport;
