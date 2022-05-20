import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

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
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <Container>
      <Title>To Dos</Title>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Container>
  );
}

export default ToDoList;
