import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DisposeTiresForm from "../components/DiposeTiresForm";
import './DisposeTires.css';
import emailjs from '@emailjs/browser';

export default function DisposeTires () {

    return (
        <div className="dipose-page">
            {/* <Navbar /> */}
            <DisposeTiresForm />
            {/* <Footer /> */}
        </div>
    ) 
}