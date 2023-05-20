import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./components/sharedLayout/sharedLayout";

const Tweets = lazy(() => import("pages/TweetsPage/Tweets"));
const HomePage = lazy(() => import("pages/HomePage/HomePage.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<Tweets />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
