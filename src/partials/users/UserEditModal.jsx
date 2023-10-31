import { Button, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useApi } from '../../api';

/**
 * useEffect를 사용해서 props를 변환하거나
 * useState를 사용해서 props를 복사하면
 * ...register 함수 내에서 value를 받지 못한다.
 * 따라서 props가 변경 될 때마다 직접 ...register 함수 내에서 value로 넣어줘야 한다.
 */
function UserEditModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async params => {
    console.log('---------', params)
    await useApi().api.user.put(params);
    props.onClose();
  };

  return (
    <Modal show={props.isOpen} size="sm" onClose={() => props.onClose()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>사용자 정보 수정</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="mb-4">
              <input
                type="hidden"
                name="id"
                {...register('id')}
                value={props.selectedItem?.id}
              />

              <label htmlFor="name" className="block text-gray-600">
                이름
              </label>
              {/**
               * input에는 defaultValue를 props로 받아서 설정하여 초기값이 보이도록 하고
               * ...register에서 value 값에 props로 받아서 설정한다.
               */}
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                defaultValue={props.selectedItem?.name}
                {...register('name', {
                  required: {
                    value: true,
                    message: '이름은 필수 입력 항목입니다.',
                  },
                  value: props.selectedItem?.name,
                })}
              ></input>
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <p style={{ color: 'red' }}>{message}</p>
                )}
              ></ErrorMessage>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={props.selectedItem?.email}
                className="w-full p-2 border border-gray-300 rounded-lg"
                {...register('email', {
                  required: {
                    value: true,
                    message: '이메일은 필수 입력 항목입니다.',
                  },
                  value: props.selectedItem?.email,
                })}
              ></input>
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p style={{ color: 'red' }}>{message}</p>
                )}
              ></ErrorMessage>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">수정</Button>
          <Button color="gray" onClick={() => props.onClose()}>
            취소
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default UserEditModal;
