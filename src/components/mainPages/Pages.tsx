import { Route, Routes } from "react-router-dom";
import NotFound from "./utils/not_found/NotFound";
import HomePage from "./pages/HomePage";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
