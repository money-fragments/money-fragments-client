import useUserExpenses from 'hooks/useUserExpenses';
import styled from 'styled-components';
import MonthlyExpenseBar from './MonthlyExpenseBar';

interface MonthlyExpenseProps {
  selectedYear: string;
}

const MonthlyExpense = ({ selectedYear }: MonthlyExpenseProps) => {
  const { monthlyExpense, maxExpense } = useUserExpenses(
    'userid1',
    selectedYear
  );
  return (
    <MonthlyExpenseContainer>
      {monthlyExpense.map((expense, index) => (
        <MonthlyExpenseBar
          key={index}
          expense={expense}
          month={index + 1}
          maxExpense={maxExpense}
        />
      ))}
    </MonthlyExpenseContainer>
  );
};

const MonthlyExpenseContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 260px;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export default MonthlyExpense;
