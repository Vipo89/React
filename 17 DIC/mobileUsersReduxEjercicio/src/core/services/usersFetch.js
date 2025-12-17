const users = [
  {
    id: 1,
    username: 'UserName 1',
    password: '12345',
    mobile: 2,
    fav: false
  },
  {
    id: 2,
    username: 'UserName 2',
    password: '67890',
    mobile: 1,
    fav: true
  },
  {
    id: 3,
    username: 'UserName 3',
    password: '12345',
    fav: false

  },
  {
    id: 4,
    username: 'UserName 4',
    password: '67890',
    mobile: 1,
    fav: false
  },
];

export const getAllUsers = () => {
  return [...users];
};
