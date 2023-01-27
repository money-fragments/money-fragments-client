import { getAuth } from 'firebase/auth';
import useUserExpenses from 'hooks/useUserExpenses';
import styled from 'styled-components';
import MonthlyExpenseBar from './MonthlyExpenseBar';

interface MonthlyExpenseProps {
  selectedYear: string;
}

const MonthlyExpense = ({ selectedYear }: MonthlyExpenseProps) => {
  const auth = getAuth();
  const { monthlyExpense, maxExpense } = useUserExpenses(
    auth.currentUser?.uid!,
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

  box-sizing: border-box;
  width: 100%;
  height: 260px;

  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 5px;
  box-shadow: 4px 3px 8px 1px #aba4e942;
  &:hover {
    box-shadow: 4px 3px 8px 1px #aba4e984;
  }

  background-color: ${({ theme }) => theme.colors.white100};
`;

export default MonthlyExpense;
