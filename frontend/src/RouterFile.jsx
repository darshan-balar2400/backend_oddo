import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import AuthWrapper from "./screens/Authwrapper";
import SignUp from "./screens/Signup";

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
