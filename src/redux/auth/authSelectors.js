const selectEmail = (state) => state.auth.userData?.email;
const selectName = (state) => state.auth.userData?.name;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectToken = (state) => state.auth.token;

const authSelectors = {
  selectEmail,
  selectName,
  selectIsLoggedIn,
  selectToken,
};

export default authSelectors;
