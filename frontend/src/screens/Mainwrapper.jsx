import { Outlet } from "react-router-dom";
import Alertdialog from "../global/components/alertdialog";

const MainWrapper = () => {
    return <div className="fixed w-[100dvw] h-[100dvh]">
        <Alertdialog />

        <Outlet />
    </div>;
};

export default MainWrapper;