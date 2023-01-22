import styled from 'styled-components';
import MonthlyExpenseBar from './MonthlyExpenseBar';

const MonthlyExpense = () => {
  return (
    <MonthlyExpenseContainer>
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
      <MonthlyExpenseBar />
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
