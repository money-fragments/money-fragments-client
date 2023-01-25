import { H4 } from 'components/common';
import useUserExpenses from 'hooks/useUserExpenses';
import { useState } from 'react';
import styled from 'styled-components';
import MonthlyExpense from './MonthlyExpense';

const ExpenseReport = () => {
  const { isLoading, years } = useUserExpenses('userid1');
  const [year, setYear] = useState<number>(
    years[0] || new Date().getFullYear()
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <H4>월별 소비 리포트</H4>
      <label htmlFor="year">연도선택</label>
      <select
        name="year"
        id="year"
        onSelect={() => {
          setYear(year);
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
