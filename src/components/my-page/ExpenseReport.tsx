import { H4 } from 'components/common';
import useUserExpenses from 'hooks/useUserExpenses';
import useUserExpenseYears from 'hooks/useUserExpensesYears';
import styled from 'styled-components';
import MonthlyExpense from './MonthlyExpense';

interface ExpenseReportProps {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

const ExpenseReport = ({ year, setYear }: ExpenseReportProps) => {
  const { years, isLoading, isError, error } = useUserExpenseYears('userid1');
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <ExpenseReportContainer>
      <ReportTitle>{year}년 월별 소비 리포트</ReportTitle>
      <YearLabel htmlFor="year">
        연도선택
        <YearSelect
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
        </YearSelect>
      </YearLabel>
      <MonthlyExpenseContainer>
        <MonthlyExpense selectedYear={year} />
      </MonthlyExpenseContainer>
    </ExpenseReportContainer>
  );
};

const ExpenseReportContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const MonthlyExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReportTitle = styled(H4)`
  margin: 1rem 0;
`;

const YearLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.h6};
  line-height: ${({ theme }) => theme.lineHeight.h6};
`;

const YearSelect = styled.select`
  width: 100px;
  height: 30px;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.white0};
  border: 1px solid ${({ theme }) => theme.colors.mono30};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.brand50};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.brand50};
  }
`;

export default ExpenseReport;
