import Container from "./components/common/container/Container";
import Header from "components/header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { useGetUserQuery } from "redux/auth/authApiSlice";
import InfoPage from "pages/infoPage";
import RegisterPage from "pages/registerPage";
import LoginPage from "pages/loginPage";
import LibraryPage from "pages/libraryPage";
import TraningPage from "pages/traningPage";

import { useMatchMedia } from "helpers/mediaQuery";
import PrivateRoute from "components/routes/PrivateRoute";
import PublicRoute from "components/routes/PublickRoute";
import AddPage from "pages/addPageMobile";
import AddTraningMobPage from "pages/traningPage/addTraningMob/AddTraningMobPage";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { skipToken } from "@reduxjs/toolkit/query";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "components/Loader/Loader";
import Layout from "components/Layout/Layout";

const App = () => {
  const { isMobile, isTablet, isDesctop } = useMatchMedia();
  const [booksForGoalsMob, setBooksForGoalsMob] = useState([]);
  const [dateDiff, setDateDiff] = useState(null);

  const token = useSelector(authSelectors.selectToken);
  const location = useLocation();

  const { isFetching } = useGetUserQuery(token ?? skipToken);

  const handleDeleteTraningBook = (bookId) => {
    const filteredBooks = booksForGoalsMob.filter(
      (book) => book._id !== bookId
    );
    setBooksForGoalsMob(filteredBooks);
  };

  return (
    <div>
      {isMobile ? (
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
      ) : (
        !isFetching && (
          <AnimatePresence mode="wait">
            <Suspense
              fallback={
                <Loader
                  height="461px"
                  width="559px"
                  className="showcase-item__new-loader"
                  viewBox="0 0 559 461"
                />
              }
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                  <Route element={<PublicRoute />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                  </Route>
                  <Route element={<PrivateRoute />}>
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/traning" element={<TraningPage />} />
                    <Route path="*" element={<TraningPage />} />
                  </Route>
                  <Route />
                </Route>
              </Routes>
            </Suspense>
          </AnimatePresence>
        )
      )}
    </div>
  );
};

export default App;
