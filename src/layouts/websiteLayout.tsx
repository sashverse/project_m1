import { Outlet } from "react-router-dom";
import Footer from "../components/website/Footer";
import Navbar from "../components/website/Navbar";

const WebsiteLayout = () => {
    return(
        <>
            {/* nav here */}
            <Navbar/>
            {/* outlet here */}
            <Outlet/>
            {/* footer here */}
            <Footer/>
        </>
    )
};

export default WebsiteLayout;