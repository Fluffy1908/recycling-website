import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import DisposeTiresForm from "../components/DisposeTiresForm";
import './DisposeTires.css';

export default function DisposeTires () {

    return (
        <div className="dipose-page">
            <Navbar />
            <DisposeTiresForm />
            <NewFooter />
        </div>
    ) 
}