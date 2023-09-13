import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DisposeTiresForm from "../components/DisposeTiresForm";
import './DisposeTires.css';

export default function DisposeTires () {

    return (
        <div className="dipose-page">
            <Navbar />
            <DisposeTiresForm />
            <Footer />
        </div>
    ) 
}