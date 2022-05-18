import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  margin: 10px 0;
  font-size: 26px;
  padding: 15px;
`;

/* function ToDoList() {
  const [toDo, setToDo] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
} */

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password: number;
  password1: number;
  address?: string;
  extraErrors?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        'password1',
        { message: 'Password are not the same' },
        { shouldFocus: true }
      );
    }

    // setError('extraErrors', { message: 'Server Offline' }); // 전체 Form에 해당하는 에러
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register('email', {
            required: 'Email Required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: '네이버 이메일만 입력가능합니다',
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <Input
          {...register('firstName', {
            required: 'Required',
            validate: (value) => !value.includes('nico'),
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <Input
          {...register('lastName', { required: 'Last Name을 입력해주세요' })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <Input
          {...register('password', { required: 'Required' })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <Input
          {...register('password1', { required: 'Required' })}
          placeholder="Password Again"
        />
        <span>{errors?.password1?.message}</span>
        <Input
          {...register('address', { required: 'Required' })}
          placeholder="Address"
        />
        <span>{errors?.address?.message}</span>

        <button>Add</button>

        <span>{errors?.extraErrors?.message}</span>
      </Form>
    </Container>
  );
}

export default ToDoList;
