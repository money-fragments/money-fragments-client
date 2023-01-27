import { useMutation } from '@tanstack/react-query';
import { postExpense } from 'utils/api';
import { customAlert } from 'utils';

const usePostExpense = () => {
  const { mutate } = useMutation(postExpense, {
    onSuccess: (data) => {
      customAlert('지출이 등록되었습니다.');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate };
};

export default usePostExpense;
