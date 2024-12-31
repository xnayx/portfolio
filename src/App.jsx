import {Route, Routes, BrowserRouter} from "react-router-dom";
import "@/css/App.css";
import {Home} from "@/pages/home";
import {Contact} from "@/pages/contact";
import {Blog} from "@/pages/blog";

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
