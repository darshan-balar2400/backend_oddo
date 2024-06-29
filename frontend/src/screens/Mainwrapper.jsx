import { Outlet } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Alertdialog from "../global/components/alertdialog";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Header from "../global/components/header";
import Footer from "../global/components/footer";

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

        <div className="w-full h-full flex flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>;
};

export default MainWrapper;