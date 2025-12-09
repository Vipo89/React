import { usersMock } from '../mock/usersMock';

export const getUsers = () => {
  const aux = [...usersMock];
  return aux;
};
