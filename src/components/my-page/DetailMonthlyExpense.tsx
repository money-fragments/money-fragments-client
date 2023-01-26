import { H4 } from 'components/common';
import useUserExpenses from 'hooks/useUserExpenses';
import styled from 'styled-components';
import DetailExpenseItem from './DetailExpenseItem';
import { useState, useEffect } from 'react';

interface DetailMonthlyExpenseProps {
  year: string;
}

const DetailMonthlyExpense = ({ year }: DetailMonthlyExpenseProps) => {
  const { data: expenses } = useUserExpenses('userid1', year);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    new Date(Date.now()).getMonth().toString()
  );
  const [monthlyExpenses, setMonthlyExpenses] = useState<Expense[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const month: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    if (expenses && selectedMonth) {
      const monthlyExpenses = expenses.filter(
        (expense) => expense.month === selectedMonth
      );
      setMonthlyExpenses(monthlyExpenses);
    }
  }, [selectedMonth, expenses]);

  useEffect(() => {
    if (monthlyExpenses.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [monthlyExpenses]);

  return (
    <DetailMonthlyExpenseContainer>
      <MonthlyTitle>월별 상세 지출 내역</MonthlyTitle>
      <MonthlyLabel htmlFor="month">
        월 선택
        <MonthlySelect
          name="month"
          id="month"
          value={selectedMonth}
          onChange={(e) => {
            setSelectedMonth(e.target.value);
          }}
        >
          {month.map((month) => (
            <option key={month} value={month - 1}>
              {month}월
            </option>
          ))}
        </MonthlySelect>
      </MonthlyLabel>
      {isEmpty && <div>지출 내역이 없습니다.</div>}
      {!isEmpty && (
        <DetailMonthlyExpenseTable>
          <DetailMonthlyExpenseTableHeader>
            <span>언제</span>
            <span>어디서</span>
            <span>무엇을</span>
            <span>얼마나</span>
            <span>어떻게</span>
            <div> </div>
          </DetailMonthlyExpenseTableHeader>
          <DetailExpenseItemContainer>
            {monthlyExpenses.map((expense) => (
              <DetailExpenseItem key={expense.id} expense={expense} />
            ))}
          </DetailExpenseItemContainer>
        </DetailMonthlyExpenseTable>
      )}
    </DetailMonthlyExpenseContainer>
  );
};

const DetailMonthlyExpenseContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const DetailMonthlyExpenseTable = styled.section`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 5px;
  box-shadow: 4px 3px 8px 1px #aba4e942;
  &:hover {
    box-shadow: 4px 3px 8px 1px #aba4e984;
  }
`;

const DetailMonthlyExpenseTableHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.content};
  line-height: ${({ theme }) => theme.lineHeight.content};

  padding-bottom: 1rem;

  span {
    width: 100px;
  }

  span:nth-child(5) {
    width: 450px;
  }

  div {
    width: 200px;
  }
`;

const DetailExpenseItemContainer = styled.div`
  overflow-y: scroll;
`;

const MonthlyTitle = styled(H4)`
  margin: 1rem 0;
`;

const MonthlyLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.h6};
  line-height: ${({ theme }) => theme.lineHeight.h6};
`;

const MonthlySelect = styled.select`
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
export default DetailMonthlyExpense;
