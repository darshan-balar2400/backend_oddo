import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";

const RouterFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
