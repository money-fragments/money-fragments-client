import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getUserExpenseYears } from 'utils/api';

const useUserExpenseYears = (userId: string) => {
  const [years, setYears] = useState<number[]>([]);
  const { data, isError, isLoading, error } = useQuery<Expense[], Error>(
    ['userExpenseYears'],
    () => getUserExpenseYears(userId)
  );

  useEffect(() => {
    if (data) {
      const years: number[] = [];
      data.forEach((expense) => {
        const expenseDate = new Date(+expense.date);
        if (!years.includes(expenseDate.getFullYear())) {
          years.push(expenseDate.getFullYear());
        }
      });
      setYears(years);
    }
  }, [data]);

  return { years, isError, isLoading, error };
};

export default useUserExpenseYears;
