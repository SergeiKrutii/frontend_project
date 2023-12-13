import Container from "./components/common/container/Container";
import Header from "components/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import InfoPage from "pages/infoPage";
import RegisterPage from "pages/registerPage";
import LoginPage from "pages/loginPage";
import LibraryPage from "pages/libraryPage";

import { useMatchMedia } from "helpers/mediaQuery";
import PrivateRoute from "components/routes/PrivateRoute";
import PublicRoute from "components/routes/PublickRoute";
import TraningPage from "pages/traningPage";
import AddPage from "pages/addPageMobile";

const App = () => {
  const { isMobile, isTablet, isDesctop } = useMatchMedia();
  const deviceSize = isMobile || isTablet;

  return (
    <>
      <Header />
      {isMobile ? (
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<InfoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/traning" element={<TraningPage />} />
            <Route path="/addbook" element={<AddPage />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/traning" element={<LibraryPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
  // return deviceSize ? (
  //   <>
  //     <Header />
  //     <RegisterPage />
  //     <Container>
  //       <InfoPage />
  //       {/* <LoginPage /> */}
  //     </Container>
  //   </>
  // ) : (
  //   <>
  //     <Header />
  //     <div style={{ display: "flex", width: "1280px" }}>
  //       <RegisterPage />
  //       <Container>
  //         <InfoPage />
  //         {/* <LoginPage /> */}
  //       </Container>
  //     </div>
  //   </>
  // );
};

export default App;
