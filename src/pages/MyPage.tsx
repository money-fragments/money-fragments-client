import { DetailMonthlyExpense, ExpenseReport } from 'components/my-page';
import { getAuth } from 'firebase/auth';
import useUserExpenseYears from 'hooks/useUserExpensesYears';
import { useState } from 'react';
import styled from 'styled-components';

const MyPage = () => {
  const auth = getAuth();
  const { isError, isLoading, error } = useUserExpenseYears(
    auth.currentUser?.uid!
  );

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
