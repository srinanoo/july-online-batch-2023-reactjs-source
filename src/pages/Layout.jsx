import FooterComponent from "../components/Footer/FooterComp";
import HeaderComponent from "../components/Header/HeaderComp";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <HeaderComponent />

            <h3>Layout of the React Project</h3>

            <Outlet />

            <FooterComponent />
        </>
    )
}