import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryState, toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { Categories } from '../atoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  display: block;
  font-size: 40px;
  margin: 30px 0 20px 0;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Container>
      <Title>To Dos</Title>
      <br />
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateToDo />
      {toDos?.map((aToDo) => (
        <ToDo key={aToDo.id} {...aToDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
