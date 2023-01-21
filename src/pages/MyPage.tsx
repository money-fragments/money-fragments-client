import { DetailMonthlyExpense, ExpenseReport } from 'components/my-page';
import styled from 'styled-components';

const MyPage = () => {
  return (
    <MyPageContainer>
      <ExpenseReport />
      <DetailMonthlyExpense />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.main``;

export default MyPage;
