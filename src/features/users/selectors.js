const selectUsersModule = (store) => store.users;

export const selectUserNameById = (store, id) =>
  selectUsersModule(store).entities[id].name;
