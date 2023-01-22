import { H5 } from 'components/common';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface MonthlyExpenseFillProps {
  height: number;
}

interface MonthlyExpenseBarProps {
  expense: number;
  month: number;
  maxExpense: number;
}

const MonthlyExpenseBar = ({
  expense,
  month,
  maxExpense,
}: MonthlyExpenseBarProps) => {
  const [monthlyExpense, setMonthlyExpense] = useState(0);

  useEffect(() => {
    const initMonthlyExpense = setTimeout(() => {
      setMonthlyExpense((expense / maxExpense) * 150);
    }, 300);

    return () => {
      clearTimeout(initMonthlyExpense);
    };
  }, [setMonthlyExpense, expense, maxExpense]);

  return (
    <MonthlyExpenseBarContainer>
      <H5>{month}월</H5>
      <MonthlyExpenseOuterBar>
        <MonthlyExpenseFill height={monthlyExpense} />
      </MonthlyExpenseOuterBar>
    </MonthlyExpenseBarContainer>
  );
};

const MonthlyExpenseBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const MonthlyExpenseOuterBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.mono0};
  border: 1px solid black;
  height: 130px;
  width: 24px;
  border-radius: 15px;
  overflow: hidden;
`;
const MonthlyExpenseFill = styled.div`
  height: ${(props: MonthlyExpenseFillProps) => props.height}px;
  background-color: ${({ theme }) => theme.colors.brand100};
  width: 100%;
  border-radius: 0 0 15px 15px;
  transition: all 0.6s ease-in-out;
`;

export default MonthlyExpenseBar;
