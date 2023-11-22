export const selectUsersModule = (store) => store.users;

export const selectUserNameById = (store, userId) =>
  selectUsersModule(store)?.entities[userId]?.name;
