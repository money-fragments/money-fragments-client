import { DetailMonthlyExpense, ExpenseReport } from 'components/my-page';
import useUserExpenses from 'hooks/useUserExpenses';
import styled from 'styled-components';

const MyPage = () => {
  const { isError, isLoading } = useUserExpenses('userid1');

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <MyPageContainer>
      <ExpenseReport />
      <DetailMonthlyExpense />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.main``;

export default MyPage;
