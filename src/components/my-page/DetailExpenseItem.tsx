import { CustomButton } from 'components/common/CustomButton';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface DetailExpenseItemProps {
  expense: Expense;
}

const DetailExpenseItem = ({ expense }: DetailExpenseItemProps) => {
  const navigate = useNavigate();
  const [expenseDate, setExpenseDate] = useState<string>('');
  const [expensePrice, setExpensePrice] = useState<string>('');

  useEffect(() => {
    if (expense) {
      const date = new Date(+expense.date);
      setExpenseDate(
        `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
      );
      setExpensePrice(
        expense.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      );
    }
  }, [expense, expenseDate]);

  const handleOnClick = () => {
    navigate('/main', { state: { expense } });
  };

  return (
    <DetailMonthlyExpenseTableBody>
      <span>{expenseDate}</span>
      <span>{expense.place}</span>
      <span>{expense.product}</span>
      <span>₩ {expensePrice}</span>
      <span>{expense.experience}</span>
      <ButtonContainer>
        <CustomButton
          onClick={() => {
            handleOnClick();
          }}
          width="110px"
        >
          지도에서 보기
        </CustomButton>
        <FaRegEdit />
        <FaRegTrashAlt />
      </ButtonContainer>
    </DetailMonthlyExpenseTableBody>
  );
};

const DetailMonthlyExpenseTableBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.content};
  line-height: ${({ theme }) => theme.lineHeight.content};

  span {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:nth-child(5) {
    width: 450px;
    max-height: 18px;
  }

  div {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default DetailExpenseItem;
