import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteExpense } from 'utils/api';

const useDeleteExpenseMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteExpense, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userExpenses']);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate };
};

export default useDeleteExpenseMutation;
