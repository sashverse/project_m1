import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homeScreen";
import { AboutScreen } from "../screens/aboutScreen";
import WebsiteLayout from "../layouts/websiteLayout";
import ContactScreen from "../screens/contactScreen";
import RegisterScreen from "../screens/registerSceen";
import LoginScreen from "../screens/loginScreen";
import Dashboard from "../screens/dashboard/dashboard";
import DashboardLayout from "../layouts/dashboardLayout";
import Project from "../screens/dashboard/projects";
import Jobs from "../screens/dashboard/Jobs";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebsiteLayout />}>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/about" element={<AboutScreen />} />
                        <Route path="/contact" element={<ContactScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                    </Route>

                    {/* dashboard routes */}
                    <Route element={<DashboardLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/jobs" element={<Jobs />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default AppRoutes;