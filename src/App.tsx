import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import EssayPage from "./EssayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="essays/:title" element={<EssayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
