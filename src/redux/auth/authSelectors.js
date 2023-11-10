const selectEmail = (state) => state.auth.userData?.email;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectToken = (state) => state.auth.token;

const authSelectors = {
  selectEmail,
  selectIsLoggedIn,
  selectToken,
};

export default authSelectors;
