import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserExpense } from 'utils/api';

const useUserExpenses = (userId: string) => {
  const [monthlyExpense, setMonthlyExpense] = useState<number[]>([]);
  const [maxExpense, setMaxExpense] = useState<number>(0);
  const [years, setYears] = useState<number[]>([]);

  const { data, isError, error, isLoading } = useQuery<Expense[], Error>(
    ['userExpenses'],
    () => getUserExpense(userId)
  );

  useEffect(() => {
    const monthlyExpense: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const years: number[] = [];
    if (data) {
      data.forEach((expense) => {
        const expenseDate = new Date(+expense.date);
        const expenseMonth = expenseDate.getMonth();
        monthlyExpense[expenseMonth] += +expense.price;

        if (!years.includes(expenseDate.getFullYear())) {
          years.push(expenseDate.getFullYear());
        }
      });
      setMonthlyExpense(monthlyExpense);
      setYears(years);
    }
    setMaxExpense(Math.max(...monthlyExpense));
  }, [data]);

  return { data, isError, error, isLoading, monthlyExpense, maxExpense, years };
};

export default useUserExpenses;
