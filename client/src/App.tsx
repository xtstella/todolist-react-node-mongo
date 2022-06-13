import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
    </Route>
  </Routes>
);

export default App;