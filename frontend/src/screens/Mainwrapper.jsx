import { Outlet } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Alertdialog from "../global/components/alertdialog";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const MainWrapper = () => {
    const progress = useSelector(state => state.topLoadingBarReducer.progress);

    return <div className="fixed w-[100dvw] h-[100dvh]">
        <Alertdialog />

        <ToastContainer />
        <LoadingBar
            height={3}
            color='#1d4ed8'
            progress={progress}
        />
        <Outlet />
    </div>;
};

export default MainWrapper;