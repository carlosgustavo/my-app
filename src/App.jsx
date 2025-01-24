
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DragonProvider } from "./context/DragonContext";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CreatePage = React.lazy(() => import("./pages/CreatePage"));
const EditPage = React.lazy(() => import("./pages/EditPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

const App = () => (
  <DragonProvider>
    <Router>
      <Suspense fallback={<div>Carregando Dragons...</div>}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/new" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  </DragonProvider>
);

export default App;
