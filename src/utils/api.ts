import axios from 'axios';
import { EditExpense } from 'components/my-page/ExpenseEditModal';

export const getSelectedYearUserExpense = async (
  userId: string,
  year: string
) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/posts?userId=${userId}&year=${year}`
  );
  return data;
};

export const getUserExpenseYears = async (userId: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/posts?userId=${userId}`
  );
  return data;
};

export const postExpense = async (expense: Expense) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}/posts`,
    expense
  );
  return data;
};

export const deleteExpense = async (id: string) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_API_URL}/posts/${id}`
  );
  return data;
};

export const patchExpense = async (expense: EditExpense) => {
  const { data } = await axios.patch(
    `${process.env.REACT_APP_API_URL}/posts/${expense.id}`,
    expense
  );
  return data;
};
