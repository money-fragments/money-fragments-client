import Swal from 'sweetalert2';

// 삭제버튼 커스텀 알럿
export const handleDeleteButtonClick = () => {
  Swal.fire({
    title: '정말 삭제하시겠습니까?',
    text: '다시 한 번 생각해보세요.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ok',
    // id값이 맞아야 삭제가 되는데.....
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '삭제가 완료되었습니다.',
        'Your file has been deleted.',
        'success'
      );
    }
  });
};

// 경고 커스텀 알럿 입니다.
export const handleAlertButtonClick = () => {
  Swal.fire({
    icon: 'warning',
    title: '경고입니다. 돌아가세요',
    confirmButtonColor: '#3085d6',
  });
};
