import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { getCurrUser } from "./services/api";
import { useDispatch, useSelector } from "react-redux";

export const serverURL = "http://localhost:3000";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrUser(dispatch);
  }, [dispatch]);

  const { userData } = useSelector((state) => state.user);
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to="/auth" replace /> }
        />
        <Route
          path="/auth"
          element={userData ? <Navigate to="/" replace /> : <Auth />}
        />
      </Routes>
    </>
  );
}
