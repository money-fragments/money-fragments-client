import axios from 'axios';

export const getUserExpense = async (userId: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/posts?userId=${userId}`
  );
  return data;
};
