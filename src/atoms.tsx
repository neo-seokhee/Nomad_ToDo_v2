import { atom } from 'recoil';

export interface IToDo {
  text: string;
  category: 'DONE' | 'DOING' | 'TO_DO';
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
