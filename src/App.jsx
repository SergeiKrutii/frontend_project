import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "redux/auth/authApiSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

import { useMatchMedia } from "helpers/mediaQuery";
import PrivateRoute from "components/routes/PrivateRoute";
import PublicRoute from "components/routes/PublickRoute";
import authSelectors from "redux/auth/authSelectors";
import Layout from "components/layout";

const InfoPage = lazy(() => import("./pages/infoPage"));
const RegisterPage = lazy(() => import("./pages/registerPage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const LibraryPage = lazy(() => import("./pages/libraryPage"));
const TraningPage = lazy(() => import("./pages/traningPage"));
const AddPage = lazy(() => import("./pages/addPageMobile"));
const AddTraningMobPage = lazy(() =>
  import("./pages/traningPage/addTraningMob")
);

const App = () => {
  const { isMobile } = useMatchMedia();
  const [booksForGoalsMob, setBooksForGoalsMob] = useState([]);
  const [dateDiff, setDateDiff] = useState(null);

  const token = useSelector(authSelectors.selectToken);

  const location = useLocation();

  const { isError, isFetching } = useGetUserQuery(token ?? skipToken);

  const handleDeleteTraningBook = (bookId) => {
    const filteredBooks = booksForGoalsMob.filter(
      (book) => book._id !== bookId
    );
    setBooksForGoalsMob(filteredBooks);
  };

  return (
    <div>
      <ToastContainer id="mainContainer" />
      {isMobile ? (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route element={<PublicRoute />}>
                <Route path="/" element={<InfoPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/library" element={<LibraryPage />} />
                <Route
                  path="/traning"
                  element={
                    <TraningPage
                      booksForGoal={booksForGoalsMob}
                      handleDelete={handleDeleteTraningBook}
                      dateDiff={dateDiff}
                    />
                  }
                />
                <Route path="/addbook" element={<AddPage />} />
                <Route
                  path="/addtraningform"
                  element={
                    <AddTraningMobPage
                      setGoalBooks={setBooksForGoalsMob}
                      books={booksForGoalsMob}
                      setDateDiff={setDateDiff}
                    />
                  }
                />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      ) : (
        !isFetching &&
        !isError && (
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Layout />}>
                <Route element={<PublicRoute />}>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/library" element={<LibraryPage />} />
                  <Route
                    path="/traning"
                    element={
                      <TraningPage
                        booksForGoal={booksForGoalsMob}
                        setDateDiff={setDateDiff}
                        dateDiff={dateDiff}
                      />
                    }
                  />
                  <Route path="*" element={<TraningPage />} />
                </Route>
                <Route />
              </Route>
            </Routes>
          </AnimatePresence>
        )
      )}
    </div>
  );
};

export default App;
