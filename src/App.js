import React from "react";
import "./App.css"
import Home from "../src/components/Home"
import { Route, Routes } from 'react-router-dom'
import About from "../src/components/About"
import Solutions from '../src/components/Solutions'
import Projects from '../src/components/Projects'
import Contact from "../src/components/Contact"
export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}


