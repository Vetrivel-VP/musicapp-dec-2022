export const getUserDetailAction = () => {
  return {
    type: "GET_USER",
  };
};

export const setUserDetailAction = (user) => {
  return {
    type: "SET_USER",
    user: user,
  };
};
