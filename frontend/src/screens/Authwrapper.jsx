import { Outlet } from "react-router-dom";

const AuthWrapper = () => {
    return <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
        <Outlet />
    </div>;
};

export default AuthWrapper;