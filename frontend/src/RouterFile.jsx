import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";

const RouterFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
