import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import AuthWrapper from "./screens/Authwrapper";

const RouterFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
