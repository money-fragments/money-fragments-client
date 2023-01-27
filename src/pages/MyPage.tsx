import { DetailMonthlyExpense, ExpenseReport } from 'components/my-page';
import useUserExpenseYears from 'hooks/useUserExpensesYears';
import { useState } from 'react';
import styled from 'styled-components';

const MyPage = () => {
  const { isError, isLoading, error } = useUserExpenseYears('userid1');

  const [year, setYear] = useState<string>(new Date().getFullYear().toString());

  if (isLoading) return <div>loading...</div>;
  if (isError) return <> error: {error} </>;

  return (
    <MyPageContainer>
      <ExpenseReport year={year} setYear={setYear} />
      <DetailMonthlyExpense year={year} />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
