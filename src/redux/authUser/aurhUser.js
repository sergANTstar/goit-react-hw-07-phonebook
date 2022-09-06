const getIsLoggedIn = state => state.authUser.isLoggedIn;
const getUserName = state => state.authUser.user.name;
const getUserEmail = state => state.authUser.user.email;
const getFetchCurrentUser = state => state.authUser.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getFetchCurrentUser,
};
export default authSelectors;