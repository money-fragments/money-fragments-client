import { CustomButton } from 'components/common/CustomButton';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { CustomModal } from 'components/common/CustomModal';

interface DetailExpenseItemProps {
  expense: Expense;
}

const DetailExpenseItem = ({ expense }: DetailExpenseItemProps) => {
  const [expenseDate, setExpenseDate] = useState<string>('');
  const [expensePrice, setExpensePrice] = useState<string>('');
  const [isModalActive, setIsModalActive] = useState(false);
  const onClickToggleModal = useCallback(() => {
    setIsModalActive(!isModalActive);
  }, [isModalActive]);

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

  return (
    <DetailMonthlyExpenseTableBody>
      <span>{expenseDate}</span>
      <span>{expense.place}</span>
      <span>{expense.product}</span>
      <span>₩ {expensePrice}</span>
      <span>{expense.experience}</span>
      <ButtonContainer>
        <CustomButton width="110px">지도에서 보기</CustomButton>
        <button style={{ border: 'none' }} onClick={onClickToggleModal}>
          <FaRegEdit />
        </button>
        {isModalActive ? (
          <CustomModal
            modal={isModalActive}
            setModal={setIsModalActive}
            width="300"
            height="300"
            element={
              <div>
                <form>
                  언제 : <input />
                  어디서 : <input />
                  무엇을 : <input />
                  얼마 : <input />
                  어떻게 : <input />
                </form>
                <div style={{ display: 'flex' }}>
                  <button>수정완료</button>
                  <button>수정취소</button>
                </div>
              </div>
            }
          />
        ) : (
          ''
        )}

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
