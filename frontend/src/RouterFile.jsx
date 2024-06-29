import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import HomeScreen from "./screens/Homescreen";
import AuthWrapper from "./screens/Authwrapper";
import ProfileScreen from "./screens/Profilescreen";
import SignUp from "./screens/Signup";
import PageNotFound from "./screens/Pagenotfound";
import Forbidden from "./screens/Forbidden";
import MainWrapper from "./screens/Mainwrapper";
import Dashboard from "./screens/Dashboard";

const RouterFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<AuthWrapper />}>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>

          {/* protected routes */}
          <Route path="profile/:uuid" element={<ProfileScreen />} />

          {/* forbidden routes */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/forbidden" element={<Forbidden />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
