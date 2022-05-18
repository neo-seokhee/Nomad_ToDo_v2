import React from 'react';
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
  font-size: 18px;
  padding: 15px;
`;

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log('add to do', data.toDo);
    setValue('toDo', '');
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleValid)}>
        <Input
          {...register('toDo', { required: 'Please write a To Do' })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </Form>
    </Container>
  );
}

export default ToDoList;
