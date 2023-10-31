import { Button, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useApi } from '../../api';

function UserAddModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async params => {
    await useApi().api.user.post(params);
    props.onClose();
  };

  return (
    <Modal show={props.isOpen} size="sm" onClose={() => props.onClose()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>사용자 추가</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                {...register('name', {
                  required: {
                    value: true,
                    message: '이름은 필수 입력 항목입니다.',
                  },
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
                type="text"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                {...register('email', {
                  required: {
                    value: true,
                    message: '이메일은 필수 입력 항목입니다.',
                  },
                })}
              ></input>
              <ErrorMessage
                errors={errors}
                name="code"
                render={({ message }) => (
                  <p style={{ color: 'red' }}>{message}</p>
                )}
              ></ErrorMessage>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">추가</Button>
          <Button color="gray" onClick={() => props.onClose()}>
            취소
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default UserAddModal;
