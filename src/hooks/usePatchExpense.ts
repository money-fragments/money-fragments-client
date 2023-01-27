import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchExpense } from 'utils/api';

const usePatchExpense = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(patchExpense, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userExpenses']);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate };
};

export default usePatchExpense;
