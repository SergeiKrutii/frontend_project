const selectEmail = (state) => state.auth.userData?.email;
const selectName = (state) => state.auth.userData?.name;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectIsRefreshing = (state) => state.auth.isRefreshing;
const selectToken = (state) => state.auth.token;

const authSelectors = {
  selectEmail,
  selectName,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
};

export default authSelectors;
