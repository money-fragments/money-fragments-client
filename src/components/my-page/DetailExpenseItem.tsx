import { CustomButton } from 'components/common/CustomButton';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CustomModal } from 'components/common/CustomModal';
import useDeleteExpenseMutation from 'hooks/useDeleteExpenseMutation';
import { customConfirm } from 'utils';
import ExpenseEditModal from './ExpenseEditModal';

interface DetailExpenseItemProps {
  expense: Expense;
}

const DetailExpenseItem = ({ expense }: DetailExpenseItemProps) => {
  const navigate = useNavigate();
  const [expenseDate, setExpenseDate] = useState<string>('');
  const [expensePrice, setExpensePrice] = useState<string>('');
  const [isModalActive, setIsModalActive] = useState(false);
  const onClickToggleModal = useCallback(() => {
    setIsModalActive(!isModalActive);
  }, [isModalActive]);

  const { mutate } = useDeleteExpenseMutation();

  const handleDelete = () => {
    customConfirm(
      '정말 삭제하시겠습니까?',
      '삭제를 원하시면 확인을 눌러주세요',
      '확인',
      () => {
        mutate(expense.id);
      }
    );
  };

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
    <>
      {isModalActive && (
        <CustomModal
          modal={isModalActive}
          setModal={setIsModalActive}
          width="300"
          height="300"
          // @ts-ignore
          element={
            <ExpenseEditModal
              setIsModalActive={setIsModalActive}
              expense={expense}
            />
          }
        />
      )}
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
          <FaRegEdit onClick={onClickToggleModal} />

          <FaRegTrashAlt
            onClick={() => {
              handleDelete();
            }}
          />
        </ButtonContainer>
      </DetailMonthlyExpenseTableBody>
    </>
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
