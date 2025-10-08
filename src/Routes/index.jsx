import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loader from "../Layout/Loader";
import LayoutRoutes from "./LayoutRoutes";
import { authRoutes } from "./AuthRoutes";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "../Services/ScrollToTop";
import SignIn from "../Auth";

const Routers = () => {
  const login = localStorage.getItem("login");

  return (
    <Fragment>
      <BrowserRouter basename={"/"}>
        <ScrollToTop />
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={"/"} element={<PrivateRoute />}>
                {login ? (
                  <Fragment>
                    <Route
                      exact
                      path={`${process.env.PUBLIC_URL}`}
                      element={
                        <Navigate to={`${process.env.PUBLIC_URL}/dashboard`} />
                      }
                    />
                    <Route
                      exact
                      path={`/`}
                      element={
                        <Navigate to={`${process.env.PUBLIC_URL}/dashboard`} />
                      }
                    />
                  </Fragment>
                ) : (
                  ""
                )}
                <Route path={`/*`} element={<LayoutRoutes />} />
              </Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                element={<SignIn />}
              />
              {authRoutes.map(({ path, Component }, i) => (
                <Route path={path} element={Component} key={i} />
              ))}
            </Routes>
          </Suspense>
        </>
      </BrowserRouter>
    </Fragment>
  );
};
export default Routers;
