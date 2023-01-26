import { H4 } from 'components/common';
import useUserExpenses from 'hooks/useUserExpenses';
import useUserExpenseYears from 'hooks/useUserExpensesYears';
import { useState } from 'react';
import styled from 'styled-components';
import MonthlyExpense from './MonthlyExpense';

const ExpenseReport = () => {
  const [year, setYear] = useState<string>(new Date().getFullYear().toString());

  const { isLoading } = useUserExpenses('userid1', year);
  const { years } = useUserExpenseYears('userid1');
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <H4>{year}년 월별 소비 리포트</H4>
      <label htmlFor="year">연도선택</label>
      <select
        name="year"
        id="year"
        onChange={(e) => {
          setYear(e.target.value);
        }}
        value={year}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <MonthlyExpenseContainer>
        <MonthlyExpense selectedYear={year} />
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
