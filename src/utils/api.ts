import axios from 'axios';

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
