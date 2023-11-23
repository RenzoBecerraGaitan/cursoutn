import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./../components/About/About";
import Index from "../components/Index/Index";
import Products from "../components/Products/Products";

export default function RouterConfig() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />}/>
                </Routes>
            </Router>
        </>
    )
}