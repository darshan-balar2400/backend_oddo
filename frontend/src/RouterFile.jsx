import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import HomeScreen from "./screens/Homescreen";
import AuthWrapper from "./screens/Authwrapper";
import ProfileScreen from "./screens/Profilescreen";
import SignUp from "./screens/Signup";
import Dashboard from "./screens/Dashboard";

const RouterFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route element={<AuthWrapper />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* protected routes */}
        <Route path="/:uuid" element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
