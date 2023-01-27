import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSelectedYearUserExpense } from 'utils/api';

const useUserExpenses = (userId: string, year: string) => {
  const [monthlyExpense, setMonthlyExpense] = useState<number[]>([]);
  const [maxExpense, setMaxExpense] = useState<number>(0);

  const { data, isError, error, isLoading, refetch } = useQuery<
    Expense[],
    Error
  >(['userExpenses'], () => getSelectedYearUserExpense(userId, year));

  useEffect(() => {
    const monthlyExpense: number[] = Array.from({ length: 12 }, () => 0);

    if (data) {
      data.forEach((expense) => {
        const expenseDate = new Date(+expense.date);
        const expenseMonth = expenseDate.getMonth();
        monthlyExpense[expenseMonth] += +expense.price;
      });
      setMonthlyExpense(monthlyExpense);
    }
    setMaxExpense(Math.max(...monthlyExpense));
  }, [data]);

  useEffect(() => {
    refetch();
  }, [year, refetch]);

  return { data, isError, error, isLoading, monthlyExpense, maxExpense };
};

export default useUserExpenses;
