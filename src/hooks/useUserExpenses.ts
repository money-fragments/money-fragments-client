import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getUserExpense } from 'utils/api';

const useUserExpenses = (userId: string) => {
  const [monthlyExpense, setMonthlyExpense] = useState<number[]>([]);
  const [maxExpense, setMaxExpense] = useState<number>(0);

  const { data, isError, isLoading } = useQuery('userExpenses', () =>
    getUserExpense(userId)
  );

  useEffect(() => {
    const monthlyExpense: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (data) {
      data.forEach((expense: Expense) => {
        const expenseDate = new Date(+expense.date);
        const expenseMonth = expenseDate.getMonth();
        monthlyExpense[expenseMonth] += +expense.price;
      });
      setMonthlyExpense(monthlyExpense);
    }
    setMaxExpense(Math.max(...monthlyExpense));
  }, [data]);

  return { data, isError, isLoading, monthlyExpense, maxExpense };
};

export default useUserExpenses;
