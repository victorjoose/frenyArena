import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
    );
}