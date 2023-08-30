import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './RubberMulch.css';
import { useTranslation } from 'react-i18next';

export default function RubberMulch () {
    const [t, i18n] = useTranslation("global");
    
    return (
        <>
        <Navbar />
            <h1>Hello</h1>
        <Footer />
        </>
    ) 
}