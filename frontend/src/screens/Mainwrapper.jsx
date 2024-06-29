import { Outlet } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Alertdialog from "../global/components/alertdialog";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Header from "../global/components/header";
import Footer from "../global/components/footer";

const MainWrapper = () => {
    const progress = useSelector(state => state.topLoadingBarReducer.progress);

    return <div className="w-[100dvw] h-[100dvh] relative">
        <div className="fixed w-full h-full pointer-events-none">
            <Alertdialog />

            <ToastContainer />
            <LoadingBar
                height={3}
                color='#1d4ed8'
                progress={progress}
            />
        </div>

        <div className="w-full flex flex-col overflow-y-auto top-0">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>;
};

export default MainWrapper;