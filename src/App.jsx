import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DragonProvider } from "./context/DragonContext";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

const App = () => (
  <DragonProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
  </DragonProvider>
);

export default App;
