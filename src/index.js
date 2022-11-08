// Copyright (C) Max Goddard 2022
// All rights reserved.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from "pages/Home";
import RebarPage from "pages/rebar/Rebar";
import Error404Page from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/">
                  <Route index element={<HomePage />} />
                  <Route path="rebar" element={<RebarPage />} />
                  <Route path="404" element={<Error404Page />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);